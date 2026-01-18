'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ToastProvider from '../components/ToastProvider.jsx';
import { toast } from 'react-toastify';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = ['Decor', 'Textiles', 'Lighting', 'Furniture', 'Art', 'Dining', 'Storage', 'Rugs'];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await import('../../data/products.json');
        setProducts(productsData.default);
        setFilteredProducts(productsData.default);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'best-selling':
          return b.reviews - a.reviews;
        case 'featured':
        default:
          return b.rating - a.rating;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, selectedCategory, sortBy]);

  const formatPrice = (price) => {
    return price.toLocaleString('en-BD');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setSortBy('featured');
  };

  const handleAddToCart = (product) => {
    toast.success(`${product.name} added to cart!`);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading products...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      {/* Material Symbols Font */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        rel="stylesheet" 
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
        {/* Top Banner */}
        <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
          GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
        </div>

        <Header />

        <main className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-500 text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-500 text-sm">›</span>
            <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">Products</span>
          </nav>

          {/* Page Heading */}
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 dark:text-slate-100">Our Collection</h1>
            <p className="text-slate-500 text-lg">{filteredProducts.length} high-quality items found</p>
          </div>

          {/* Main Layout: Sidebar + Grid */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filter Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-28 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Categories</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleCategoryChange('')}
                      className={`group relative px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        selectedCategory === ''
                          ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/25'
                          : 'bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">All Products</span>
                        {selectedCategory === '' && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                    
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`group relative px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/25'
                            : 'bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{category}</span>
                          {selectedCategory === category && (
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                          selectedCategory === category ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                        } bg-gradient-to-r from-primary/5 to-primary/10`}></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid Section */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Sorting Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-8">
                  <button
                    onClick={() => setSortBy('featured')}
                    className={`relative flex flex-col items-center justify-center py-4 ${
                      sortBy === 'featured'
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors'
                    }`}
                  >
                    <span className="text-sm font-bold">Featured</span>
                  </button>
                  <button
                    onClick={() => setSortBy('best-selling')}
                    className={`flex flex-col items-center justify-center py-4 ${
                      sortBy === 'best-selling'
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors'
                    }`}
                  >
                    <span className="text-sm font-bold">Best Selling</span>
                  </button>
                  <button
                    onClick={() => setSortBy('price-low')}
                    className={`flex flex-col items-center justify-center py-4 ${
                      sortBy === 'price-low'
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors'
                    }`}
                  >
                    <span className="text-sm font-bold">Price: Low to High</span>
                  </button>
                  <button
                    onClick={() => setSortBy('price-high')}
                    className={`flex flex-col items-center justify-center py-4 ${
                      sortBy === 'price-high'
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors'
                    }`}
                  >
                    <span className="text-sm font-bold">Price: High to Low</span>
                  </button>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <button className="size-9 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded">
                    <span className="text-xl">⊞</span>
                  </button>
                  <button className="size-9 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                    <span className="text-xl">☰</span>
                  </button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-transparent hover:border-primary/20 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {product.originalPrice > product.price && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                          Sale
                        </div>
                      )}
                      {product.quantity < 10 && (
                        <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                          Limited Stock
                        </div>
                      )}
                      <button className="absolute top-4 right-4 size-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xl">♡</span>
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full h-11 bg-primary text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2"
                        >
                          <span className="text-xl">🛒</span>
                          Quick Add
                        </button>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider">{product.category}</p>
                      <h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-baseline">
                          <span className="text-xl font-bold text-slate-900 dark:text-slate-100" style={{ fontFamily: 'inherit' }}>৳</span>
                          <span className="text-xl font-bold text-slate-900 dark:text-slate-100 ml-1">{formatPrice(product.price)}</span>
                        </div>
                        {product.originalPrice > product.price && (
                          <div className="flex items-baseline">
                            <span className="text-sm text-slate-400 line-through" style={{ fontFamily: 'inherit' }}>৳</span>
                            <span className="text-sm text-slate-400 line-through ml-1">{formatPrice(product.originalPrice)}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-amber-400 ml-auto">
                          <span className="text-sm">★</span>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12 mb-20">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="size-10 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                  >
                    <span>‹</span>
                  </button>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`size-10 rounded flex items-center justify-center font-bold transition-colors ${
                          currentPage === pageNumber
                            ? 'bg-primary text-white'
                            : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                  
                  {totalPages > 5 && (
                    <>
                      <span className="px-2">...</span>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className="size-10 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold hover:bg-slate-100 transition-colors"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="size-10 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                  >
                    <span>›</span>
                  </button>
                </div>
              )}

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl text-slate-400 mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    No products found
                  </h3>
                  <p className="text-slate-500 mb-6">
                    Try adjusting your filters or search criteria
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
        <ToastProvider />
      </div>
    </>
  );
}