'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductDetailSection() {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = [
    {
      name: "Mallow Plus Blanket",
      price: "Tk 6,490.00",
      design: "Atalaya Terracotta",
      description: "Meet our Mallow Plus Blanket — your new favorite comfort companion. Made for those quiet, cozy nights or lazy weekend mornings, this blanket wraps you in softness that feels like a gentle hug.",
      features: [
        "Ultra-soft texture for cloud-like comfort.",
        "Generous size for full coverage and warmth.",
        "Elegant pastel tones that complement every room."
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop"
    },
    {
      name: "Luxury Living Room Set",
      price: "Tk 45,990.00",
      design: "Modern Elegance",
      description: "Transform your living space with this sophisticated furniture set. Crafted with premium materials and designed for both comfort and style, perfect for contemporary homes.",
      features: [
        "Premium upholstery with stain-resistant fabric.",
        "Ergonomic design for maximum comfort.",
        "Durable hardwood frame construction."
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop"
    },
    {
      name: "Artisan Dining Collection",
      price: "Tk 32,750.00",
      design: "Rustic Charm",
      description: "Bring warmth and character to your dining room with this handcrafted collection. Each piece tells a story of traditional craftsmanship meets modern functionality.",
      features: [
        "Handcrafted solid wood construction.",
        "Natural finish that highlights wood grain.",
        "Seats up to 6 people comfortably."
      ],
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop"
    },
    {
      name: "Zen Bedroom Suite",
      price: "Tk 28,990.00",
      design: "Minimalist Serenity",
      description: "Create your personal sanctuary with this calming bedroom suite. Clean lines and natural materials promote restful sleep and peaceful mornings.",
      features: [
        "Sustainable bamboo and organic cotton materials.",
        "Built-in storage solutions for clutter-free space.",
        "Hypoallergenic and eco-friendly finishes."
      ],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop"
    }
  ];

  const currentProduct = products[currentImageIndex];

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % products.length;
    setCurrentImageIndex(newIndex);
    setQuantity(1); // Reset quantity when changing products
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + products.length) % products.length;
    setCurrentImageIndex(newIndex);
    setQuantity(1); // Reset quantity when changing products
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
    setQuantity(1); // Reset quantity when changing products
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden group relative rounded-lg">
              <Image
                alt={currentProduct.name}
                className="w-full h-full object-cover transition-transform duration-300"
                src={currentProduct.image}
                width={600}
                height={600}
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
              >
                <span className="material-icons-outlined">chevron_left</span>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
              >
                <span className="material-icons-outlined">chevron_right</span>
              </button>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-2">
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`w-20 h-20 flex-shrink-0 ${
                    currentImageIndex === index 
                      ? 'border-2 border-primary' 
                      : 'border border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'
                  } overflow-hidden cursor-pointer rounded transition-all duration-200`}
                >
                  <Image
                    alt={`${product.name} thumbnail`}
                    className="w-full h-full object-cover"
                    src={product.thumbnail}
                    width={80}
                    height={80}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-4xl mb-4">{currentProduct.name}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Decor and Culture</p>
              <p className="text-2xl font-light text-accent">{currentProduct.price}</p>
              <p className="text-[10px] text-slate-400 mt-2 italic">Shipping calculated at checkout.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest block mb-2">Design</label>
                <select 
                  className="w-full border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-accent focus:border-accent rounded"
                  value={currentProduct.design}
                  readOnly
                >
                  <option>{currentProduct.design}</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest block mb-2">Quantity</label>
                <div className="flex border border-slate-200 dark:border-slate-700 rounded">
                  <button 
                    className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <input 
                    className="w-full border-none bg-transparent text-center text-sm focus:ring-0" 
                    type="text" 
                    value={quantity}
                    readOnly
                  />
                  <button 
                    className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">
                Add to Cart
              </button>
              <button className="flex-1 bg-accent text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-accent/90 transition-all rounded">
                Buy It Now
              </button>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p>{currentProduct.description}</p>
              <h4 className="text-primary dark:text-white uppercase tracking-widest text-[10px] font-bold">Features</h4>
              <ul className="text-[11px] list-disc pl-4 space-y-1">
                {currentProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}