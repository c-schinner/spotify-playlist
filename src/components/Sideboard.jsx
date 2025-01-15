import LibraryBar from "./LibraryBar";
import MusicCard from "./MusicCard";

const Sideboard = () => {
    return (
        <div className="h-full flex flex-col p-4 md:max-w-[400px] md:max-h-screen">
            <div className="flex-1 space-y-2 min-w-[150px] min-h-[250px] sm:w-full sm:h-full">
                <LibraryBar />
                <MusicCard />
            </div>
        </div>
    );
};

export default Sideboard;
