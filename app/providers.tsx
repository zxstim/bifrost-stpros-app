"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { trustWallet, ledgerWallet, injectedWallet } from "@rainbow-me/rainbowkit/wallets";
import {  } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { ThemeProvider } from "@/components/theme-provider";

const { wallets } = getDefaultWallets();

const pharosTestnet = {
  id: 688689,
  name: "Atlantic Testnet",
  network: "Atlantic Testnet",
  nativeCurrency: {
    name: "Pharos Token",
    symbol: "PHRS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://atlantic.dplabs-internal.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "SocialScan",
      url: "https://atlantic.pharosscan.xyz/",
    },
  },
} as const;


const config = getDefaultConfig({
  appName: "Bifrost vETH App", // Name your app
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!, // Enter your WalletConnect Project ID here
  wallets: [
    {
      groupName: "Installed",
      wallets: [injectedWallet],
    },
    ...wallets,
    {
      groupName: "Other",
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: [pharosTestnet],
  transports: {
    [pharosTestnet.id]: http(),
  },
  ssr: true, // Because it is Nextjs's App router, you need to declare ssr as true
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
