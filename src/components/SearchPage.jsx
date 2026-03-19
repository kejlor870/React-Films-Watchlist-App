import React from "react";
import Card from "./Card";

function SearchPage(){

    return(
        <div>
            <section className="flex flex-wrap justify-between mx-10">
                {/* Search */}
                <div className="searchBox px-4 py-3 rounded-xl w-fit flex gap-2 shadow-sm shadow-cyan-700">
                    <label htmlFor="titleInput" className="font-thin text-lg flex items-center gap-1 me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Search
                    </label>
                    <input
                        id="titleInput"
                        type="text"
                        className="rounded-md min-w-64 bg-transparent border-b-2"
                    />
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
                        <option> Date </option>
                        <option> Title </option>
                    </select>
                </div>
            </section>
        
            <section className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                <Card />
                <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
            </section>
        </div>
    );
}

export default SearchPage;