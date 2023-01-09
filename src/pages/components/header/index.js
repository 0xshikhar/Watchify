import React from "react";
// import './_styles.scss'

const Header = () => {
    console.log("Youtube",process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,);
    console.log("env local access",process.env.YOUTUBE_API_KEY,);
    return (
        <div className="navbar bg-base-200 ">

            <div className="flex-1">
                <a className="btn btn-ghost text-black normal-case text-xl">Watchify</a>
            </div>

            <div className="flex-none gap-2">
                {/* adding search bar with input feild*/}
                <div className="form-control ">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>

                {/* creating dropdown bar */} 
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

};

export default Header;