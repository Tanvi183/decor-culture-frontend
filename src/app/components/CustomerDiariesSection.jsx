import Image from 'next/image';

export default function CustomerDiariesSection() {
  const customerImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl mb-4">Customer Diaries</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {customerImages.map((image, index) => (
            <div key={index} className="aspect-square bg-slate-100">
              <Image
                alt={`Customer home ${index + 1}`}
                className="w-full h-full object-cover"
                src={image}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a className="text-[10px] font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700 px-8 py-3 hover:bg-primary hover:text-white transition-all rounded" href="#">
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}