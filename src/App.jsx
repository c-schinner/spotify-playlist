import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="grid grid-cols-2">
                <div className="w-full">
                    <Sideboard />
                </div>
                <div className="w-auto">
                    <RightSideboard />
                </div>
            </div>
        </div>
    );
}

export default App;
