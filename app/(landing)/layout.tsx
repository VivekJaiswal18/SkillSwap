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
// import '@rainbow-me/rainbowkit/styles.css';
// import {
//   getDefaultConfig,
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
// } from 'wagmi/chains';
// import {
//   QueryClientProvider,
//   QueryClient,
// } from "@tanstack/react-query";


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
      {/* <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider> */}
        <WagmiConfigProvider>
        <Providers>
            <Navbar />
            <body className={cn(poppins.className , fontHeading.variable)}>{children}</body>
          <Toaster />
        </Providers>
        </WagmiConfigProvider>
        {/* </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider> */}
    </html>
  );
}
