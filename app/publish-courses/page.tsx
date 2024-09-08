"use client";

import { useUser } from "@clerk/nextjs";
import SignInButton from "../../components/SignInButton";
import { Button } from "../../components/ui/button";
import { signIn } from "next-auth/react";
import { Link, NextUIProvider } from "@nextui-org/react";
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
import PublishCourse from "@/components/publishcourse";


export default function Home() {
  // const user = useUser();
  
  return (
    <NextUIProvider>
      <div className="fixed top-0 right-0 m-5">
      <Link href="/courses">
      <button className="border m-5 p-4 rounded-lg  mt-20 " type="submit">Published Courses</button>
      </Link>
      </div>
      <main className=" min-h-screen  grid place-items-center space-y-10 md:space-y-20 p-16">
         {/* <button className="border m-5 rounded-lg p-4" type="submit">Published Courses</button> */}
         <h1 className="items-start text-3xl font-bold mt-5">Publish a Course</h1>
         <PublishCourse/>
      </main>
      <div className="m-10">
        <Footer />
      </div>
    </NextUIProvider>
  );
}
