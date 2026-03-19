import React from "react";

function Card({ title="Title", publDate="Publ. Date" }){
    
    return(
        <div className="borderCard rounded-2xl shadow-md shadow-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500 transition-all duration-500" style={{ height: "401px", width: "234px" }}>
            <img 
                src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww"
                style={{ height: "326px", width: "234px" }}
                className="rounded-xl"
                loading="lazy"
            />
            
            <div className="px-3 py-2 flex flex-wrap justify-between">
                {/* Title and relase date */}
                <div className="flex-1">
                    <h3 className="font-medium">
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
                        className="hover:scale-110 transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;