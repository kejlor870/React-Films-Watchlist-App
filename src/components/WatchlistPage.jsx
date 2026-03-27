import React, { useState } from "react";
import Card from "./Card";
import { useWatchlist } from "../context/WatchlistContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function WatchlistPage(){
    const { userWatchlist } = useWatchlist();
    const { user } = useAuth();
    const navigate = useNavigate();

    console.log(userWatchlist);

    if(!user) return navigate("/");
    return(
       <div>
            <section className="max-w-7xl mx-auto my-4">
                <h1 className="text-5xl font-bold tracking-wide">
                    Your Watchlist
                </h1>
            </section>
        
            {userWatchlist.length > 0 ? 
                (
                    <section className="max-w-6xl mx-auto px-4 py-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                        {userWatchlist.map((movie, index) => (
                            <Card 
                                key={ movie.id }
                                title={ movie.title }
                                publDate={ movie.release_date }
                                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                originalLanguage={ movie.original_language }
                                movieData={ movie }
                            />
                        ))}
                    </section>
                )
                :
                (
                    <p className="text-center text-lg font-light mt-10"> 
                        Your watchlist is EMPTY! <br/>Go back to Search film and add some movies. 
                    </p>
                )
            }
        </div>
    );
}

export default WatchlistPage;