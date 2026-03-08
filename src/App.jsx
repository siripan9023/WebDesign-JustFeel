import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Results from './pages/Results';
import MovieDetail from './pages/MovieDetail';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-900 min-h-screen flex flex-col font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;