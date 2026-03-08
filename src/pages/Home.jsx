import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies';

function Home() {
    const navigate = useNavigate();

    // ฟังก์ชันบันทึก Mood ลง localStorage แล้วเปลี่ยนหน้าไปที่ Results
    const handleSelectMood = (mood) => {
        localStorage.setItem('selectedMood', mood);
        navigate('/results');
    };

    // ดึงข้อมูลหนังมาจัดกลุ่ม
    const trendingMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 6);
    const inspiredMovies = movies.filter(m => m.mood === 'Feel Inspired');
    const emotionalMovies = movies.filter(m => m.mood === 'Have a Good Cry');
    const adrenalineMovies = movies.filter(m => m.mood === 'Get Adrenaline');

    return (
        <main className="flex-grow relative text-white">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 flex flex-col items-center">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        How do you want to <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            feel after watching?
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Select your desired emotional outcome, and we'll curate the perfect cinematic experience for you tonight.
                    </p>
                </div>

                {/* Mood Selector Widget */}
                <div className="w-full max-w-6xl mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MoodButton mood="Feel Inspired" icon="✨" title="Inspired" desc="Fuel your ambition and wonder" onClick={handleSelectMood} colorClass="from-yellow-400 to-orange-500" />
                        <MoodButton mood="Get Adrenaline" icon="⚡" title="Adrenaline" desc="Fast-paced action and thrills" onClick={handleSelectMood} colorClass="from-red-500 to-pink-600" />
                        <MoodButton mood="Have a Good Cry" icon="💧" title="Emotional" desc="Release deeper feelings" onClick={handleSelectMood} colorClass="from-blue-400 to-indigo-600" />
                        <MoodButton mood="Chill Out" icon="🍿" title="Chill Out" desc="Lighthearted fun and easy watching" onClick={handleSelectMood} colorClass="from-emerald-400 to-teal-500" />
                    </div>
                </div>

                {/* Trending Now Section */}
                <div className="w-full max-w-7xl mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white flex items-center">
                            <span className="mr-2">🔥</span> Trending Now
                        </h2>
                        <Link to="/results" onClick={() => localStorage.removeItem('selectedMood')} className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center transition-colors">
                            View All
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                    <HorizontalScrollList movies={trendingMovies} />
                </div>

                {/* Categories Sections */}
                <div className="w-full max-w-7xl space-y-16">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center"><span className="mr-2">✨</span> Top Inspired Movies</h2>
                        <HorizontalScrollList movies={inspiredMovies} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center"><span className="mr-2">💧</span> Emotional Rollercoaster</h2>
                        <HorizontalScrollList movies={emotionalMovies} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center"><span className="mr-2">⚡</span> Adrenaline Rush</h2>
                        <HorizontalScrollList movies={adrenalineMovies} />
                    </div>
                </div>
            </div>
        </main>
    );
}

// Component ย่อยสำหรับปุ่ม Mood
function MoodButton({ mood, icon, title, desc, colorClass, onClick }) {
    return (
        <div onClick={() => onClick(mood)} className="group cursor-pointer relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-tr ${colorClass} rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-300`}></div>
            <div className="relative p-8 bg-slate-900 rounded-2xl ring-1 ring-white/10 h-64 flex flex-col items-center justify-center transform transition duration-300 group-hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 text-center">{desc}</p>
            </div>
        </div>
    );
}

// Component ย่อยสำหรับการ์ดแนวนอน
function HorizontalScrollList({ movies }) {
    return (
        <div className="flex overflow-x-auto space-x-4 pb-4 px-1 snap-x scrollbar-hide">
            {movies.map(movie => (
                <div key={movie.id} className="flex-none w-40 md:w-56 lg:w-64 scroll-snap-align-start transition-transform hover:z-10">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
}

export default Home;