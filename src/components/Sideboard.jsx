import LibraryBar from "./LibraryBar";
import LibraryCard from "./LibraryCard";
import MusicCard from "./MusicCard";
import { CiPlay1 } from "react-icons/ci";
import PropTypes from "prop-types";
import SkeletonCard from "./SkeletonCard";

const Sideboard = ({ selectedSongs }) => {
    console.log("Selected song data:", selectedSongs);

    return (
        <div className="h-full flex flex-col px-4 w-full">
            <div className="flex-1 space-y-2 min-w-[150px] min-h-[250px] sm:w-full sm:h-full">
                <LibraryBar />
                <div>
                    <p>Selected Song:</p>
                </div>
                <div className="flex flex-row">
                    {!selectedSongs || selectedSongs.length === 0 ? (
                        <SkeletonCard />
                    ) : (
                        selectedSongs.map((song, index) => (
                            <MusicCard key={index} song={song} />
                        ))
                    )}
                    <div className="flex flex-col pl-8 pt-8">
                        <button className="btn btn-outline btn-success">
                            <CiPlay1 size={24} />
                        </button>
                        <button className="btn btn-outline btn-error mt-8">
                            Delete
                        </button>
                        <button className="btn btn-outline btn-accent mt-8">
                            Save
                        </button>
                    </div>
                </div>
                <div className="pt-6 pb-4">
                    <p>Current Playlist:</p>
                </div>
                <div className="overflow-x-auto">
                    <LibraryCard />
                </div>
            </div>
        </div>
    );
};

Sideboard.propTypes = {
    selectedSongs: PropTypes.array,
};

export default Sideboard;
