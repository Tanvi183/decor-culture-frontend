'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import ShopBySection from './components/ShopBySection.jsx';
import ExclusivesSection from './components/ExclusivesSection.jsx';
import ProductDetailSection from './components/ProductDetailSection.jsx';
import BathDecorSection from './components/BathDecorSection.jsx';
import DeliverySection from './components/DeliverySection.jsx';
import CustomerDiariesSection from './components/CustomerDiariesSection.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
        GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
      </div>

      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShopBySection />
        <ExclusivesSection />
        <ProductDetailSection />
        <BathDecorSection />
        <DeliverySection />
        <CustomerDiariesSection />
      </main>

      <Footer />
    </div>
  );
}