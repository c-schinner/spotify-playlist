import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
