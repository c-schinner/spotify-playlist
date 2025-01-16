import LibraryBar from "./LibraryBar";
import LibraryCard from "./LibraryCard";
import MusicCard from "./MusicCard";

const Sideboard = () => {
    return (
        <div className="h-full flex flex-col px-4 w-full">
            <div className="flex-1 space-y-2 min-w-[150px] min-h-[250px] sm:w-full sm:h-full">
                <LibraryBar />
                <div>
                    <p>Selected Song:</p>
                </div>
                <div className="flex flex-row">
                    <MusicCard />
                    <div className="flex flex-col pl-8 pt-8">
                        <button className="btn btn-outline btn-success mb-4">
                            Save
                        </button>
                        <button className="btn btn-outline btn-error mt-4">
                            Delete
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

export default Sideboard;
