'use client';

import { useState } from 'react';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Search Button */}
          <button className="lg:hidden p-2 text-slate-600 dark:text-slate-400">
            <span className="material-icons-outlined">search</span>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl lg:text-3xl italic font-bold tracking-tighter">
              decor and culture
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
            <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
              Decor & Pillows
            </a>
            <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
              Bath Essentials
            </a>
            <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
              Dining Decor
            </a>
            <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
              Chair
            </a>
            <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
              Lighting
            </a>
            <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">
              Rugs
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-5">
            {/* Desktop Search */}
            <button className="hidden lg:block p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white">
              <span className="material-icons-outlined">search</span>
            </button>

            {/* Cart */}
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white relative">
              <span className="material-icons-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-[10px] text-white rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* User Account */}
            <button className="hidden lg:block p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white">
              <span className="material-icons-outlined">person_outline</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}