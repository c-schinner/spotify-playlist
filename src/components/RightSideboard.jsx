import SongCarousel from "./SongCarousel";

const RightSideboard = () => {
    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
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
