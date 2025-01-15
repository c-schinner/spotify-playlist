import SongCarousel from "./SongCarousel";

const RightSideboard = () => {
    return (
        <div className="h-full overflow-y-auto overflow-x-hidden mt-10">
            <div className="mb-2">
                <SongCarousel />
            </div>
            <div className="mb-2">
                <SongCarousel />
            </div>
            <div className="mb-2">
                <SongCarousel />
            </div>
        </div>
    );
};

export default RightSideboard;
