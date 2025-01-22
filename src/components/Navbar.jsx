import { ImProfile } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.errorr("Google Sign-In Error:", error.message);
        }
    };

    const signOut = () => {
        auth.signOut();
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <p className="text-sm">Create your Playlists</p>
            </div>
            <div className="flex-none gap-2">
                <div className="join">
                    <div>
                        <div>
                            <input
                                className="input input-bordered join-item"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <select className="select select-bordered join-item">
                        <option disabled selected>
                            Filter
                        </option>
                        <option>Rock</option>
                        <option>Indy</option>
                        <option>Classical</option>
                        <option>Pop</option>
                        <option>Jazz</option>
                        <option>Rap</option>
                        <option>Hip-Hop</option>
                    </select>
                    <div className="indicator">
                        <button className="ml-1 btn join-item">Submit</button>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            {user ? (
                                <img src={user.photoURL} alt="Profile" />
                            ) : (
                                <ImProfile size={42} />
                            )}
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {user ? (
                            <li>
                                <button
                                    onClick={signOut}
                                    className=""
                                    type="button"
                                >
                                    Sign Out
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button
                                    onClick={googleSignIn}
                                    className=""
                                    type="button"
                                >
                                    Sign In
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
