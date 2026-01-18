'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ToastProvider from '../components/ToastProvider.jsx';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
        GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
      </div>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover transform scale-105"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop")'
              }}
            ></div>
          </div>
          <div className="relative z-20 text-center px-6 max-w-4xl">
            <span className="uppercase tracking-[0.3em] text-white/90 text-sm font-semibold mb-6 block">
              Established 2020
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8">
              Our Story: Bringing Culture to Every Home
            </h2>
            <div className="flex justify-center">
              <div className="w-px h-24 bg-white/60"></div>
            </div>
          </div>
        </section>

        {/* Narrative Section 01 */}
        <section className="max-w-[1200px] mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=750&fit=crop"
                alt="Close up of hand drawn furniture sketches and blueprints"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm italic text-slate-500 dark:text-slate-400 font-serif">
              Archival: The first concepts for our cultural home decor collection, 2020.
            </p>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <h3 className="font-serif text-4xl leading-snug">
              The Beginning of <br/>
              <span className="text-accent italic">Cultural Living</span>
            </h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              In 2020, Decor and Culture started with a vision to bridge the gap between traditional craftsmanship and modern living. We saw homes that lacked personality and cultural connection.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              We believed that every home should tell a story, reflecting the rich cultural heritage of Bangladesh while embracing contemporary design principles that serve modern families.
            </p>
          </div>
        </section>

        {/* Artisanal Detail Section */}
        <section className="bg-slate-50 dark:bg-slate-900/40 py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h3 className="font-serif text-4xl mb-6">Honoring the Craft</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Every piece in our collection celebrates local artisans and traditional techniques, 
                bringing authentic Bangladeshi craftsmanship to modern homes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group cursor-default">
                <div className="aspect-square rounded-lg mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop"
                    alt="Artisanal woodworker shaping furniture"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">Local Materials</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Sustainably sourced bamboo and teak from local forests.
                </p>
              </div>
              <div className="group cursor-default md:translate-y-12">
                <div className="aspect-square rounded-lg mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
                    alt="Traditional hand tools on a wooden workbench"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">Traditional Techniques</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Time-honored methods passed down through generations of craftsmen.
                </p>
              </div>
              <div className="group cursor-default">
                <div className="aspect-square rounded-lg mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop"
                    alt="A person weaving a textile pattern"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">Cultural Patterns</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Hand-woven textiles featuring traditional Bangladeshi motifs and colors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-40">
          <h3 className="font-serif text-5xl text-center mb-32">Our Journey</h3>
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"></div>
            <div className="space-y-40">
              {/* Milestone 1 */}
              <div className="relative flex items-center justify-between md:flex-row flex-col">
                <div className="md:w-[45%] w-full order-2 md:order-1 text-right pr-0 md:pr-12">
                  <span className="font-serif text-4xl text-accent font-bold">2020</span>
                  <h4 className="text-xl font-bold mt-2 mb-4">The Vision</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Founded with a mission to celebrate Bangladeshi culture through modern home decor, 
                    starting with a small collection of handcrafted pieces.
                  </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-900 z-10"></div>
                <div className="md:w-[45%] w-full order-1 md:order-2 mb-8 md:mb-0">
                  <div className="aspect-video rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop"
                      alt="First workshop and design studio"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex items-center justify-between md:flex-row flex-col">
                <div className="md:w-[45%] w-full mb-8 md:mb-0">
                  <div className="aspect-video rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
                      alt="Display of textile rolls and fabrics"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-900 z-10"></div>
                <div className="md:w-[45%] w-full pl-0 md:pl-12">
                  <span className="font-serif text-4xl text-accent font-bold">2021</span>
                  <h4 className="text-xl font-bold mt-2 mb-4">First Collection</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Launched our signature 'Heritage & Home' series, featuring traditional patterns 
                    reimagined for contemporary living spaces.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex items-center justify-between md:flex-row flex-col">
                <div className="md:w-[45%] w-full order-2 md:order-1 text-right pr-0 md:pr-12">
                  <span className="font-serif text-4xl text-accent font-bold">2023</span>
                  <h4 className="text-xl font-bold mt-2 mb-4">Online Presence</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Expanded our reach across Bangladesh through our e-commerce platform, 
                    making cultural home decor accessible nationwide.
                  </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-900 z-10"></div>
                <div className="md:w-[45%] w-full order-1 md:order-2 mb-8 md:mb-0">
                  <div className="aspect-video rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
                      alt="Modern e-commerce and digital presence"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex items-center justify-between md:flex-row flex-col">
                <div className="md:w-[45%] w-full mb-8 md:mb-0">
                  <div className="aspect-video rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
                      alt="Team celebrating success"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-900 z-10"></div>
                <div className="md:w-[45%] w-full pl-0 md:pl-12">
                  <span className="font-serif text-4xl text-accent font-bold">Today</span>
                  <h4 className="text-xl font-bold mt-2 mb-4">Growing Community</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Serving thousands of homes across Bangladesh, we continue to celebrate 
                    our rich cultural heritage through beautiful, functional design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-[1200px] mx-auto px-6 pb-32 pt-20">
          <div className="bg-accent/5 dark:bg-accent/10 rounded-3xl p-12 md:p-24 text-center">
            <h3 className="font-serif text-4xl md:text-5xl mb-8">
              The story continues with you.
            </h3>
            <p className="text-lg max-w-2xl mx-auto mb-12 text-slate-600 dark:text-slate-300">
              Bring a piece of our cultural heritage into your home. Each piece is a celebration 
              of tradition meeting modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-accent text-white px-10 py-4 rounded-lg font-bold hover:bg-accent/90 transition-all transform hover:-translate-y-1 inline-block"
              >
                Shop the Current Collection
              </Link>
              <Link 
                href="/about/team"
                className="border border-accent text-accent px-10 py-4 rounded-lg font-bold hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 inline-block"
              >
                View Our Story
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ToastProvider />
    </div>
  );
}