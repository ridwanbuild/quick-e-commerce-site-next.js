import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-white">

      <div className="w-full flex items-center flex-col justify-center max-w-5xl text-center p-6">

        {/* Main Heading */}
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-700 mb-2">
          Subscribe now &amp; get <span className="text-orange-600">20% off</span>
        </h2>
        
        {/* Subtext */}
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Subscription Form Input and Button */}
       <div className="flex items-center  text-sm bg-white h-12 border rounded border-gray-500/30 w-full max-w-md">

            <svg className="ml-3" width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M16.5 4.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 9.75 1.5 4.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

            </svg>

            <input className="px-2 w-full h-full outline-none text-gray-500 bg-transparent" type="email" placeholder="info@gmail.com" />

            <button type="submit" className="bg-gray-500/10 h-full px-3 flex items-center justify-center text-themeColor font-medium">

                Subscribe

            </button>

        </div>



      </div>
    </div>
  );
};

export default Subscribe;