import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

import { DEFAULT_HEDGER } from "constants/chains/hedgers";

import { useMarket } from "@symmio/frontend-sdk/hooks/useMarkets";

export default function Trade() {
  const router = useRouter();
  const defaultMarket = useMarket(DEFAULT_HEDGER?.defaultMarketId);
  const defaultSymbol = useMemo(
    () => (defaultMarket ? defaultMarket.name : "BTCUSDT"),
    [defaultMarket]
  );

  useEffect(() => {
    router.push(`/trade/${defaultSymbol}`);
  }, [defaultSymbol, router]);

  return null;
}
