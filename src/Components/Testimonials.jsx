import React from "react";
// 1. Import the Image component from Next.js
import Image from 'next/image';

// 2. Define your brand data. 
// The 'src' must point to an image file in your 'public' directory.
const brands = [
  { name: "Apple", src: "/brands/apple_logo.svg", href: "/shop?brand=apple" },
  { name: "Samsung", src: "/brands/samsung_logo.svg", href: "/shop?brand=samsung" },
  { name: "Sony", src: "/brands/sony_logo.svg", href: "/shop?brand=sony" },
  { name: "ASUS", src: "/brands/asus_logo.svg", href: "/shop?brand=asus" },
  { name: "Canon", src: "/brands/canon_logo.svg", href: "/shop?brand=canon" },
  { name: "Xbox", src: "/brands/xbox_logo.svg", href: "/shop?brand=xbox" },
];

const ShopByBrand = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container m-auto px-4">
        
        {/* Section Header - Styled to match your Testimonials component */}
        <div className="flex flex-col items-center justify-center mb-12 space-y-1">
          <h2 className="text-2xl capitalize font-bold text-gray-700">
            Shop By Top Brands
          </h2>
          {/* Assuming 'bg-themeColor' is defined in your CSS/Tailwind config */}
          <div className="bg-themeColor w-12 h-0.5"></div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.href}
              aria-label={`Shop ${brand.name}`}
              className="group flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 transform hover:scale-[1.02] text-center"
            >
              {/* Use the Next.js Image Component */}
              <div className="w-16 h-16 relative mb-2 opacity-70 group-hover:opacity-100 transition duration-300">
                <Image 
                  src={brand.src} 
                  alt={`${brand.name} Logo`} 
                  layout="fill" // Makes the image fill the parent div (w-16 h-16)
                  objectFit="contain" // Ensures the logo is visible without cropping
                />
              </div>
              
              <p className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition duration-300">
                {brand.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;