import LibraryBar from "./LibraryBar";
import LibraryCard from "./LibraryCard";
import MusicCard from "./MusicCard";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import SkeletonCard from "./SkeletonCard";
import { useState, useEffect } from "react";
import { db, auth } from "../FirebaseConfig";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";

const Sideboard = ({ selectedSongs, onAddToSideboard, accessToken }) => {
    console.log("Selected song data:", selectedSongs);

    const [playlist, setPlaylist] = useState([]);
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState([]);

    const [player, setPlayer] = useState(null);
    const [deviceId, setDeviceId] = useState(null);

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const fetchPlaylists = async () => {
        const user = auth.currentUser;
        if (user) {
            try {
                const playlistRef = collection(
                    db,
                    "users",
                    user.uid,
                    "playlists"
                );
                const querySnapshot = await getDocs(playlistRef);
                const loadedPlaylists = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNewPlaylist(loadedPlaylists);
            } catch (error) {
                console.error("Error fetching playlists:", error);
            }
        }
    };

    useEffect(() => {
        if (accessToken) {
            window.onSpotifyWebPlaybackSDKReady = () => {
                const newPlayer = new window.Spotify.Player({
                    name: "My Web Player",
                    getOAuthToken: (cb) => cb(accessToken),
                    volume: 0.5,
                });

                newPlayer.addListener("ready", ({ device_id }) => {
                    console.log(
                        "Spotify Player Ready with Device ID",
                        device_id
                    );
                    setDeviceId(device_id);
                });

                newPlayer.addListener("not_ready", ({ device_id }) => {
                    console.log("Device ID has gone offline", device_id);
                });

                newPlayer.connect();
                setPlayer(newPlayer);
            };
        }

        return () => {
            if (player) {
                player.disconnect();
            }
        };
    }, [accessToken]);

    const handlePlaySong = async (trackUri) => {
        if (!deviceId || !accessToken) {
            console.error("Spotify device is not initialized yet.");
            return;
        }

        try {
            await fetch(
                `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uris: [trackUri],
                    }),
                }
            );
            console.log("Playing track:", trackUri);
        } catch (error) {
            console.error("Error playing track:", error);
        }
    };

    const handleSavePlaylist = async (playlistName) => {
        if (!playlistName || playlist.length == 0) {
            alert("Enter a name and add songs to save the playlist.");
            return;
        }
        const user = auth.currentUser;
        if (user) {
            try {
                const newPlaylist = { name: playlistName, song: playlist };
                await addDoc(
                    collection(db, "users", user.uid, "playlists"),
                    newPlaylist
                );
                alert("Playlist saved successfully!");
                fetchPlaylists();
            } catch (error) {
                console.error("Error saving playlist:", error);
            }
        }
    };

    const handleDeletePlaylist = async (playlistId) => {
        const user = auth.currentUser;
        if (user) {
            try {
                const playlistRef = doc(
                    db,
                    "users",
                    user.uid,
                    "playlists",
                    playlistId
                );
                await deleteDoc(playlistRef);
                alert("Playlist deleted successfully!");
                fetchPlaylists();
            } catch (error) {
                console.error("Error deleting playlist:", error);
            }
        }
    };

    const handleSelectPlaylist = (playlist) => {
        if (playlist && playlist.songs) {
            setSelectedPlaylist(playlist.song);
        } else {
            setSelectedPlaylist([]);
        }
        console.log("Selected Playlist:", playlist);
    };

    const handleSaveSong = (song) => {
        if (song && !playlist.some((s) => s.id === song.id)) {
            setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
        }
    };

    const handleDeleteSong = (song) => {
        if (song) {
            setPlaylist(playlist.filter((s) => s.id !== song.id));
        }
    };

    return (
        <div className="h-full flex flex-col px-4 w-full">
            <div className="flex-1 space-y-2 min-w-[150px] min-h-[250px] sm:w-full sm:h-full">
                <LibraryBar
                    onSavePlaylist={handleSavePlaylist}
                    onDeletePlaylist={handleDeletePlaylist}
                    playlists={newPlaylist}
                    onSelectPlaylist={handleSelectPlaylist}
                />
                <div>
                    <p>Selected Song:</p>
                </div>
                <div className="flex flex-row">
                    {!selectedSongs ? (
                        <SkeletonCard />
                    ) : (
                        <MusicCard song={selectedSongs} />
                    )}
                    <div className="flex flex-col pl-8 pt-8">
                        <button
                            onClick={() => handlePlaySong(selectedSongs.uri)}
                            className="btn btn-outline btn-success"
                        >
                            <CiPlay1 size={24} />
                        </button>
                        <button
                            onClick={() => handleDeleteSong(selectedSongs)}
                            className="btn btn-outline btn-error mt-8"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => handleSaveSong(selectedSongs)}
                            className="btn btn-outline btn-accent mt-8"
                        >
                            Save
                        </button>
                    </div>
                </div>
                <div className="pt-6 pb-4">
                    <p>Current Playlist:</p>
                </div>
                <div className="overflow-x-auto">
                    <LibraryCard
                        onAddToSideboard={onAddToSideboard}
                        playlist={playlist}
                        selectedPlaylist={selectedPlaylist}
                    />
                </div>
            </div>
        </div>
    );
};

Sideboard.propTypes = {
    selectedSongs: PropTypes.object,
    onAddToSideboard: PropTypes.func.isRequired,
    accessToken: PropTypes.string,
};

export default Sideboard;
