// "use client"
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
// import { EdgeStoreProvider } from "@/lib/edgestore";
import { siteConfig } from "@/config/site";
import WagmiConfigProvider from "../../components/WagmiConfigProvider"
// import CourseSideBar from "@/components/UnitSide";
import CourseMarketplace from "../courses/page";
import Footer from "@/components/Footer";
import { DayPickerProvider } from "react-day-picker";
import PublishCourse from "@/components/publishcourse";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ subsets: ["latin-ext"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "SkillSwap - Learn for the best ",
    template: `%s -  ${siteConfig.name}`,
  },
};

const fontHeading = localFont({
  src:  '../../public/CalSans-SemiBold.ttf',
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <WagmiConfigProvider>
        <Providers>
            <Navbar />
            <body className={cn(poppins.className , fontHeading.variable)}>{children}</body> 
          <Toaster />
        </Providers>
        </WagmiConfigProvider>
    </html>
    );
  }

