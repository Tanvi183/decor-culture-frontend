'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Header from '../components/Header.jsx';
import ToastProvider from '../components/ToastProvider.jsx';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      console.log('Sign in:', formData);
      toast.success('Welcome back! You have successfully signed in.', {
        position: "top-right",
        autoClose: 3000,
      });
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
        GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
      </div>

      <Header />

      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Lifestyle Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div 
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop")'
            }}
          ></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          <div className="absolute bottom-12 left-12 max-w-md">
            <p className="text-white text-3xl font-serif font-bold leading-tight drop-shadow-md">
              Create your own sanctuary with authentic Bangladeshi craftsmanship.
            </p>
          </div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-slate-50 dark:bg-slate-900 overflow-y-auto">
          <div className="w-full max-w-[440px] flex flex-col">
            <div className="mb-8">
              <h1 className="text-primary dark:text-white font-serif text-[32px] font-bold leading-tight pb-2">
                Welcome Back
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                Please enter your details to access your sanctuary.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email Field */}
              <div className="flex flex-col w-full">
                <p className="text-primary dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Email Address
                </p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex w-full rounded-lg text-primary dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 h-14 placeholder:text-slate-400 p-[15px] text-base font-normal"
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-end pb-2">
                  <p className="text-primary dark:text-slate-200 text-sm font-medium leading-normal">
                    Password
                  </p>
                </div>
                <div className="flex w-full items-stretch rounded-lg group">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="flex w-full min-w-0 flex-1 rounded-lg text-primary dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 h-14 placeholder:text-slate-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <div 
                    className="text-slate-400 flex border border-slate-200 dark:border-slate-600 border-l-0 bg-white dark:bg-slate-800 items-center justify-center pr-[15px] rounded-r-lg cursor-pointer hover:text-primary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-icons-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Primary Action */}
              <button
                type="submit"
                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg h-14 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-700"></div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                or sign in with
              </span>
              <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Social Login */}
            <div className="flex flex-col gap-3">
              <button className="flex w-full items-center justify-center gap-3 rounded-lg h-12 px-4 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary dark:text-white text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <svg className="size-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
            </div>

            <div className="mt-auto pt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Don't have an account?
                <Link href="/signup" className="text-primary dark:text-primary/80 font-bold hover:underline ml-1">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-4 px-6 text-center lg:text-right">
        <p className="text-slate-400 dark:text-slate-500 text-[10px] tracking-wider uppercase">
          © 2024 Decor and Culture. All rights reserved.
        </p>
      </footer>

      <ToastProvider />
    </div>
  );
}