import { ShieldCheck, Truck, RefreshCcw, Headphones } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Premium Quality",
      desc: "High quality products guaranteed",
    },
    {
      icon: <Truck size={40} />,
      title: "Fast Delivery",
      desc: "Quick delivery at your doorstep",
    },
    {
      icon: <RefreshCcw size={40} />,
      title: "Easy Returns",
      desc: "Hassle-free return policy",
    },
    {
      icon: <Headphones size={40} />,
      title: "24/7 Support",
      desc: "Always here to help you",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto bg-[#f7f6f1] rounded-3xl shadow-sm">
        <div className="grid md:grid-cols-4 gap-8 p-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-r last:border-r-0 border-gray-300"
            >
              <div className="text-[#4f5f3d]">{item.icon}</div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}