import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

console.log(import.meta.env);

function App() {
    const [accessToken, setAccessToken] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [topPicks, setTopPicks] = useState([]);
    const [newReleases, setNewReleases] = useState([]);

    const clientId = import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

    const fetchAccessToken = async () => {
        try {
            const authHeader = btoa(`${clientId}:${clientSecret}`);
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Basic ${authHeader}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: "grant_type=client_credentials",
                }
            );
            const data = await response.json();
            setAccessToken(data.access_token);
        } catch (error) {
            console.error("Error fetching access token:", error);
        }
    };

    const fetchNewReleases = async () => {
        if (!accessToken) return;

        try {
            const response = await fetch(
                "https://api.spotify.com/v1/browse/new-releases",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const data = await response.json();
            setNewReleases(data.albums.items);
        } catch (error) {
            console.error("Error fetching new releases:", error);
        }
    };

    const fetchTopPicks = async () => {
        if (!accessToken) return;

        try {
            const response = await fetch(
                "https://api.spotify.com/v1/reccomendations?seed_genres=pop",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const data = await response.json();
            setTopPicks(data.tracks);
        } catch (error) {
            console.error("Error fetching top picks", error);
        }
    };

    const handleSearch = async (query, category) => {
        if (!accessToken || !query) return;

        try {
            const response = await fetch(
                `https://api.spotify.com/v1/search?q=${query}&type=track`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const data = await response.json();

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

    useEffect(() => {
        fetchAccessToken();
    }, []);

    useEffect(() => {
        if (accessToken) {
            fetchNewReleases();
            fetchTopPicks();
        }
    }, [accessToken]);

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar onSearch={handleSearch} />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full h-full">
                <div className="w-full h-full">
                    <Sideboard />
                </div>
                <div className="w-full h-full">
                    <RightSideboard
                        searchResults={searchResults}
                        topPicks={topPicks}
                        newReleases={newReleases}
                    />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;

// a few issues, setTopPicks and in the handle search function we are not using the category prop.
