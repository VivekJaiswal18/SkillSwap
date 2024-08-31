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
import { ConnectButton } from "@rainbow-me/rainbowkit";


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


// const config = getDefaultConfig({
//   appName: 'SkillSwap',
//   projectId: 'f49af14466b2311264be6349729cbf9e',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true,
// });

// const queryClient = new QueryClient();

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
            <ConnectButton/>
          <Toaster />
        </Providers>
        </WagmiConfigProvider>
    </html>
    );

}
