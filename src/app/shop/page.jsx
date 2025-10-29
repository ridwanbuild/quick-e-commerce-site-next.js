"use client";

import { all_Products } from "@/JSONDataStore/productData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

export default function ShopPage() {
  // limit text
  const truncateText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div className="container m-auto px-4 py-20">


      <div className=" flex flex-col items-center justify-center mb-8 space-y-1">
        <h2 className="text-2xl  capitalize font-bold text-gray-700">
          All products
        </h2>
        <div className=" bg-themeColor w-12 h-0.5"></div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 lg:gap-8">
        {all_Products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-sm lg:rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
          >
            {/* Wishlist Icon */}
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 transition">
              <FaRegHeart size={18} />
            </button>

            {/* Product Image */}
            <div className="relative bg-slate-100 h-28 w-full lg:h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain w-96 p-4"
              />
            </div>

            {/* Product Details */}
            <div className="p-3 flex flex-col lg:gap-2">
              <h3 className="font-semibold  text-themeColor ">
                {/* Mobile: show truncated name */}
                <span className="text-sm block lg:hidden">
                  {truncateText(product.name, 12)}
                </span>

                {/* Desktop: show full name */}
                <span className="hidden lg:block">{product.name}</span>
              </h3>

              <p className="hidden lg:block text-sm text-gray-500 line-clamp-2">
                {truncateText(product.description, 35)}
              </p>

              {/* Rating */}
              <div className="flex  gap-2 items-center lg:mt-1">
                <button className="hidden lg:block text-gray-700 text-lg font-medium ">
                  {product.rating.toFixed(1)}
                </button>

                <button className="">
                  <Rating
                    initialValue={product.rating}
                    readonly
                    size={15}
                    allowFraction
                    SVGclassName={"inline-block  mb-[5px] align-middle"}
                  />
                </button>
              </div>

              {/* price and buy now */}
              <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col gap-3 ">
                <p className="text-sm font-medium lg:font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>

                <Link
                  href={`/shop/${product.id}`}
                  className="lg:block hidden bg-gray-700  border  text-white border-gray-300 cursor-pointer py-1 px-4 rounded-full transition duration-200"
                >
                  Buy Now
                </Link>


                <Link
                  href={`/shop/${product.id}`}
                  className="lg:hidden rounded-full text-center bg-gray-800 cursor-pointer text-white py-1 w-full px-1"
                >
                  Buy Now
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
