import SongCarousel from "./SongCarousel";

const RightSideboard = () => {
    return (
        <div className="artboard phone-4 h-full overflow-y-auto">
            <div className="">
                <SongCarousel />
            </div>
            <div className="">
                <SongCarousel />
            </div>
        </div>
    );
};

export default RightSideboard;
