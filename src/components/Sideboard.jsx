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

const Sideboard = ({ selectedSongs, onAddToSideboard }) => {
    console.log("Selected song data:", selectedSongs);

    const [playlist, setPlaylist] = useState([]);
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const fetchPlaylists = async () => {
        if (newPlaylist.length > 0) return;

        const user = auth.currentUser;
        if (!user) return;

        try {
            const playlistRef = collection(db, "users", user.uid, "playlists");
            const querySnapshot = await getDocs(playlistRef);
            const loadedPlaylists = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setNewPlaylist(loadedPlaylists);
        } catch (error) {
            console.error("Error fetching playlists:", error);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

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
        if (!playlist || !playlist.song) return;
        setSelectedPlaylist({
            ...playlist,
            song: playlist.song || [],
        });
        console.log("Selected Playlist:", playlist);
    };

    const handleSaveSong = (song) => {
        const artistName =
            song.artists && song.artists.length > 0
                ? song.artists[0]?.name
                : "Unkown Artist";

        const albumImage =
            song.album?.images && song.album.images.length > 0
                ? song.album.images[0].url
                : "default-image-url";

        const simplifiedSong = {
            artistName,
            songName: song.name,
            albumName: song.album?.name || "Unknown Album",
            albumImage,
        };

        setPlaylist((prevPlaylist) => {
            if (
                !prevPlaylist.some(
                    (s) => s.songName === simplifiedSong.songName
                )
            ) {
                return [...prevPlaylist, simplifiedSong];
            }
            return prevPlaylist;
        });

        setSelectedPlaylist((prevSelectedPlaylist) => {
            if (
                prevSelectedPlaylist &&
                prevSelectedPlaylist.song &&
                !prevSelectedPlaylist.song.some(
                    (s) => s.songName === simplifiedSong.songName
                )
            ) {
                return {
                    ...prevSelectedPlaylist,
                    song: [...prevSelectedPlaylist.song, simplifiedSong],
                };
            }
            return prevSelectedPlaylist;
        });
    };

    const handleDeleteSong = (song) => {
        if (!song) return;

        setPlaylist((prevPlaylist) => {
            const filteredSongs = prevPlaylist.filter(
                (s) => s.songName !== song.songName
            );
            return filteredSongs;
        });

        setSelectedPlaylist((prevSelectedPlaylist) => {
            const filteredSongs = prevSelectedPlaylist.song.filter(
                (s) => s.songName !== song.songName
            );

            return {
                ...prevSelectedPlaylist,
                song: filteredSongs,
            };
        });
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
                        <button className="btn btn-outline btn-success">
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
};

export default Sideboard;
