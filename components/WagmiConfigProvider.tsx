"use client";

import '@rainbow-me/rainbowkit/styles.css';
// import EduchainTestnet from "../utils/Educhainrpc"
import { lineasepoliachain } from '../utils/lineasepoliaChainConfig';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React from 'react';

const config = getDefaultConfig({
    appName: 'SkillSwap',
    projectId: 'f49af14466b2311264be6349729cbf9e',
    chains: [lineasepoliachain, mainnet, sepolia, polygon, optimism, base, arbitrum],
    ssr: true, 
  });

const queryClient = new QueryClient();

 function WagmiConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiConfigProvider
