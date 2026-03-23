import React from "react";
import { useWatchlist } from "../context/WatchlistContext";

const defaultImage = "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww";

function Card({ title="Title", publDate="Publ. Date", imgSrc, originalLanguage="-", movieData }){
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
    const isMovieSaved = isInWatchlist(movieData?.id);

    // Fucntion: handle save to watchlist after click bookmark
    const handleSaveBtn = () => {
        if(isMovieSaved){
            // If movie is saved => remove it from watchlist
            removeFromWatchlist(movieData.id);
        }else{
            // If movie isn't saved => add it to watchlist
            addToWatchlist(movieData);
        }
    };

    return(
        <div className="borderCard relative rounded-2xl shadow-md shadow-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500 transition-all duration-500" style={{ height: "401px", width: "234px" }}>
            <div 
                className="absolute top-2 left-2 bg-slate-400 bg-opacity-40 border border-slate-100 border-opacity-20 rounded-md px-2 cursor-default"
                title="Original language"
            >
                { originalLanguage.toUpperCase() }
            </div>
            <img 
                src={ imgSrc ? imgSrc : defaultImage }
                alt={`Poster of ${title}`}
                style={{ height: "326px", width: "234px" }}
                className="rounded-xl"
                loading="lazy"
            />

            <div className="px-3 py-2 flex flex-wrap justify-between">
                {/* Title and relase date */}
                <div className="flex-1 cursor-default">
                    <h3 
                        className="font-medium line-clamp-1"
                        title={ title }
                    >
                        { title }
                    </h3>
                    <p className="publicateDate">
                        { publDate }
                    </p>
                </div>

                {/* Icon */}
                <div className="flex items-center">
                    <button
                        type="button"
                        className="hover:scale-110 active:scale-95 transition-all"
                        onClick={ handleSaveBtn }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill={isMovieSaved ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;