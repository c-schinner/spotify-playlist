import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { db, auth } from "../FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const LibraryBar = ({ onSavePlaylist, onDeletePlaylist }) => {
    const [userPlaylists, setUserPlaylists] = useState([]);

    useEffect(() => {
        const fetchUserPlaylists = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    userPlaylists;
                    const playlistRef = collection(
                        db,
                        "users",
                        user.uid,
                        "playlists"
                    );
                    const q = query(playlistRef);
                    const querySnapshot = await getDocs(q);
                    const loadedPlaylists = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setUserPlaylists(loadedPlaylists);
                } catch (error) {
                    console.error("Error fetching playlists:", error);
                }
            }
        };

        fetchUserPlaylists();
    }, []);

    const handleSave = () => {
        const playlistName = document.getElementById("playlistNameInput").value;
        onSavePlaylist(playlistName);
    };

    const handleDelete = (playlistId) => {
        onDeletePlaylist(playlistId);
        setUserPlaylists((prevPlaylists) =>
            prevPlaylists.filter((playlist) => playlist.id !== playlistId)
        );
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {userPlaylists.map((playlist) => (
                            <li key={playlist.id}>
                                <a>{playlist.name}</a>
                                <button
                                    onClick={() => handleDelete(playlist.id)}
                                    className="btn btn-error btn-xs ml-2"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <input
                id="playlistNameInput"
                type="text"
                placeholder="Playlist Name"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <div className="navbar-end">
                <a onClick={handleSave} className="btn">
                    Save
                </a>
            </div>
        </div>
    );
};

LibraryBar.propTypes = {
    onSavePlaylist: PropTypes.func.isRequired,
    playlists: PropTypes.array.isRequired,
    onDeletePlaylist: PropTypes.func.isRequired,
};

export default LibraryBar;
