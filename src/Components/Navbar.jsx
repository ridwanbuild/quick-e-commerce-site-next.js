// components/Navbar.js

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";

// --- Data Object for Nav Menu ---
const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// --------------------------------

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 1. Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold">
              {/* Use the brand color for the first part of the logo */}
              <span className="text-themeColor">Quick</span>
              <span className="text-gray-800">Cart</span>
            </Link>
          </div>

          {/* 2. PC (Desktop) Navigation Links - Hidden on Mobile */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-10">
            <div className="flex space-x-8 text-[16px] flex items-center font-normal text-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  // Use the brand color for hover state
                  className="hover:text-themeColor transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Seller Dashboard Button (Desktop Only) */}
              <button
                type="button"
                className="hidden md:block px-3 py-1 cursor-pointer text-base font-normal border border-gray-300 rounded-full hover:bg-gray-100"
              >
                Seller Dashboard
              </button>
            </div>
          </div>

          {/* 3. Utility Icons, Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Desktop Only) */}
            <Link
              href="/search"
              className="text-gray-600 hover:text-themeColor transition-colors hidden md:block"
            >
              <FiSearch className="h-6 w-6" />
            </Link>

            {/* Account Icon (Always Visible) */}
            <Link
              href="/account"
              className="flex items-center space-x-1 text-gray-600 hover:text-themeColor transition-colors"
            >
              <HiOutlineUser className="h-7 w-7" />
              <span className="hidden sm:inline text-lg font-normal">
                Account
              </span>
            </Link>

            {/* Mobile Menu Button (Toggle) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden border border-gray-300 rounded-sm cursor-pointer p-2 text-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <HiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Navigation Panel (Smooth Slide-Down Effect) */}

      {/* <div
        className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"
        onClick={setIsOpen(false)}
      ></div> */}

      <div
        className={`
    md:hidden fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-sm z-30
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        id="mobile-menu"
      >
        <div className="  px-6 pt-10 ">
          <div className="border-b flex items-center justify-between  pb-3 border-gray-400">
            
            <Link href="/" className="lg:text-3xl text-lg font-bold">
              {/* Use the brand color for the first part of the logo */}
              <span className="text-themeColor">Quick</span>
              <span className="text-gray-800">Cart</span>
            </Link>

            {/* close icon */}

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 border border-gray-300 rounded-sm cursor-pointer  hover:text-themeColor transition-colors p-1"
            >
              <HiOutlineX className="h-6  w-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="py-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 text-lg font-normal hover:text-themeColor py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Seller Dashboard Button */}
            <button
              type="button"
              className="w-full mt-3 cursor-pointer px-3 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100"
            >
              Seller Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
