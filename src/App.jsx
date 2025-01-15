import Navbar from "./components/Navbar";
import Sideboard from "./Sideboard";

function App() {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="">
                <Sideboard />
            </div>
        </div>
    );
}

export default App;
