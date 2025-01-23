import NewReleasesCarousel from "./NewReleasesCarousel";
import SearchResultCarousel from "./SearchResultCarousel";
import TopPicksCarousel from "./TopPicksCarousel";
import PropTypes from "prop-types";

const RightSideboard = ({ searchResults, topPicks, newReleases }) => {
    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="mb-2">
                <p>Your Search Results...</p>
                <SearchResultCarousel data={searchResults} />
            </div>
            <div className="mb-2">
                <p>Top Picks!</p>
                <TopPicksCarousel data={topPicks} />
            </div>
            <div className="mb-2">
                <p>New Releases.</p>
                <NewReleasesCarousel data={newReleases} />
            </div>
        </div>
    );
};

RightSideboard.propTypes = {
    searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
    topPicks: PropTypes.arrayOf(PropTypes.object).isRequired,
    newReleases: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RightSideboard;
