import NewReleasesCarousel from "./NewReleasesCarousel";
import SearchResultCarousel from "./SearchResultCarousel";

import PropTypes from "prop-types";

const RightSideboard = ({ searchResults, newReleases }) => {
    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="mb-2">
                <p>Your Search Results...</p>
                <SearchResultCarousel data={searchResults} />
            </div>
            <div className="mb-2">
                <p>New Releases.</p>
                <NewReleasesCarousel data={newReleases} />
            </div>
        </div>
    );
};

RightSideboard.propTypes = {
    searchResults: PropTypes.array,
    newReleases: PropTypes.array,
};

export default RightSideboard;
