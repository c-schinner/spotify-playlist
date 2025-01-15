import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <Sideboard />
                </div>
                <div className="w-full md:w-1/2">
                    <RightSideboard />
                </div>
            </div>
        </div>
    );
}

export default App;
