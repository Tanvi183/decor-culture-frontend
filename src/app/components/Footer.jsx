'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail('');
      toast.success('Thank you for subscribing!');
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <h1 className="font-serif text-3xl italic font-bold">decor and culture</h1>
            <p className="text-xs text-slate-400 leading-loose">
              Creating spaces that reflect your culture. Curated lifestyle essentials delivered right to your doorstep across Bangladesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/50">Quick Links</h4>
            <ul className="space-y-4 text-xs">
              <li><a className="hover:text-accent transition-colors" href="#">Our Story</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Shop All</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Shipping Policy</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/50">Customer Care</h4>
            <ul className="space-y-4 text-xs">
              <li><a className="hover:text-accent transition-colors" href="#">Contact Us</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Track Order</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Returns & Refunds</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/50">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Join our mailing list for updates on new collections and exclusive offers.
            </p>
            
            <form onSubmit={handleSubmit} className="flex border border-slate-700 rounded">
              <input
                className="bg-transparent border-none focus:ring-0 text-xs flex-1 px-4 py-3"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-white text-slate-900 p-3 flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <span className="material-icons-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            © 2024 Decor and Culture. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a className="text-slate-500 hover:text-white transition-colors" href="#">
              <span className="material-icons-outlined text-xl">facebook</span>
            </a>
            <a className="text-slate-500 hover:text-white transition-colors" href="#">
              <span className="material-icons-outlined text-xl">camera_alt</span>
            </a>
            <a className="text-slate-500 hover:text-white transition-colors" href="#">
              <span className="material-icons-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}