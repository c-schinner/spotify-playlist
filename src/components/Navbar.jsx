import { ImProfile } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-sm">Home</a>
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
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        <button className="ml-1 btn join-item">Search</button>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <ImProfile size={42} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
