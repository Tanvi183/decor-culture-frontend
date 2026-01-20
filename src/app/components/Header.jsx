'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { auth } from '../../utils/auth';

export default function Header() {
  const [cartCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = auth.isAuthenticated();
      const userData = auth.getUser();
      setIsAuthenticated(authenticated);
      setUser(userData);
    };

    // Initial check
    checkAuth();
    
    // Listen for custom auth change events
    const handleAuthChange = () => {
      checkAuth();
    };
    
    window.addEventListener('authStateChanged', handleAuthChange);
    
    // Also check periodically as backup (more frequent)
    const interval = setInterval(checkAuth, 500); // Check every 500ms
    
    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange);
      clearInterval(interval);
    };
  }, []);

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
            <Link href="/">
              <h1 className="font-serif text-2xl lg:text-3xl italic font-bold tracking-tighter cursor-pointer">
                decor and culture
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
            <Link 
              href="/" 
              className={`transition-colors ${
                pathname === '/' 
                  ? 'text-primary dark:text-white border-b-2 border-primary pb-1' 
                  : 'hover:text-primary dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`transition-colors ${
                pathname === '/products' 
                  ? 'text-primary dark:text-white border-b-2 border-primary pb-1' 
                  : 'hover:text-primary dark:hover:text-white'
              }`}
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                pathname === '/about' 
                  ? 'text-primary dark:text-white border-b-2 border-primary pb-1' 
                  : 'hover:text-primary dark:hover:text-white'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                pathname === '/contact' 
                  ? 'text-primary dark:text-white border-b-2 border-primary pb-1' 
                  : 'hover:text-primary dark:hover:text-white'
              }`}
            >
              Contact
            </Link>
            {/* Dashboard link - only show when authenticated */}
            {isAuthenticated && (
              <Link 
                href="/dashboard" 
                className={`transition-colors ${
                  pathname.startsWith('/dashboard') 
                    ? 'text-primary dark:text-white border-b-2 border-primary pb-1' 
                    : 'hover:text-primary dark:hover:text-white'
                }`}
              >
                Dashboard
              </Link>
            )}
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
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={auth.logout}
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                  title="Logout"
                >
                  <span className="material-icons-outlined">logout</span>
                </button>
                {user && (
                  <span className="hidden md:block text-xs text-slate-600 dark:text-slate-400">
                    Hi, {user.name.split(' ')[0]}
                  </span>
                )}
              </div>
            ) : (
              <Link href="/signin" className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white">
                <span className="material-icons-outlined">person_outline</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}