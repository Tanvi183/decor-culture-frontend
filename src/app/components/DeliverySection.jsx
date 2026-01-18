import Image from 'next/image';

export default function DeliverySection() {
  const promoImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=150&fit=crop"
  ];

  return (
    <section className="py-12 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="flex space-x-4">
          {promoImages.map((image, index) => (
            <Image
              key={index}
              alt={`Promo image ${index + 1}`}
              className={`w-32 h-24 object-cover rounded shadow-lg ${index === 1 ? 'translate-y-4' : ''}`}
              src={image}
              width={128}
              height={96}
            />
          ))}
        </div>
        <div className="text-right">
          <h3 className="font-serif italic text-4xl text-accent leading-none">Quickest Delivery</h3>
          <p className="text-sm font-bold uppercase tracking-[0.2em] mt-2">All over Bangladesh</p>
        </div>
      </div>
    </section>
  );
}