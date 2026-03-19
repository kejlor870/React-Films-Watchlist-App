import React from "react";
import Card from "./Card";

function WatchlistPage(){

    return(
       <div>
            <section className="max-w-7xl mx-auto my-4">
                <h1 className="text-5xl font-bold tracking-wide">
                    Your Watchlist
                </h1>
            </section>
        
            <section className="max-w-6xl mx-auto px-4 py-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                <Card />
                <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
            </section>
        </div>
    );
}

export default WatchlistPage;