'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ToastProvider from '../../components/ToastProvider.jsx';
import { toast } from 'react-toastify';
import { FaLeaf, FaShippingFast, FaStar } from "react-icons/fa";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [loading, setLoading] = useState(true);

  const colors = ['#1A3C34', '#b06845', '#1E2749', '#D1C9C0'];
  const colorNames = ['Emerald', 'Terracotta', 'Navy', 'Sand'];

  const formatPrice = (price) => {
    return price.toLocaleString('en-BD');
  };

useEffect(() => {
  const loadProduct = async () => {
    try {
      if (!params.id) return;

      // Fetch the product by ID from API
      const res = await fetch(`https://decor-culture-server.vercel.app/api/products/${params.id}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch product');
      }

      const productData = await res.json();
      setProduct(productData);

      // Fetch all products to find related items
      const allRes = await fetch(`https://decor-culture-server.vercel.app/api/products`);
      if (!allRes.ok) throw new Error('Failed to fetch all products');
      const allProducts = await allRes.json();

      const related = allProducts
        .filter(p => p.category === productData.category && p.id !== productData.id)
        .slice(0, 4);

      setRelatedProducts(related);
    } catch (error) {
      console.error('Error loading product:', error);
    } finally {
      setLoading(false);
    }
  };

  loadProduct();
}, [params.id]);


  const handleAddToCart = () => {
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading product...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Product Not Found</h2>
            <Link href="/products" className="text-primary hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header />

    <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
  {/* Breadcrumbs */}
  <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
    <span className="text-xs">›</span>
    <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
    <span className="text-xs">›</span>
    <span className="text-slate-900 dark:text-slate-100 font-medium">{product.name}</span>
  </nav>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
    {/* Left Column: Gallery */}
    <div className="lg:col-span-7 space-y-6">
      <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-slate-50 dark:bg-slate-900 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
    </div>

    {/* Right Column: Product Info */}
    <div className="lg:col-span-5 flex flex-col">
      <div className="sticky top-28 space-y-6">
        <div className="flex justify-between items-start mb-2">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wide">
            New Collection
          </span>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <span className="text-yellow-500">★</span>
            <span>{product.rating}</span>
            <span className="text-slate-400 font-normal underline">({product.reviews} reviews)</span>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight mb-4">{product.name}</h1>

        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-2xl font-medium text-slate-900 dark:text-slate-100">৳</span>
          <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">{formatPrice(product.price)}</span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{product.description}</p>

        {/* Selectors */}
        <div className="space-y-8 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block">
              Select Color: {colorNames[selectedColor]}
            </span>
            <div className="flex gap-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-10 h-10 rounded-full ring-offset-2 ring-2 transition-all ${
                    selectedColor === index ? 'ring-primary shadow-lg' : 'ring-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                  title={colorNames[index]}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-1">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Quantity</span>
              <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 shadow-sm">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="hover:text-primary text-lg"
                >−</button>
                <span className="font-bold">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="hover:text-primary text-lg"
                >+</button>
              </div>
            </div>
            <div className="flex-[2]">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.97]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="border-t border-slate-100 dark:border-slate-800 space-y-2">
          <details className="group py-4 border-b border-slate-100 dark:border-slate-800 rounded-lg px-4">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm uppercase tracking-wide">
              Product Description
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="pt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
              <p>{product.description}</p>
              {product.features && (
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </details>

          <details className="group py-4 border-b border-slate-100 dark:border-slate-800 rounded-lg px-4">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm uppercase tracking-wide">
              Materials & Care
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="pt-2 text-sm text-slate-600 dark:text-slate-400">
              <p>Premium materials. Spot clean only or professional cleaning recommended.</p>
            </div>
          </details>

          <details className="group py-4 border-b border-slate-100 dark:border-slate-800 rounded-lg px-4">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm uppercase tracking-wide">
              Shipping & Returns
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="pt-2 text-sm text-slate-600 dark:text-slate-400">
              <p>Free standard shipping on orders over ৳5,000. Easy 30-day returns.</p>
            </div>
          </details>
        </div>

        {/* Benefits */}
<div className="grid grid-cols-3 gap-6 mt-10 text-center">
  <div className="flex flex-col items-center gap-2">
    <FaLeaf className="text-primary text-2xl" />
    <span className="text-[10px] font-black uppercase text-slate-400 leading-tight">Eco-friendly Materials</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <FaShippingFast className="text-primary text-2xl" />
    <span className="text-[10px] font-black uppercase text-slate-400 leading-tight">Fast Global Delivery</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <FaStar className="text-primary text-2xl" />
    <span className="text-[10px] font-black uppercase text-slate-400 leading-tight">Lifetime Warranty</span>
  </div>
</div>
      </div>
    </div>
  </div>

  {/* Related Products Section */}
  {relatedProducts.length > 0 && (
    <section className="mt-32">
      <div className="flex justify-between items-end mb-10">
        <div className="space-y-1">
          <h2 className="text-3xl font-extrabold tracking-tight">Complete the Look</h2>
          <p className="text-slate-500">Hand-picked items that pair beautifully with your selection.</p>
        </div>
        <div className="flex gap-2">
          <button className="size-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="text-lg">‹</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">
        {relatedProducts.map((relatedProduct) => (
          <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
            <div className="min-w-[300px] group cursor-pointer">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-slate-100 dark:bg-slate-800 mb-4 relative">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-lg">🛒</span>
                </button>
              </div>
              <h3 className="font-bold text-lg">{relatedProduct.name}</h3>
              <div className="flex items-baseline">
                <span className="text-primary font-medium">৳</span>
                <span className="text-primary font-medium ml-1">{formatPrice(relatedProduct.price)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )}
</main>


      <Footer />
      <ToastProvider />
    </div>
  );
}