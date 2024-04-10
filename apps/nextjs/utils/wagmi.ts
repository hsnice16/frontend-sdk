import { configureChains, createConfig } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { APP_CHAINS } from "constants/chains/chains";
import { APP_NAME } from "constants/chains/misc";

const EXAMPLE_PROJECT_ID = "21fef48091f12692cad574a6f7753643";

export const getWagmiConfig = () => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    APP_CHAINS,
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY ?? "" })],
    {
      batch: { multicall: true },
      retryCount: 5,
      pollingInterval: 2_000,
      stallTimeout: 2_000,
    }
  );

  const { connectors } = getDefaultWallets({
    appName: APP_NAME,
    chains,
    projectId: EXAMPLE_PROJECT_ID,
  });

  return {
    wagmiConfig: createConfig({
      autoConnect: true,
      connectors,
      publicClient,
      webSocketPublicClient,
    }),
    chains,
    initialChain: chains[0],
  };
};
