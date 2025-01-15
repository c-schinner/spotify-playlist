import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sideboard from "./Sideboard";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div>
                <Sideboard />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
