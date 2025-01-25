import NewReleasesCarousel from "./NewReleasesCarousel";
import SearchResultCarousel from "./SearchResultCarousel";
import { useState } from "react";
import SkeletonCard from "./SkeletonCard";

import PropTypes from "prop-types";

const RightSideboard = ({ newReleases, accessToken }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        if (!accessToken || !searchQuery) return;

        try {
            let url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;

            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                console.error("Failed to load tracks:");
            }

            const data = await response.json();
            console.log("Search Data:", data);
            setSearchResults(data.tracks.items);
            setHasSearched(true);
        } catch (error) {
            console.error("Error fetching tracks:", error);
        }
    };

    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="flex items-center justify-center mb-8 mt-2">
                <div>
                    <div>
                        <input
                            className="input input-bordered"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="indicator">
                    <button
                        className="ml-1 btn join-item"
                        onClick={handleSearch}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="mb-2">
                <p>Your Search Results...</p>
                {!hasSearched ? (
                    <div className="p-2 mt-2">
                        <SkeletonCard />
                    </div>
                ) : (
                    <SearchResultCarousel data={searchResults} />
                )}
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
    accessToken: PropTypes.string,
};

export default RightSideboard;
