"use client";
import Background from "../landing/blur-background/background";
import AI from "../../public/assets/ai.png";
import { Hero } from "./hero";
import Image from "next/image";
// import { LandingGraph } from "./landing-graph";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
// import { loglib } from "@loglib/tracker";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className=" relative flex justify-center items-center max-w-8xl card bg-gradient-circle w-full  px-8 py-10 pb-8 from-gray-50 to-gray-200   dark:from-brand-900/20 dark:to-stone-950/80 sm:min-h-fit md:px-16 md:py-12  md:pt-16 rounded-3xl">
      <section className="flex flex-col justify-center items-center space-y-8">
        <Background />
        <div
          className=" space-y-4"
          // onClick={() => loglib.track("github", { from: "hero section" })}
        >
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            <div className="mx-auto flex items-center justify-center gap-3">
              <h2 className=" items-center justify-center font-heading text-lg leading-[1.1] md:text-xl  ">
                Let's Help the Education 
              </h2>
            </div>
          </Link>
          <Hero />
        </div>
        <div className=" mt-8 space-y-4">
          <div className="flex justify-center items-center gap-3 font-semibold">
            <p className="max-w-xl text-left text-xl tracking-wider text-purple-800">
              3 Easy Step To get started
            </p>
            <div className="text-md flex gap-4 text-black dark:text-white sm:flex-col 2xl:text-lg">
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden aspect-square w-5 stroke-purple-300 stroke-2 sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
                <span className="bg-gradient-to-br from-indigo-300 to-purple-600 bg-clip-text text-transparent">
                  01
                </span>
                <span className=" ">Connect Wallet</span>
              </div>
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden aspect-square w-5 stroke-purple-300 stroke-2 sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
                <span className="bg-gradient-to-br from-indigo-300 to-purple-600 bg-clip-text text-transparent">
                  02
                </span>
                <span className="">Prepare the mega mind</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden aspect-square w-5 stroke-purple-300 stroke-2 sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
                <span className="bg-gradient-to-br from-indigo-300 to-purple-600 bg-clip-text text-transparent">
                  03
                </span>
                <span className="">Enjoy Learning</span>
              </div>
            </div>
          </div>
          <div className="flex  flex-col  justify-center items-center gap-6 font-semibold sm:flex-row">
            <Link
              className={cn(
                "  text-white cursor-pointer font-bold transition-all duration-[0.3s] ease-[ease] relative inline-block shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.1),7px_7px_20px_0px_rgba(26, 35, 126, 0.3),4px_4px_5px_0px_rgba(0,0,0,0.1)] px-4 md:px-[25px] py-2.5 rounded-[5px] bg-transparent",
                "dark:text-white text-stone-900 border-[none] after:absolute after:content-[''] after:w-0 after:h-full after:z-[-1] after:shadow-[-7px_-7px_20px_0px_#1a237e,-4px_-4px_5px_0px_#000,7px_7px_20px_0px_#0002,4px_4px_5px_0px_#0001] after:transition-all after:duration-[0.3s] after:ease-[ease] after:left-0 after:top-0 hover:text-black hover:after:w-full border-stone-100 dark:border-stone-700 hover:dark:text-white hover:after:left-auto hover:after:right-0 active:top-0.2 border w-max"
              )}
              href="/publish-courses"
              // onClick={() => loglib.track("get started", { from: "hero section" })}
            >
              Get Started
            </Link>

            <Link
              href="/courses"
              className=" flex items-center gap-4 rounded-md bg-gradient-to-tr from-stone-700/80 to-purple-600/60 bg-clip-text text-transparent transition-all duration-500 hover:gap-8 hover:text-gray-800 dark:from-white/70 dark:to-purple-700 hover:dark:text-gray-400"
              // onClick={() => loglib.track("live demo", { from: "hero section" })}
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="aspect-square w-5 stroke-purple-300 stroke-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* <LandingGraph /> */}

      {/* <Image src={AI} alt="ai-image" className="shadow-lg" /> */}
    </div>
  );
};
