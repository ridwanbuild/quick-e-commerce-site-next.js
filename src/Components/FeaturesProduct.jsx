import React from "react";

// --- Card Data Array ---
const Features = [
  {
    id: 1,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
    button_text: "Buy now",
    image_url: "/features1.png",
  },
  {
    id: 2,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
    button_text: "Buy now",
    image_url: "/features2.png",
  },
  {
    id: 3,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
    button_text: "Buy now",
    image_url: "/features3.png",
  },
];

// --- Main Component ---
export default function FeaturesProduct() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container m-auto px-4">

        <div className=" flex flex-col items-center justify-center mb-8 space-y-1">
          <h2 className="text-2xl  capitalize font-bold text-gray-700">
             Featured Products
          </h2>
          <div className=" bg-themeColor w-12 h-0.5"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl  shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.03]"
            >
              {/* Image Area */}
              <div
                className="h-[500px] w-full flex items-end p-5 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.05)), url(${feature.image_url})`,
                }}
              >
                <div className="text-white space-y-2">
                  <p className="text-2xl font-semibold">{feature.title}</p>

                  <p className="text-sm lg:w-52  opacity-90">
                    {feature.description}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center  justify-center px-5 py-2 text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                    >
                      {feature.button_text} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
