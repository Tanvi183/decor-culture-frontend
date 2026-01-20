import Image from 'next/image';
import Link from 'next/link';

export default function ExclusivesSection() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      title: "Atalaya Terracotta series",
      price: "Tk 820.00"
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
      title: "Richdale Series Cover",
      price: "Tk 650.00"
    },
    {
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
      title: "Vincent Series Cover",
      price: "Tk 920.00"
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop",
      title: "Miranda Series Cover",
      price: "Tk 740.00"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2 text-slate-500">Curated Collection</h2>
            <h3 className="font-serif text-3xl">Decor and Culture Exclusives</h3>
          </div>
          <Link href="/products" className="text-[10px] font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700 px-6 py-2 hover:bg-primary hover:text-white transition-all">
            View More
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="aspect-square overflow-hidden mb-4 bg-white dark:bg-slate-800">
                <Image
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={product.image}
                  width={300}
                  height={300}
                />
              </div>
              <div className="text-center">
                <h4 className="text-[11px] font-bold uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">
                  {product.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}