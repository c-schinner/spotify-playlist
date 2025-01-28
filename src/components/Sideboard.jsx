import LibraryBar from "./LibraryBar";
import LibraryCard from "./LibraryCard";
import MusicCard from "./MusicCard";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import SkeletonCard from "./SkeletonCard";
import { useState } from "react";

const Sideboard = ({ selectedSongs, onAddToSideboard }) => {
    console.log("Selected song data:", selectedSongs);

    const [playlist, setPlaylist] = useState([]);

    const handleSaveSong = (song) => {
        if (!playlist.some((s) => s.id === song.id)) {
            setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
        }
    };

    const handleDeleteSong = (song) => {
        setPlaylist((prevPlaylist) =>
            prevPlaylist.filter((s) => s.id !== song.id)
        );
    };

    return (
        <div className="h-full flex flex-col px-4 w-full">
            <div className="flex-1 space-y-2 min-w-[150px] min-h-[250px] sm:w-full sm:h-full">
                <LibraryBar />
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
