import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function App() {
    const [accessToken, setAccessToken] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [newReleases, setNewReleases] = useState([]);

    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    console.log(import.meta.env);
    console.log("Client ID:", clientId);
    console.log("Client Secret:", clientSecret);

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

    console.log("Access token:", accessToken);

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
        }
    }, [accessToken]);

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar onSearch={(query) => handleSearch(query, "")} />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full h-full">
                <div className="w-full h-full">
                    <Sideboard />
                </div>
                <div className="w-full h-full">
                    <RightSideboard
                        searchResults={searchResults}
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
