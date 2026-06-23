'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../../components/icons';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const initializeTheme = () => {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (stored === 'dark' || (!stored && prefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    initializeTheme();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/jamy-labs-logo.jpeg"
                alt="Jamy Labs Logo"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white">
                  Jamy Labs
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  From Idea to Impact
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <Link
              href="/#contact"
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/#services" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/#about" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/#contact" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <div className="pt-4">
              <Link
                href="/#contact"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
