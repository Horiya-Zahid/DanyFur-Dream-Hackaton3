import React from 'react'
import dynamic from "next/dynamic"; 

const Hero = dynamic(() => import("./Hero"));
const Table = dynamic(() => import("./Table"));
const Product = dynamic(() => import("./Product"));
const AsguardSofa = dynamic(() => import("./AsguardSofa"));
const Blog = dynamic(() => import("./Blog"));
const Insta = dynamic(() => import("./Insta"));




export default function Home() {
  return (
    <div className='w-full -[5052px]'>
      <Hero />
      <Table />
      <Product/>
      <AsguardSofa />
      <Blog />
      <Insta />
    </div>
  );
}
