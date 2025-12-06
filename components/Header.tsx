'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            KryptonArc
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Home</a>
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Features</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">About</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-primary transition py-2">Home</a>
            <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-primary transition py-2">Features</a>
            <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-primary transition py-2">About</a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-primary transition py-2">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
