import React, { createContext, useContext, useEffect, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [userWatchlist , setUserWatchlist] = useState(() => {
        const savedWatchlist = JSON.parse(localStorage.getItem('userWatchlistFWApp'));
        return savedWatchlist ? savedWatchlist : [];
    });

    // Saving userWatchlist to localstorage on every change
    useEffect(() => {
        localStorage.setItem('userWatchlistFWApp', JSON.stringify(userWatchlist));
        console.log(userWatchlist);
    }, [userWatchlist]);

    // Function: Adding movie to user saved list
    //              if movie isn't added before
    const addToWatchlist = (movie) => {
        if(!userWatchlist.some(savedMovie => savedMovie.id === movie.id)){
            setUserWatchlist(prev => [...prev, movie]);
        }
    };

    // Function: Removing movie from userWatchlist
    const removeFromWatchlist = (movieID) => {
        if(userWatchlist.some(savedMovie => savedMovie.id === movieID)){
            setUserWatchlist(prev => prev.filter(savedMovie => savedMovie.id !== movieID));
        }
    };

    // Function: checking if movie is in saved list, return true or false
    const isInWatchlist = (movieID) => {
        return userWatchlist.some(savedMovie => savedMovie.id === movieID);
    };

    return(
        <WatchlistContext.Provider value={{ userWatchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
            { children }
        </WatchlistContext.Provider>
    );
};

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if(!context){
        throw new Error("useWatchlist must be used with WatchlistProvider");
    }

    return context;
};