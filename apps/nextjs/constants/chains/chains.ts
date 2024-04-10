import { SupportedChainId } from "@symmio/frontend-sdk/constants/chains";
import {
  bsc,
  fantom,
  base,
  polygon,
  arbitrum,
  mainnet,
  bscTestnet,
} from "wagmi/chains";

const supportedWagmiChain = {
  [SupportedChainId.FANTOM]: fantom,
  [SupportedChainId.BSC]: bsc,
  [SupportedChainId.BASE]: base,
  [SupportedChainId.POLYGON]: polygon,
  [SupportedChainId.ARBITRUM]: arbitrum,
  [SupportedChainId.MAINNET]: mainnet,
  [SupportedChainId.BSC_TESTNET]: bscTestnet,
};

function getWagmiChain(supportChainList: number[]) {
  return supportChainList.map((chainId) => supportedWagmiChain[chainId]);
}

export const ClientChain = [
  SupportedChainId.POLYGON,
  SupportedChainId.ARBITRUM,
];

export const APP_CHAINS = getWagmiChain(ClientChain);

export const FALLBACK_CHAIN_ID = SupportedChainId.POLYGON;
