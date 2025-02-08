import React from "react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="bg-white px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-black">Top Picks For You</h2>
        <p className="text-gray-500 mt-2">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product */}
        {[
          {
            id: 1,
            name: "Stylish Armchair",
            price: "$ 780",
            image: "/toppick0.png", 
          },
          {
            id: 2,
            name: "High Quality Modern Sofa",
            price: "$ 150",
            image: "/toppick1.png", 
          },
          {
            id: 3,
            name: "Liberty Center",
            price: "$ 1100",
            image: "/toppick2.png",
          },
          {
            id: 4,
            name: "Matilda Velvet Bed",
            price: "$ 600",
            image: "/toppick3.png", 
          },].map((product) => (
          <div
            key={product.id}
            className="w-[287px] h-[372px] mx-auto flex flex-col items-center text-center rounded-lg">
            <div className="w-[287px] h-[200px] overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                width={287}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-2 mt-4 w-full px-2">
              <h3 className="text-start text-[16px] font-medium">{product.name}</h3>
              <p className="text-start text-[16px] font-semibold">{product.price}</p>
            </div>
          </div>
        ))
        }
      </div>

      {/* Button */}
      <div className="text-center">
        <Link
          href="/shop"
          className="text-black text-lg underline decoration-2 hover:text-gray-900"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Product;