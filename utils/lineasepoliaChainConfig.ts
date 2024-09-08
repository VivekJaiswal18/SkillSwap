import { Chain } from 'wagmi/chains'

export const lineasepoliachain: Chain = {
  id: 59141,
  name: 'Linea Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://rpc.sepolia.linea.build'] },
    default: { http: ['https://rpc.sepolia.linea.build'] },
  },
  blockExplorers: {
    default: { name: 'LineaScan', url: 'https://sepolia.lineascan.build/' },
  },
  testnet: true
};