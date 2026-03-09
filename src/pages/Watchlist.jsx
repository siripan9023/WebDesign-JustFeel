import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies';

function Watchlist() {
    const [activeTab, setActiveTab] = useState('watchlist'); // 'watchlist' หรือ 'history'

    // ใช้ข้อมูลจำลอง (Mock data) ตามโค้ดต้นฉบับ
    const [watchlist, setWatchlist] = useState(movies.slice(0, 4));
    const [history, setHistory] = useState(movies.slice(4, 8));

    const handleRemoveFromWatchlist = (idToRemove) => {
        setWatchlist(watchlist.filter(movie => movie.id !== idToRemove));
    };

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">

            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-xl max-w-md mx-auto mb-10 border border-white/5">
                <button
                    onClick={() => setActiveTab('watchlist')}
                    className={`w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all duration-200 focus:outline-none ${activeTab === 'watchlist' ? 'bg-white text-indigo-700 shadow ring-1 ring-black ring-opacity-5' : 'text-gray-400 hover:text-white hover:bg-white/[0.12]'}`}
                >
                    My Watchlist
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all duration-200 focus:outline-none ${activeTab === 'history' ? 'bg-white text-indigo-700 shadow ring-1 ring-black ring-opacity-5' : 'text-gray-400 hover:text-white hover:bg-white/[0.12]'}`}
                >
                    History
                </button>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
                {activeTab === 'watchlist' ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            Your Watchlist
                            <span className="ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300">
                                {watchlist.length}
                            </span>
                        </h2>

                        {watchlist.length > 0 ? (
                            /* แก้ไขคลาส Grid ตรงนี้ */
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {watchlist.map(movie => (
                                    <MovieCard key={movie.id} movie={movie} context="watchlist" onRemove={handleRemoveFromWatchlist} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg mb-4">Your watchlist is empty.</p>
                                <Link to="/" className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                                    Discover Movies
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            Watch History
                            <span className="ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                                {history.length}
                            </span>
                        </h2>

                        {history.length > 0 ? (
                            /* แก้ไขคลาส Grid ตรงนี้ */
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {history.map(movie => (
                                    <MovieCard key={movie.id} movie={movie} context="history" />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg">You haven't marked any movies as watched yet.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </main>
    );
}

export default Watchlist;