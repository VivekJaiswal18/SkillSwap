import { Chain } from 'wagmi/chains'

export const eduChain: Chain = {
  id: 656476,
  name: 'EDU Chain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'EDU',
    symbol: 'EDU',
  },
  rpcUrls: {
    public: { http: ['https://rpc.open-campus-codex.gelato.digital'] },
    default: { http: ['https://rpc.open-campus-codex.gelato.digital'] },
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://opencampus-codex.blockscout.com/' },
  },
  testnet: true
};