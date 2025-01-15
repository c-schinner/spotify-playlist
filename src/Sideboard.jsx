import Footer from "./components/Footer";
import LibraryBar from "./components/LibraryBar";
import MusicCard from "./components/MusicCard";

const Sideboard = () => {
    return (
        <div>
            <div className="artboard phone-1">
                <LibraryBar />
                <MusicCard />
                <Footer />
            </div>
        </div>
    );
};

export default Sideboard;
