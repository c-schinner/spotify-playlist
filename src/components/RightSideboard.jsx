import SongCarousel from "./SongCarousel";

const RightSideboard = () => {
    return (
        <div className="h-full flex flex-col gap-4 p-4">
            <div className="flex-1">
                <SongCarousel />
            </div>
            <div className="flex-1">
                <SongCarousel />
            </div>
        </div>
    );
};

export default RightSideboard;
