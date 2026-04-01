import React from "react";

const defaultImage = "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww";

function SkeletonCard(){

    return(
        <div className="border-2 border-slate-300 text-slate-100 text-opacity-5 border-opacity-5 opacity-5 relative animate-pulse rounded-2xl" style={{ height: "401px", width: "234px" }}>
            <div 
                className="absolute opacity-20 top-2 left-2 bg-slate-400 bg-opacity-40 border border-slate-100 border-opacity-20 rounded-md px-2 cursor-default"
                title="Original language"
            >
                #
            </div>
            <img
                style={{ height: "326px", width: "234px", filter: "opacity(10%)" }}
                className="rounded-xl"
                loading="lazy"
            />

            <div className="px-3 py-2 flex flex-wrap justify-between">
                {/* Title and relase date */}
                <div className="flex-1 cursor-default">
                    <h3 
                        className="font-medium line-clamp-1"
                    >
                        #####
                    </h3>
                    <p className="publicateDate">
                        ##.##.####
                    </p>
                </div>

                {/* Icon */}
                <div className="flex items-center">
                    <button
                        type="button"
                        disabled={true}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;