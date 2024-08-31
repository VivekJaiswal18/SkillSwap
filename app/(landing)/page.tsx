"use client";

import { useUser } from "@clerk/nextjs";
import SignInButton from "../../components/SignInButton";
import { Button } from "../../components/ui/button";
import { signIn } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import { HeroSection } from "@/components/hero";
import Featured from "@/components/Featured";
import Product from "@/components/Products";
import { Accordions } from "@/components/Accordion";
import Supported from "@/components/Supported";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import ProductCard from "@/components/Products/ProductDetails";
import Panel from "@/components/Panel";
import { Shell } from "@/components/shell/shell";
// import CourseSideBar from "@/components/UnitSide";

// const apiKey = process.env.GOOGLE_CLIENT_ID;

export default function Home() {
  // const user = useUser();
  
  return (
    <NextUIProvider>
      <main className=" min-h-screen  grid place-items-center space-y-10 md:space-y-20 p-16">
        {/* hellow */}
        <HeroSection />
        {/* <Products /> */}
        {/* <Product /> */}
        <Featured />
        {/* <ProductCard title={"sfd"} subtitle={"Hello"} url={""} image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw0UgVlc23i8aAKXf6UoqfTc&ust=1724801897123000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9l_Ppk4gDFQAAAAAdAAAAABAR"}/>  */}
         {/* Can be used for course card  */}
         
        <Accordions />
        <Supported />
      </main>
      <div className="m-10">
        <Footer />
      </div>
    </NextUIProvider>
  );
}
