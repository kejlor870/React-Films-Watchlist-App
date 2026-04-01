import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useAuth } from "../context/AuthContext";
import SkeletonCard from "./SkeletonCard";

function SearchPage(){
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [query, setQuery] = useState("");
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // API KEY
    const [isLoading, setIsLoading] = useState(true);

    // Fetch popular movies for main page
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pl-PL`);
                const data = await response.json();

                if(data){
                    setPopular(data.results);
                    setMovies(data.results);
                }
                
            }catch(err){
                console.log("ERROR: ", err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Search
    useEffect(() => {
        if(!query.trim()){
            setMovies(popular);
            return;
        }

        setIsLoading(true);

        const delayDebounce = setTimeout(() => {
            const fetchMovies = async () => {
                try{
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=pl-PL`);
                    const data = await response.json();

                    if(data) setMovies(data.results);
                }catch(err){
                    console.log("ERROR: ", err.message);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchMovies();
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    // Form X clear
    const handleFormClear = () => {
        setQuery("");
        setMovies(popular);
        setIsLoading(false);
    };

    return(
        <div>
            <section className="flex flex-wrap justify-between mx-10">
                {/* Search */}
                <div className="searchBox px-4 py-3 rounded-xl w-fit flex gap-2 shadow-sm shadow-cyan-700">
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-wrap"
                    >
                        <label htmlFor="titleInput" className="font-thin text-lg flex items-center gap-1 me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Search
                        </label>
                        <input
                            id="titleInput"
                            type="text"
                            className="rounded-md min-w-64 bg-transparent border-b-2 text-center"
                            value={ query }
                            onChange={(e) => setQuery(e.target.value)}
                            autoComplete="off"
                        />
                        {query && 
                            <button
                                type="button"
                                className="px-2 ml-2 text-sm border border-gray-200 rounded-lg hover:border-gray-500 transition-all"
                                onClick={ handleFormClear }
                            >
                                ✕
                            </button>
                        }
                    </form>
                </div>

                {/* Sort by */}
                <div className="searchBox px-4 py-3 rounded-xl w-fit flex gap-2 shadow-sm shadow-cyan-700">
                    <label htmlFor="sortSelect" className="font-thin text-lg flex items-center gap-1 me-2">
                        Sort by:
                    </label>
                    <select
                        id="sortSelect"
                        className="rounded-md min-w-20 bg-transparent text-center hover:cursor-pointer"
                    >
                        <option> Title </option>
                        <option> Date </option>
                    </select>
                </div>
            </section>
        
            <section className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                {isLoading ? 
                    <>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <SkeletonCard key={i}/>
                        ))}
                    </>
                    :
                    <>
                        {movies.map((movie, index) => (
                            <Card 
                                key={ movie.id }
                                title={ movie.title }
                                publDate={ movie.release_date }
                                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                originalLanguage={ movie.original_language }
                                movieData={ movie }
                            />
                        ))}
                    </>   
                }
            </section>
        </div>
    );
}

export default SearchPage;