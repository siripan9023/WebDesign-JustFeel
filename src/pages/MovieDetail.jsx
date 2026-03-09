import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies';

function MovieDetail() {
    const { id } = useParams(); // ดึง id จาก URL เช่น /movie/1
    const [movie, setMovie] = useState(null);

    // States สำหรับควบคุม UI
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const [isMoodModalOpen, setIsMoodModalOpen] = useState(false);
    const [isAddedToList, setIsAddedToList] = useState(false);
    const [isMarkedSeen, setIsMarkedSeen] = useState(false);

    useEffect(() => {
        // ค้นหาหนังจาก ID
        const foundMovie = movies.find(m => m.id === parseInt(id));
        setMovie(foundMovie);
        // รีเซ็ต state เมื่อเปลี่ยนเรื่อง
        setIsAddedToList(false);
        setIsMarkedSeen(false);

        // เลื่อนหน้าจอกลับไปด้านบนสุด
        window.scrollTo(0, 0);
    }, [id]);

    if (!movie) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center py-20 text-white">
                <h1 className="text-4xl font-bold mb-4">Movie Not Found</h1>
                <Link to="/" className="px-6 py-3 bg-indigo-600 rounded-lg">Return Home</Link>
            </div>
        );
    }

    // ดึงหนังเรื่องอื่นๆ มาแสดงด้านล่าง
    const relatedMovies = movies.filter(m => m.id !== movie.id).sort(() => 0.5 - Math.random()).slice(0, 5);

    // การแปลง URL Trailer ให้เป็นแบบ Embed
    let embedUrl = movie.trailerUrl;
    if (embedUrl.includes('watch?v=')) embedUrl = embedUrl.replace('watch?v=', 'embed/');
    else if (embedUrl.includes('youtu.be/')) embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
    embedUrl += '?autoplay=1&modestbranding=1&rel=0';

    return (
        <main className="relative flex-grow min-h-screen text-white">
            
            {/* BACKDROP LAYER - แก้ไขโดยเพิ่ม Wrapper ที่มี overflow-hidden */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-3xl transform scale-110"
                    style={{ backgroundImage: `url('${movie.poster}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* LEFT COLUMN: POSTER & ACTIONS */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <div className="sticky top-24">
                            <div className="relative group rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10 aspect-[2/3]">
                                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="mt-6 flex flex-col gap-3">
                                <button
                                    onClick={() => setIsTrailerOpen(true)}
                                    className="w-full flex items-center justify-center px-6 py-4 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl shadow-lg shadow-white/10 transition-all transform hover:-translate-y-0.5"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                                    Watch Trailer
                                </button>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setIsAddedToList(!isAddedToList)}
                                        className={`flex items-center justify-center px-4 py-4 font-bold rounded-xl shadow-lg border transition-all transform hover:-translate-y-0.5 ${isAddedToList ? 'bg-green-600 hover:bg-green-700 border-green-500 text-white' : 'bg-gray-800/80 backdrop-blur-sm text-white hover:bg-gray-700/80 border-white/10'}`}
                                    >
                                        {isAddedToList ? (
                                            <><svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Added</>
                                        ) : (
                                            <><svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> List</>
                                        )}
                                    </button>
                                    <button
                                        onClick={() => setIsMoodModalOpen(true)}
                                        className={`flex items-center justify-center px-4 py-4 font-bold rounded-xl shadow-lg border transition-all transform hover:-translate-y-0.5 ${isMarkedSeen ? 'bg-green-600 border-green-500 text-white' : 'bg-indigo-600/90 backdrop-blur-sm text-white hover:bg-indigo-500/90 border-white/10'}`}
                                    >
                                        {isMarkedSeen ? (
                                            <><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Saved</>
                                        ) : (
                                            <><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> Seen</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: DETAILS */}
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                        <div className="mb-8 border-b border-white/10 pb-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">{movie.title}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base mb-6">
                                <span className="font-semibold text-white text-lg">{movie.year}</span>
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                <span>{movie.runtime}</span>
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                <span className="text-indigo-400 font-medium">{movie.mood}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {movie.genre.map(g => (
                                    <span key={g} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 tracking-wide uppercase shadow-sm">
                                        {g}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-lg font-semibold mb-3">Synopsis</h3>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl font-light">{movie.synopsis}</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
                                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Director</span>
                                <span className="font-semibold">{movie.director}</span>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
                                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Rating</span>
                                <span className="font-semibold text-yellow-400">{movie.rating}</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Available on</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {movie.platforms.map(p => (
                                    <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="flex items-center justify-center px-4 py-3 bg-slate-800 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-lg border border-slate-700 hover:border-indigo-500 transition-all duration-300 shadow-md group">
                                        <span className="font-medium">{p.name}</span>
                                        <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RELATED MOVIES */}
                    <div className="col-span-12 mt-16 border-t border-white/10 pt-10">
                        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                            {relatedMovies.map(m => <MovieCard key={m.id} movie={m} />)}
                        </div>
                    </div>
                </div>
            </div>

            {/* TRAILER MODAL */}
            {isTrailerOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={() => setIsTrailerOpen(false)}></div>
                    <div className="relative z-10 transform overflow-hidden rounded-2xl bg-black text-left shadow-2xl transition-all sm:my-8 w-full max-w-5xl ring-1 ring-white/10 animate-fade-in">
                        <div className="relative aspect-video bg-black">
                            <button onClick={() => setIsTrailerOpen(false)} className="absolute top-4 right-4 z-20 group rounded-full bg-black/50 p-2 hover:bg-white/20 transition-all">
                                <svg className="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <iframe className="w-full h-full" src={embedUrl} title="Trailer" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* MOOD MODAL */}
            {isMoodModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={() => setIsMoodModalOpen(false)}></div>
                    <div className="relative z-10 transform overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-2xl transition-all w-full max-w-lg p-8 sm:p-10 animate-fade-in">
                        <button onClick={() => setIsMoodModalOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20 mb-6">
                            <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2">How did you feel?</h3>
                        <p className="text-sm text-gray-400 text-center mb-8">Track your emotions to get better recommendations.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Inspired', icon: '✨', value: 'Feel Inspired', color: 'indigo' },
                                { label: 'Pumped', icon: '⚡', value: 'Get Adrenaline', color: 'red' },
                                { label: 'Emotional', icon: '💧', value: 'Have a Good Cry', color: 'blue' },
                                { label: 'Chill', icon: '🍿', value: 'Chill Out', color: 'green' }
                            ].map(mood => (
                                <button
                                    key={mood.label}
                                    onClick={() => { setIsMarkedSeen(true); setIsMoodModalOpen(false); }}
                                    className={`flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-${mood.color}-600/20 border border-white/5 hover:border-${mood.color}-500/50 transition-all duration-300 group`}
                                >
                                    <span className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">{mood.icon}</span>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">{mood.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default MovieDetail;