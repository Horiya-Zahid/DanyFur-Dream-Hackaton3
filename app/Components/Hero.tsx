import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic"; 
import Link from "next/link";

const Header = dynamic(() => import("./Header"));

const Hero = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#FBEBB5]">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="bg-[#FBEBB5] w-full h-auto flex flex-col sm:flex-row items-center justify-between sm:px-8 md:px-16 lg:px-20 py-10">
        
        {/* Text Section */}
        <div className="sm:w-1/2 text-center sm:text-left space-y-4 sm:space-y-6">
          <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Rocket Single</h1>
          <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Seater</h1>
          <Link href="/shop">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium underline text-black mt-4">
            Shop Now
          </h2></Link>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 w-full sm:max-w-[853px] md:max-w-[1024px] lg:max-w-[1200px] mt-6 sm:mt-0">
          <Image
            src="/heropic.png"
            alt="Rocket Single Seater Sofa"
            width={853}
            height={1000}
            className="w-full h-auto transform sm:scale-x-100 lg:scale-x-[-1]"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
