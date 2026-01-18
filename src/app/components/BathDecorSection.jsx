import Image from 'next/image';

export default function BathDecorSection() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
      title: "Floral Whimsy Bath Rug",
      price: "Tk 1,790.00"
    },
    {
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
      title: "Heritage Soap Dispenser",
      price: "Tk 1,290.00"
    },
    {
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=400&fit=crop",
      title: "Luxury Towel Set",
      price: "Tk 2,490.00"
    },
    {
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      title: "Modern Bath Caddy",
      price: "Tk 1,590.00"
    },
    {
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop",
      title: "Ceramic Bath Set",
      price: "Tk 3,290.00"
    },
    {
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
      title: "Bamboo Storage Basket",
      price: "Tk 1,990.00"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=400&fit=crop",
      title: "Spa Candle Collection",
      price: "Tk 2,190.00"
    },
    {
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=400&fit=crop",
      title: "Glass Shower Organizer",
      price: "Tk 1,890.00"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-4">AMAZING BATH DECOR</h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8">
            Check our exclusive collection of bath decor
          </p>
          <a className="text-[10px] font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700 px-10 py-3 hover:bg-primary hover:text-white transition-all inline-block rounded" href="#">
            View More Product
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-square bg-white dark:bg-slate-800 overflow-hidden">
                <Image
                  alt={product.title}
                  className="w-full h-full object-cover"
                  src={product.image}
                  width={300}
                  height={300}
                />
              </div>
              <div className="text-center">
                <h5 className="text-[10px] font-bold uppercase tracking-widest">{product.title}</h5>
                <p className="text-[10px] text-slate-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}