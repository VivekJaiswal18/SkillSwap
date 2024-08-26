'use client'

import Link from "next/link";
import React from "react";

import UserAccountNav from "./NavbarAccount";
// import { ThemeToggle } from "./ThemeToggle";
import { ThemeToggle } from "./ThemeProvider";
// import { getAuthSession } from "@/lib/nextauth";
// import { getAuthSession } from "../lib/nextauth";
import SignInButton from "./SignInButton";
// import { useUser } from "@clerk/nextjs";
import { NavbarMenus } from "./NavMenu";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {

   return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-slate-900 py-2">
      <div className="flex items-center justify-between px-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="flex items-center">
            <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
              SkillSwap
            </p>
          </Link>
        </div>
          <NavbarMenus />
        
        <div className="flex items-center gap-8">
          <ConnectButton />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );

 };
export default Navbar; 