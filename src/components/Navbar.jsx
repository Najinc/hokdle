import React, { useState } from 'react';
import { Link } from 'wouter';
import { FaHome, FaGamepad, FaTrophy, FaQuestionCircle } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#050505] text-[#8f6721] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/img/HOKDLE.png" 
                alt="HoKdle Logo" 
                className="w-auto h-16"
              />
            </Link>
          </div>

          {/* MODE PC*/}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-9 select-none">
              <Link 
                to="/" 
                className="hover-border transition-all ease-out delay-100 rounded-md flex items-center text-2xl font-radikal font-light text-white hover:text-[#F4D28F]"
              >
                <span>Home</span>
              </Link>
              <Link 
                to="/daily" 
                className="hover-border transition-all ease-out delay-100 rounded-md flex items-center text-2xl font-radikal text-white hover:text-[#F4D28F] relative"
              >
                <span>Classic</span>
                <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Soon</span>
              </Link>
              <Link 
                to="/infinity" 
                className="hover-border transition-all ease-out delay-100 rounded-md flex items-center text-2xl font-radikal text-white hover:text-[#F4D28F]"
              >
                <span>Infinity</span>
              </Link>
              <Link 
                to="/help" 
                className="hover-border transition-all ease-out delay-100 rounded-md flex items-center text-2xl font-radikal text-white hover:text-[#F4D28F]"
              >
                <span>Help</span>
              </Link>
            </div>
          </div>

          {/* MODE MOBILE */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#cb973a] inline-flex items-center justify-center p-2 rounded-md text-[#8f6721] hover:bg-[#f2be61] focus:outline-none"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#fbd89b]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="hover-border hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#fffefb]"
              >
                <FaHome className="mr-2" /> <span>Home</span>
              </Link>
              <Link 
                to="/daily" 
                className="hover-border hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#8f6721] relative"
              >
                <FaGamepad className="mr-2" /> <span>Daily</span>
                <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Soon</span>
              </Link>
              <Link 
                to="/unlimited" 
                className="hover-border hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#8f6721]"
              >
                <FaTrophy className="mr-2" /> <span>Unlimited</span>
              </Link>
              <Link 
                to="/help" 
                className="hover-border hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#8f6721]"
              >
                <FaQuestionCircle className="mr-2" /> <span>Help</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
