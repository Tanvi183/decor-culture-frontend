import Image from 'next/image';

export default function ShopBySection() {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
      title: "Bath | Chic Accessories"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      title: "Bedroom Decor"
    },
    {
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400&h=400&fit=crop",
      title: "Wall Clocks"
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
      title: "Decorative Pillows"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4 text-slate-500">Discover</h2>
          <h3 className="font-serif text-4xl">Shop by section</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square rounded-full bg-slate-50 dark:bg-slate-800 mb-6 overflow-hidden flex items-center justify-center p-8 transition-transform group-hover:scale-105 duration-500">
                <Image
                  alt={category.title}
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal rounded-full"
                  src={category.image}
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}