import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./Sideboard";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="grid grid-cols-2">
                <Sideboard />
                <RightSideboard />
            </div>
        </div>
    );
}

export default App;
