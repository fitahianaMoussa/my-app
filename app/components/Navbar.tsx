'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Fitahiana Moussa
            </Link>
          </div>
          
          {isMounted && (
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-primary-500 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-primary-500 transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="hover:text-primary-500 transition-colors">
                Experience
              </Link>
              <Link href="#education" className="hover:text-primary-500 transition-colors">
                Education
              </Link>
              <Link href="#contact" className="hover:text-primary-500 transition-colors">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
