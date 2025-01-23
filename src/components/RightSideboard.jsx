import NewReleasesCarousel from "./NewReleasesCarousel";
import SearchResultCarousel from "./SearchResultCarousel";
import { useState } from "react";

import PropTypes from "prop-types";

const RightSideboard = ({ newReleases, accessToken }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async (query, category) => {
        if (!accessToken || !query) return;

        try {
            let url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
            if (category) {
                url += `&genre=${encodeURIComponent(category)}`;
            }

            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                console.error("Error response:", await response.json());
            }

            const data = await response.json();
            console.log("Search Data:", data);

            if (category === "track") {
                setSearchResults(data.tracks.items);
            } else if (category === "artist") {
                setSearchResults(data.artists.items);
            } else if (category === "album") {
                setSearchResults(data.albums.items);
            }
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
                <select
                    className="select select-bordered join-item"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option disabled value="">
                        Filter
                    </option>
                    <option value="track">Track</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                </select>
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
    accessToken: PropTypes.string,
};

export default RightSideboard;
