'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ToastProvider from '../../components/ToastProvider.jsx';

export default function TeamAndValues() {
  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
        GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
      </div>

      <Header />

      <main className="max-w-7xl mx-auto py-12 px-6 lg:px-10">
        {/* Editorial Hero Section */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight">
            The People Behind the Pieces
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            We believe that the objects we surround ourselves with should tell a story. Meet the artisans, designers, and dreamers who curate every corner of Decor and Culture.
          </p>
        </section>

        {/* Asymmetrical Team Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Large Feature Image */}
            <div className="md:col-span-7 h-full group relative overflow-hidden rounded-xl">
              <div className="w-full h-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="Candid shot of a creative team meeting in a sunlit studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-6 left-6 text-white bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm font-semibold">Weekly Design Review</p>
                <p className="text-xs opacity-80">Our studio in Dhaka</p>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Top Right Image */}
              <div className="h-1/2 group relative overflow-hidden rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
                    alt="Close up of artisan hands working with ceramic clay"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-lg">Process & Craft</span>
                </div>
              </div>
              {/* Bottom Right Image */}
              <div className="h-1/2 group relative overflow-hidden rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                    alt="Fatima, Creative Lead inspecting a textile sample"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold">Fatima, Creative Lead</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24 py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Our Core Values</h2>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card: Quality */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons-outlined text-accent text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Focusing on artisanal craft and longevity. We source materials that age gracefully alongside your home.
              </p>
            </div>
            {/* Value Card: Community */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons-outlined text-accent text-3xl">groups</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Building a home for shared stories and local makers. We champion the independent creators in our network.
              </p>
            </div>
            {/* Value Card: Heritage */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-icons-outlined text-accent text-3xl">eco</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Heritage</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Celebrating traditional Bangladeshi craftsmanship. Every piece connects modern homes to our rich cultural legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Founder's Letter Section */}
        <section className="max-w-2xl mx-auto py-20 border-t border-slate-200 dark:border-slate-700 text-center">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            A note from our founders
          </span>
          <h2 className="text-3xl font-semibold mb-8">Refining Daily Rituals</h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light text-left">
            <p>
              When we started Decor and Culture, we had one simple goal: to create a bridge between Bangladesh's rich cultural heritage and contemporary home design. We noticed beautiful traditional crafts were being overlooked in favor of mass-produced items.
            </p>
            <p>
              Our journey has taken us from village artisans in Sylhet to master weavers in Rangpur. Every piece in our collection is there because it serves a purpose and carries the story of skilled hands that created it.
            </p>
            <p>
              Thank you for letting us be a small part of your home and your life. We hope these pieces bring you as much joy as we felt in discovering the talented artisans behind them.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="mb-2 italic text-3xl opacity-80 font-serif">
              Rashida & Karim
            </div>
            <div className="text-sm font-semibold tracking-wider text-slate-500">
              Co-Founders, Decor and Culture
            </div>
          </div>
        </section>

        {/* Subtle CTA */}
        <section className="text-center py-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
          >
            Explore our current collection
            <span className="material-icons-outlined">east</span>
          </Link>
        </section>
      </main>

      <Footer />
      <ToastProvider />
    </div>
  );
}