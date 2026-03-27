import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function HeaderNav(){
    const navLinkStyle = "navBtn px-4 py-2 rounded-md shadow-md shadow-cyan-900 hover:shadow-cyan-800 hover:scale-105 hover:shadow-xl active:scale-95 active:duration-200 transition-all duration-500";
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return(
        <header className="header flex flex-wrap px-6 py-6 items-center justify-between rounded-b-xl">
            <div className="flex flex-wrap gap-5">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                </svg>
                <h1
                    className="text-5xl"
                >
                    Movie Watchlist App
                </h1>
            </div>
            
            <nav className="flex flex-wrap gap-6 text-xl">
                <Link to={'/'} className={ navLinkStyle }> Search film </Link>

                {user ? 
                    <div className="relative group mt-2">
                        <Link to="/watchlist" className={ navLinkStyle }>Watchlist</Link>

                        <div className="absolute -left-12 mt-3 w-40 text-right header rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            <ul>
                                <li 
                                    className="px-4 py-2 hover:bg-sky-900 rounded-t-md cursor-pointer" 
                                    onClick={() => navigate("/profile")}
                                >
                                    Profil
                                </li>
                                <li 
                                    className="px-4 py-2 hover:bg-sky-900 cursor-pointer" 
                                    onClick={() => navigate("/watchlist")}
                                >
                                    Watchlist
                                </li>
                                <li className="px-4 py-2 hover:bg-sky-900 rounded-b-md text-red-400 font-semibold border-t-2 border-white border-opacity-15 cursor-pointer">
                                    <button onClick={() => logout()}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    :
                    <Link to={'/login'} className={ navLinkStyle }> Login </Link>
                }
            </nav>
        </header>
    );
}

export default HeaderNav;