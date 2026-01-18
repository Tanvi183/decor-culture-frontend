export default function FeaturesSection() {
  const features = [
    {
      icon: "headset_mic",
      title: "Best Customer Service"
    },
    {
      icon: "local_shipping",
      title: "Fast Shipping"
    },
    {
      icon: "savings",
      title: "Incredible Value"
    },
    {
      icon: "check_circle",
      title: "Unmatched Selection"
    }
  ];

  return (
    <section className="py-12 border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="material-icons-outlined text-3xl mb-3 text-slate-700 dark:text-slate-300">
                {feature.icon}
              </span>
              <h3 className="text-xs font-bold uppercase tracking-widest">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}