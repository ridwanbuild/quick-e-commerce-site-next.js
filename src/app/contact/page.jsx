"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Example() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-indigo-600 font-medium mb-2">Contact Us</p>
          <h1 className="text-2xl font-bold md:text-5xl  text-slate-800 mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have any questions or feedback? We'd love to hear from you.  
            Just fill out the form below and our team will get back to you soon.
          </p>
        </div>

        {/* Form Container */}
        <form className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 flex flex-col items-center text-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="w-full">
              <label className="text-black/70 font-medium" htmlFor="name">
                Your Name
              </label>
              <input
                className="h-12 mt-2 w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-themeColor focus:border-themeColor transition"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-black/70 font-medium" htmlFor="email">
                Your Email
              </label>
              <input
                className="h-12 mt-2 w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-themeColor focus:border-themeColor transition"
                type="email"
                required
              />
            </div>
          </div>

          <div className="mt-6 w-full">
            <label className="text-black/70 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full mt-2 p-3 h-40 border border-gray-300 rounded-md resize-none outline-none focus:ring-1 focus:ring-themeColor focus:border-themeColor transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 flex items-center justify-center gap-2 bg-themeColor cursor-pointer text-white font-medium h-12 w-56 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition duration-300"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
