import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, context = 'default', onRemove }) {

    return (
        <div className="group relative w-full bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ring-1 ring-white/5 scroll-snap-align-start">

            {/* Remove Watchlist */}
            {context === 'watchlist' && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                        onClick={() => onRemove && onRemove(movie.id)}
                        className="bg-red-500/80 hover:bg-red-600 text-white p-1.5 rounded-full backdrop-blur-sm shadow-md transition-colors"
                        title="Remove from list"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            )}

            {/* History */}
            {context === 'history' && (
                <div className="absolute top-2 left-2 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-500/80 text-white backdrop-blur-sm shadow-sm border border-white/20">
                        You felt: {movie.mood.split(' ').pop()} ✨
                    </span>
                </div>
            )}

            {/* Aspect Ratio Wrapper */}
            <div className="aspect-[2/3] overflow-hidden relative">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Link
                        to={`/movie/${movie.id}`}
                        className="w-full text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                    >
                        View Details
                    </Link>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-3">
                <h4 className="text-white font-bold text-base truncate mb-1" title={movie.title}>
                    {movie.title}
                </h4>
                <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                    <span className="bg-white/10 px-2 py-0.5 rounded">{movie.year}</span>
                    <span className="text-indigo-400 truncate max-w-[80px] text-right">{movie.mood}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;