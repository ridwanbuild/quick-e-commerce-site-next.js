import Image from "next/image";
import React from "react";

export default function LevelUp() {
  return (
    <div className="rounded-lg my-16 p-10 lg:flex items-center gap-10 justify-between bg-slate-100">

      <div>
        <Image src={"/Gaming Accessories.png"} width={300} height={300} alt="Gaming Image"/>
      </div>

      <div className="flex space-y-4 items-center justify-center flex-col">
        <h2 className="font-bold text-2xl text-themeColor lg:w-68 text-center">Level Up Your Gaming Experience</h2>
        <p className="lg:w-96 text-center">
          {" "}
          From immersive sound to precise controls—everything you need to win
        </p>

            <button className="py-2 cursor-pointer px-6 rounded-md bg-gray-700 text-white">Buy Now</button>

      </div>

    <div className="pt-8">
        <Image src={"/Premium Headphones.png"} width={300} height={300} alt="premium headphone"/>
      </div>
     

    </div>
  );
}
