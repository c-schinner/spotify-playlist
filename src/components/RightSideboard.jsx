import NewReleasesCarousel from "./NewReleasesCarousel";
import SearchResultCarousel from "./SearchResultCarousel";
import TopPicksCarousel from "./TopPicksCarousel";

const RightSideboard = () => {
    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="mb-2">
                <p>Your Search Results...</p>
                <SearchResultCarousel />
            </div>
            <div className="mb-2">
                <p>Top Picks!</p>
                <TopPicksCarousel />
            </div>
            <div className="mb-2">
                <p>New Releases</p>
                <NewReleasesCarousel />
            </div>
        </div>
    );
};

export default RightSideboard;
