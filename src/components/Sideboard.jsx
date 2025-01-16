import LibraryBar from "./LibraryBar";
import LibraryCard from "./LibraryCard";
import MusicCard from "./MusicCard";

const Sideboard = () => {
    return (
        <div className="h-full flex flex-col px-4 w-full">
            <div className="flex-1 space-y-2 min-w-[150px] min-h-[250px] sm:w-full sm:h-full">
                <LibraryBar />
                <MusicCard />
                <div className="overflow-x-auto">
                    <LibraryCard />
                </div>
            </div>
        </div>
    );
};

export default Sideboard;
