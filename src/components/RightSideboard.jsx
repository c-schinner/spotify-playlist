import SongCarousel from "./SongCarousel";

const RightSideboard = () => {
    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="mb-2">
                <p>Your search results...</p>
                <SongCarousel />
            </div>
            <div className="mb-2">
                <p>Top Picks!</p>
                <SongCarousel />
            </div>
            <div className="mb-2">
                <p>New Releases.</p>
                <SongCarousel />
            </div>
        </div>
    );
};

export default RightSideboard;
