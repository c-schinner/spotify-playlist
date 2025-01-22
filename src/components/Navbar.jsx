import { ImProfile } from "react-icons/im";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [user] = useAuthState(auth);

    const provider = new GoogleAuthProvider();

    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            await setDoc(doc(db, "users", user.uid), {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: new Date(),
            });

            console.log("User signed in:", user);
        } catch (error) {
            console.error("Error signing in with Google:", error);
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
                    <select
                        className="select select-bordered join-item"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option disabled value="">
                            Filter
                        </option>
                        <option value="Rock">Rock</option>
                        <option value="Indy">Indy</option>
                        <option value="Classical">Classical</option>
                        <option value="Pop">Pop</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Rap">Rap</option>
                        <option value="Hip-Hop">Hip-Hop</option>
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
                                <img
                                    src={user.photoURL}
                                    alt="Profile Photo"
                                    className="rounded-full"
                                />
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
                                    className=""
                                    type="button"
                                    onClick={signOut}
                                >
                                    Sign Out
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button
                                    className=""
                                    type="button"
                                    onClick={googleSignIn}
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
