import Footer from "./components/Footer";
import LibraryBar from "./components/LibraryBar";

const Sideboard = () => {
    return (
        <div>
            <div className="artboard phone-1">
                <LibraryBar />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Sideboard;
