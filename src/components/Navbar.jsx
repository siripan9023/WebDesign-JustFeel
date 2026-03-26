import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-white' : 'text-gray-300';
  };

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex-shrink-0 cursor-pointer">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                JustFeel
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex justify-center space-x-8">
            <Link to="/" className={`text-sm font-medium hover:text-white transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/results" className={`text-sm font-medium hover:text-white transition-colors ${isActive('/results')}`}>
              Movies
            </Link>
            <Link to="/watchlist" className={`text-sm font-medium hover:text-white transition-colors ${isActive('/watchlist')}`}>
              My List
            </Link>
          </div>

          {/* Right: Search & Profile */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <div className="hidden md:block relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-800 text-white text-sm rounded-full pl-10 pr-4 py-1.5 border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none w-48 transition-all focus:w-64"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            
            <button className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-indigo-500 ring-offset-2 ring-offset-slate-900 transition-transform hover:scale-105">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="User Profile" />
            </button>
            
            {/* Mobile Menu Placeholder */}
            <div className="flex md:hidden">
              <button type="button" className="text-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;