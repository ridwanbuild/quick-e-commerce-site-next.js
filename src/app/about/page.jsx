"use client"


import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* --- Section 1: Hero & Story (Responsive Layout) --- */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-x-12 lg:gap-x-20 items-center">
            
            {/* Image Content (Order reversed on mobile for better flow) */}
            <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1 mb-10 md:mb-0">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                {/* Placeholder Image: Ensure /images/about-hero.jpg is in your public folder */}
                <Image 
                  src="/team-image.jpg" 
                  alt="QuickCart Office Team" 
                  layout="fill" 
                  objectFit="cover"
                  priority 
                />
              </div>
            </div>
            
            {/* Text Content (Order 1 on mobile) */}
            <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2 mb-10 md:mb-0">

              <h1 className="text-2xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Our Story: <span className="text-themeColor">Innovation Meets Quality</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-500">
                **QuickCart** was founded in 2018 with a simple vision: to make the world's best consumer electronics accessible to everyone, everywhere. We noticed the gap between enthusiasts and top-tier tech, and we built a bridge.
              </p>
              <p className="mt-4 text-sm text-gray-500 hidden sm:block">
                From our first warehouse shipment to becoming a trusted name in audio and gaming, our journey has been driven by a passion for the products we sell and an unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Values (Responsive Grid) --- */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Value 1: Quality */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-themeColor mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.103A.999.999 0 0020.5 4H3.5a1 1 0 00-.868 1.583l9 14a1 1 0 001.736 0l9-14A1 1 0 0020.618 7.897z" /></svg>
              <h3 className="text-xl font-semibold text-gray-900">Curated Quality</h3>
              <p className="mt-2 text-sm text-gray-500">
                Every product on QuickCart is rigorously tested and approved by our experts, ensuring you get only the best gear.
              </p>
            </div>

            {/* Value 2: Customer Focus */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-themeColor mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-semibold text-gray-900">Customer First</h3>
              <p className="mt-2 text-sm text-gray-500">
                We back every purchase with 24/7 support and hassle-free returns, because your satisfaction is our success.
              </p>
            </div>
            
            {/* Value 3: Community */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg sm:col-span-2 lg:col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-themeColor mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-xl font-semibold text-gray-900">Global Community</h3>
              <p className="mt-2 text-sm text-gray-500">
                We are dedicated to providing fair prices and empowering the entire global tech community with knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Section 3: Call to Action to Shop (Mobile Padding) --- */}
      <section className="bg-themeColor py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">
                Ready to Experience the QuickCart Difference?
            </h2>
            <p className="text-base text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Explore our full catalog of curated electronics and find the perfect gear to power your passion.
            </p>
            <a
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-themeColor bg-white hover:bg-gray-100 transition duration-300 shadow-lg"
            >
                Start Shopping Now &rarr;
            </a>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUsPage;