// ✅ Removed "use client" (server component allowed async)
import RelativeProducts from "@/Components/RelativeProducts";
import { all_Products } from "@/JSONDataStore/productData";
import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // ✅ Added React Icons

export default async function ProductDetails({ params }) {
  const { id } = await params; // ✅ Await params
  const product = all_Products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Product not found</h2>
      </div>
    );
  }

  // ✅ Create an image array even if only one image exists
  const images = product.images || [product.image];

  return (
    <div className="container m-auto px-4 py-16">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500">
        <span>Home</span> / <span>Products</span> /{" "}
        <span className="text-indigo-500">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-4">
        {/* ---------- Left side: Image gallery ---------- */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="border lg:p-3 border-gray-500/30 rounded overflow-hidden cursor-pointer max-w-24"
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="border p-4 border-gray-500/30 max-w-100 rounded overflow-hidden">
            <Image
              src={images[0]}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

        </div>

        {/* ---------- Right side: Product info ---------- */}
        <div className="text-sm w-full md:w-1/2">

          <h1 className="text-xl font-bold">{product.name}</h1>

          {/* ✅ Rating (React Icons) */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, i) =>
                product.rating > i ? (
                  <FaStar key={i} className="text-indigo-500 text-sm" />
                ) : (
                  <FaRegStar key={i} className="text-indigo-500/50 text-sm" />
                )
              )}
            <p className="text-base ml-2">({product.rating})</p>

          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: ${product.price + 30 || product.price}
            </p>
            <p className="text-2xl font-medium">Price: ${product.price}</p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          {/* Description */}
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            <li>{product.description}</li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">

            <button className="w-full py-3.5 font-medium cursor-pointer bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
              Add to Cart
            </button>

            <button className="w-full py-3.5 font-medium cursor-pointer bg-gray-800 text-white hover:bg-gray-900 transition">
              Buy now
            </button>


          </div>
        </div>
      </div>



        <RelativeProducts></RelativeProducts>


    </div>
  );
}
