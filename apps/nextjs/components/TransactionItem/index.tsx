import styled from "styled-components";
import { useToken } from "@symmio-client/core/lib/hooks/useTokens";
import { CloseQuoteMessages } from "@symmio-client/core/types/trade";

import {
  TradeTransactionInfo,
  ApproveTransactionInfo,
  CancelQuoteTransactionInfo,
  AddAccountTransactionInfo,
  TransferCollateralTransactionInfo,
  MintTransactionInfo,
} from "@symmio-client/core/state/transactions/types";
import { useCollateralToken } from "@symmio-client/core/constants/tokens";
import { FALLBACK_CHAIN_ID } from "@symmio-client/core/constants/chains";
import { getTokenWithFallbackChainId } from "@symmio-client/core/utils/token";
import { TradeState } from "@symmio-client/core/types/trade";
import { TransferTab } from "@symmio-client/core/types/transfer";
import useActiveWagmi from "@symmio-client/core/lib/hooks/useActiveWagmi";

export const Summary = styled.div`
  font-size: 12px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text0};
`;

export function TradeSummary({
  info: { state, name, id },
  status,
}: {
  info: TradeTransactionInfo;
  status?: string;
}): JSX.Element {
  return (
    <Summary>
      {state === TradeState.OPEN
        ? `${name} "Open Order" ${status}`
        : `${name}-Q${id} "Close Position" ${status}`}
    </Summary>
  );
}

export function ApproveSummary({
  info: { tokenAddress },
  status,
}: {
  info: ApproveTransactionInfo;
  status?: string;
}): JSX.Element {
  const token = useToken(tokenAddress);
  return (
    <Summary>
      {`"Approve ${token?.symbol}"`} {status}
    </Summary>
  );
}

export function CancelQuoteSummary({
  info: { name, id, closeQuote },
  status,
}: {
  info: CancelQuoteTransactionInfo;
  status?: string;
}): JSX.Element {
  return (
    <Summary>
      {name}-Q{id} “{CloseQuoteMessages[closeQuote]}” {status}
    </Summary>
  );
}

export function AddAccountSummary({
  info: { name },
  status,
}: {
  info: AddAccountTransactionInfo;
  status?: string;
}): JSX.Element {
  return (
    <Summary>
      {`"Add new account [${name}]"`} {status}
    </Summary>
  );
}

export function TransferBalanceSummary({
  info: { amount, transferType },
  status,
}: {
  info: TransferCollateralTransactionInfo;
  status?: string;
}): JSX.Element {
  const { chainId } = useActiveWagmi();
  const COLLATERAL_TOKEN = useCollateralToken();
  const collateralCurrency = getTokenWithFallbackChainId(
    COLLATERAL_TOKEN,
    chainId
  );

  const statusText =
    transferType === TransferTab.WITHDRAW && status === "submitted"
      ? "successful"
      : status;
  return (
    <Summary>
      {amount} {collateralCurrency?.symbol} {transferType} {statusText}
    </Summary>
  );
}

export function MintSummary({
  info,
  status,
}: {
  info: MintTransactionInfo;
  status?: string;
}): JSX.Element {
  const COLLATERAL_TOKEN = useCollateralToken();
  const collateralSymbol = COLLATERAL_TOKEN[FALLBACK_CHAIN_ID].symbol ?? "";

  return (
    <Summary>
      &#34;Mint&#34; {info.amount} {collateralSymbol} {status}
    </Summary>
  );
}
