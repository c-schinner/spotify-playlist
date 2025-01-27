import Navbar from "./components/Navbar";
import RightSideboard from "./components/RightSideboard";
import Sideboard from "./components/Sideboard";
import Footer from "./components/Footer";

import { useState, useEffect, useCallback } from "react";

function App() {
    const [accessToken, setAccessToken] = useState(null);
    const [newReleases, setNewReleases] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState(null);

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

    const fetchNewReleases = useCallback(async () => {
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
    }, [accessToken]);

    const handleAddToSideboard = (song) => {
        console.log("Adding song to sideboard:", song);
        setSelectedSongs(song);
    };

    useEffect(() => {
        fetchAccessToken();
    }, []);

    useEffect(() => {
        if (accessToken) {
            fetchNewReleases();
        }
    }, [accessToken, fetchNewReleases]);

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full h-full">
                <div className="w-full h-full">
                    <Sideboard selectedSongs={selectedSongs} />
                </div>
                <div className="w-full h-full">
                    <RightSideboard
                        newReleases={newReleases}
                        accessToken={accessToken}
                        onAddToSideboard={handleAddToSideboard}
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
