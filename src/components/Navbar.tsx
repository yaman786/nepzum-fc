'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Nepzum FC Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-display text-lg sm:text-xl font-semibold text-white hidden sm:block">NEPZUM FC</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#academy" className="text-slate-300 hover:text-white transition-colors font-medium">
              Academy
            </a>
            <a href="/news" className="text-slate-300 hover:text-white transition-colors font-medium">
              News
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#trial"
              className="btn-cta inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold rounded-lg transition-all hover:scale-105 glow-yellow"
            >
              JOIN SQUAD
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Full screen overlay with solid background */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-slate-900 z-50">
            <div className="flex flex-col p-6 space-y-6">
              <a
                href="#academy"
                className="text-xl text-white hover:text-yellow-400 transition-colors font-medium py-3 border-b border-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Academy
              </a>
              <a
                href="/news"
                className="text-xl text-white hover:text-yellow-400 transition-colors font-medium py-3 border-b border-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <a
                href="#contact"
                className="text-xl text-white hover:text-yellow-400 transition-colors font-medium py-3 border-b border-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#trial"
                className="btn-cta inline-flex items-center justify-center px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold text-lg rounded-xl transition-all mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                JOIN SQUAD
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
