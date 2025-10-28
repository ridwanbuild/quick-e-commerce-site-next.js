import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Best Sellers", href: "/" },
        { name: "Offers & Deals", href: "/" },
        { name: "Contact Us", href: "/" },
        { name: "FAQs", href: "/" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { name: "Delivery Information", href: "/" },
        { name: "Return & Refund Policy", href: "/" },
        { name: "Payment Methods", href: "/" },
        { name: "Track Your Order", href: "/" },
        { name: "Contact Us", href: "/" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
        { name: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
        { name: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
        { name: "YouTube", href: "https://youtube.com", icon: <FaYoutube /> },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-100">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300 text-gray-600">
        {/* Logo & Description */}

        <div className="max-w-md">

           <Link href="/" className="lg:text-3xl text-lg font-bold">
              {/* Use the brand color for the first part of the logo */}
              <span className="text-themeColor">Quick</span>
              <span className="text-gray-800">Cart</span>
            </Link>

          <p className="mt-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>

        </div>


        {/* Link Sections */}
        <div className="flex flex-wrap justify-between w-full md:w-[55%] gap-10">

          {linkSections.map((section, index) => (
            <div key={index}>
              
              <h3 className="font-semibold text-base text-gray-900 mb-3 md:mb-5">
                {section.title}
              </h3>

              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className="flex items-center gap-2 hover:text-gray-900 hover:underline transition-colors duration-200"
                    >
                      {link.icon && <span className="text-lg bg-gray-800 p-2 rounded-full text-white">{link.icon}</span>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>


            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        QuickCart . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
