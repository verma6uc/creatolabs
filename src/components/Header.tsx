'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
    `}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group relative"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/icons/logo-light.svg"
                alt="CreatorLabs Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex items-baseline">
              <span className="text-white font-montserrat font-bold text-xl group-hover:text-sage-green-light transition-colors duration-300">
                CreatorLabs
              </span>
              <span className="text-white/60 text-sm ml-1">beta</span>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-sage-green to-eggplant transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <div className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-sage-green to-eggplant transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            <Link
              href="/get-started"
              className="btn-primary relative overflow-hidden group ml-4"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`
          md:hidden absolute inset-x-0 top-full bg-dark-bg/95 backdrop-blur-lg transition-all duration-300 border-t border-white/10
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="container mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <Link
                href="/get-started"
                className="block px-4 py-3 text-center btn-primary w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
