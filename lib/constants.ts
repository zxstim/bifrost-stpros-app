import { Token } from "@/types/token";

export const TOKEN_LIST: Token[] = [
  {
    name: "Ether",
    symbol: "ETH",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", //https://eips.ethereum.org/EIPS/eip-7528
    network: "mainnet",
    networkId: 1,
    decimals: 18,
    image: "/eth.svg",
  },
  {
    name: "Voucher ETH",
    symbol: "vETH",
    address: "0xc3997ff81f2831929499c4eE4Ee4e0F08F42D4D8",
    network: "mainnet",
    networkId: 1,
    decimals: 18,
    image: "/veth.svg",
  },
  {
    name: "Ether",
    symbol: "ETH",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", //https://eips.ethereum.org/EIPS/eip-7528
    network: "arbitrum",
    networkId: 42161,
    decimals: 18,
    image: "/eth.svg",
  },
  {
    name: "Voucher ETH",
    symbol: "vETH",
    address: "0xc3997ff81f2831929499c4eE4Ee4e0F08F42D4D8",
    network: "arbitrum",
    networkId: 42161,
    decimals: 18,
    image: "/veth.svg",
  },
  {
    name: "Ether",
    symbol: "ETH",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", //https://eips.ethereum.org/EIPS/eip-7528
    network: "base",
    networkId: 8453,
    decimals: 18,
    image: "/eth.svg",
  },
  {
    name: "Voucher ETH",
    symbol: "vETH",
    address: "0xc3997ff81f2831929499c4eE4Ee4e0F08F42D4D8",
    network: "base",
    networkId: 8453,
    decimals: 18,
    image: "/veth.svg",
  },
  {
    name: "Ether",
    symbol: "ETH",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", //https://eips.ethereum.org/EIPS/eip-7528
    network: "optimism",
    networkId: 10,
    decimals: 18,
    image: "/eth.svg",
  },
  {
    name: "Voucher ETH",
    symbol: "vETH",
    address: "0xc3997ff81f2831929499c4eE4Ee4e0F08F42D4D8",
    network: "optimism",
    networkId: 10,
    decimals: 18,
    image: "/veth.svg",
  },
];