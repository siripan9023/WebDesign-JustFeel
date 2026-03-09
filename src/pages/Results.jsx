import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies';

function Results() {
    // สร้าง State สำหรับเก็บค่าจาก Filter
    const [selectedMood, setSelectedMood] = useState(localStorage.getItem('selectedMood') || '');
    const [filterYear, setFilterYear] = useState('all');
    const [filterGenre, setFilterGenre] = useState('all');
    const [filterRating, setFilterRating] = useState('all');

    // ดึงรายการ Year และ Genre แบบไม่ซ้ำกันเพื่อสร้าง Dropdown
    const uniqueYears = useMemo(() => [...new Set(movies.map(m => m.year))].sort((a, b) => b - a), []);
    const uniqueGenres = useMemo(() => [...new Set(movies.flatMap(m => m.genre))].sort(), []);

    // ฟังก์ชันการกรองหนังตามเงื่อนไข (ทำงานอัตโนมัติเมื่อ State เปลี่ยน)
    const filteredMovies = useMemo(() => {
        return movies.filter(movie => {
            const matchMood = selectedMood ? movie.mood === selectedMood : true;
            const matchYear = filterYear === 'all' ? true : movie.year === parseInt(filterYear);
            const matchGenre = filterGenre === 'all' ? true : movie.genre.includes(filterGenre);

            const movieRating = parseFloat(movie.rating.replace(/[^0-9.]/g, ''));
            const matchRating = filterRating === 'all' ? true : movieRating >= parseInt(filterRating);

            return matchMood && matchYear && matchGenre && matchRating;
        });
    }, [selectedMood, filterYear, filterGenre, filterRating]);

    // ฟังก์ชันล้างค่า Filter ทั้งหมด
    const clearFilters = () => {
        localStorage.removeItem('selectedMood');
        setSelectedMood('');
        setFilterYear('all');
        setFilterGenre('all');
        setFilterRating('all');
    };

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
            <div className="mb-8">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                    {selectedMood ? `Movies for a ${selectedMood} mood` : "All Movies"}
                </h1>

                {/* Sticky Filter Bar */}
                <div className="sticky top-20 z-40 bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-xl">
                    <div className="flex flex-wrap items-center gap-4 justify-between">
                        <div className="flex flex-wrap items-center gap-4 flex-1">

                            {/* Year Filter */}
                            <div className="relative">
                                <select
                                    value={filterYear} onChange={(e) => setFilterYear(e.target.value)}
                                    className="appearance-none bg-slate-800 border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-8 cursor-pointer hover:bg-slate-700 transition-colors"
                                >
                                    <option value="all">All Years</option>
                                    {uniqueYears.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                                <FilterIcon />
                            </div>

                            {/* Genre Filter */}
                            <div className="relative">
                                <select
                                    value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)}
                                    className="appearance-none bg-slate-800 border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-8 cursor-pointer hover:bg-slate-700 transition-colors"
                                >
                                    <option value="all">All Genres</option>
                                    {uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                                </select>
                                <FilterIcon />
                            </div>

                            {/* Rating Filter */}
                            <div className="relative">
                                <select
                                    value={filterRating} onChange={(e) => setFilterRating(e.target.value)}
                                    className="appearance-none bg-slate-800 border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-8 cursor-pointer hover:bg-slate-700 transition-colors"
                                >
                                    <option value="all">All Ratings</option>
                                    <option value="9">9+ (Masterpiece)</option>
                                    <option value="8">8+ (Excellent)</option>
                                    <option value="7">7+ (Good)</option>
                                </select>
                                <FilterIcon />
                            </div>
                        </div>

                        {/* Clear Button */}
                        <button onClick={clearFilters} className="text-sm font-medium text-indigo-400 hover:text-indigo-300 hover:underline flex items-center transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            Clear Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Movie Grid - แก้ไขคลาส Grid ตรงนี้ให้ตรงกับหน้า Detail แล้ว */}
            {filteredMovies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                /* No Results Fallback */
                <div className="text-center py-20">
                    <p className="text-xl text-gray-400">No movies found for this mood.</p>
                    <button onClick={clearFilters} className="inline-block mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors">
                        Clear Filters
                    </button>
                </div>
            )}
        </main>
    );
}

// Component ย่อยสำหรับไอคอนลูกศรใน Dropdown
function FilterIcon() {
    return (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
    );
}

export default Results;