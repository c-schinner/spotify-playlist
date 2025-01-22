import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";
import Footer from "./components/Footer";

console.log(import.meta.env);

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full h-full">
                <div className="w-full h-full">
                    <Sideboard />
                </div>
                <div className="w-full h-full">
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
