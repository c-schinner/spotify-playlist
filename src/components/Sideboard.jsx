import Footer from "./Footer";
import LibraryBar from "./LibraryBar";
import MusicCard from "./MusicCard";

const Sideboard = () => {
    return (
        <div className="h-full flex flex-col p-4">
            <div className="artboard phone-1 flex-1 space-y-2">
                <LibraryBar />
                <MusicCard />
                <Footer />
            </div>
        </div>
    );
};

export default Sideboard;
