import React, { useState } from 'react';
import { Link } from 'wouter';
import { FaHome, FaGamepad, FaTrophy, FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f2be61] text-[#8f6721] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/img/HOKDLE.png" 
                alt="HoKdle Logo" 
                className="w-36 h-36"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className="hover:bg-[#8f6721] transition ease-out delay-50 px-3 py-2 rounded-md flex items-center text-[#8f6721] hover:text-white"
              >
                <FaHome className="mr-2" /> Home
              </Link>
              <Link 
                to="/unlimited" 
                className="hover:bg-[#8f6721] transition ease-out delay-50 px-3 py-2 rounded-md flex items-center text-[#8f6721] hover:text-white"
              >
                <FaGamepad className="mr-2" /> Unlimited
              </Link>
              <Link 
                to="/daily" 
                className="hover:bg-[#8f6721] transition ease-out delay-50 px-3 py-2 rounded-md flex items-center text-[#8f6721] hover:text-white"
              >
                <FaCalendarAlt className="mr-2" /> Daily
              </Link>
              <Link 
                to="/help" 
                className="hover:bg-[#8f6721] transition ease-out delay-50 px-3 py-2 rounded-md flex items-center text-[#8f6721] hover:text-white"
              >
                <FaQuestionCircle className="mr-2" /> Help
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
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
                className="hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#fffefb] "
              >
                <FaHome className="mr-2" /> Home
              </Link>
              <Link 
                to="/daily" 
                className="hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#8f6721]"
              >
                <FaGamepad className="mr-2" /> Daily
              </Link>
              <Link 
                to="/unlimited" 
                className="hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#8f6721]"
              >
                <FaTrophy className="mr-2" /> Unlimited
              </Link>
              <Link 
                to="/help" 
                className="hover:bg-[#f2be61] block px-3 py-2 rounded-md flex items-center text-[#8f6721]"
              >
                <FaQuestionCircle className="mr-2" /> Help
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};