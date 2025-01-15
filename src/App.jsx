import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="grid grid-cols-2">
                <div className="w-full h-full">
                    <Sideboard />
                </div>
                <div className="w-full">
                    <RightSideboard />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
