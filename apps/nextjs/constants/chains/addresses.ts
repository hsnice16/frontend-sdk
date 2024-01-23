import { SupportedChainId } from "@symmio/frontend-sdk/constants/chains";
import { ChainType } from "@symmio/frontend-sdk/state/chains/reducer";

export const FantomChain: ChainType = {
  COLLATERAL_SYMBOL: "lzUSDC",
  COLLATERAL_DECIMALS: 6,
  COLLATERAL_ADDRESS: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf",

  DIAMOND_ADDRESS: "0x762407bEd807184F90F3eDcF2D7Ac9CB9d8901c6",
  MULTI_ACCOUNT_ADDRESS: "0x0937bC09b8D073E4F1abE85470969475f714Ca6c",
  PARTY_B_WHITELIST: "0x3eA3400D474B73941dda97d182a8aA80165f952e",

  SIGNATURE_STORE_ADDRESS: "0x6B6f6A6CCdB4Df5cc462096bEAdFd609D8e281d1",
  MULTICALL3_ADDRESS: "0x1F98415757620B543A52E61c46B32eB19261F984",
  USDC_ADDRESS: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
  WRAPPED_NATIVE_ADDRESS: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",

  ANALYTICS_SUBGRAPH_ADDRESS:
    "https://api.thegraph.com/subgraphs/name/navid-fkh/symmetrical_fantom",
  ORDER_HISTORY_SUBGRAPH_ADDRESS:
    "https://api.thegraph.com/subgraphs/name/navid-fkh/symmetrical_fantom",
};

export const BSCChain: ChainType = {
  // COLLATERAL
  COLLATERAL_SYMBOL: "USDT",
  COLLATERAL_DECIMALS: 18,
  COLLATERAL_ADDRESS: "0x55d398326f99059ff775485246999027b3197955",

  DIAMOND_ADDRESS: "0x9A9F48888600FC9c05f11E03Eab575EBB2Fc2c8f",
  MULTI_ACCOUNT_ADDRESS: "0x650a2D6C263A93cFF5EdD41f836ce832F05A1cF3",
  PARTY_B_WHITELIST: "0x9fa01a45E245015fA685F21763e60C60832Ed2D6",

  SIGNATURE_STORE_ADDRESS: "0x6EA2EffEB3F0F2582DF5aD52cbe847FA50B628B2",
  MULTICALL3_ADDRESS: "0x963Df249eD09c358A4819E39d9Cd5736c3087184",
  USDC_ADDRESS: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  WRAPPED_NATIVE_ADDRESS: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",

  ANALYTICS_SUBGRAPH_ADDRESS:
    "https://api.thegraph.com/subgraphs/name/symmiograph/symmioanalytics_bnb_8_2",
  ORDER_HISTORY_SUBGRAPH_ADDRESS:
    "https://api.studio.thegraph.com/query/62454/main_bnb_8_2/version/latest",
};

export const PolygonChain: ChainType = {
  COLLATERAL_SYMBOL: "TEST",
  COLLATERAL_DECIMALS: 18,
  COLLATERAL_ADDRESS: "0x50E88C692B137B8a51b6017026Ef414651e0d5ba",

  DIAMOND_ADDRESS: "0x976c87Cd3eB2DE462Db249cCA711E4C89154537b",
  MULTI_ACCOUNT_ADDRESS: "0x3adc81CC43d9e1636de9cbac764Afcb1F3ae6cde",
  PARTY_B_WHITELIST: "0x5044238ea045585C704dC2C6387D66d29eD56648",
  SIGNATURE_STORE_ADDRESS: "0x6B6f6A6CCdB4Df5cc462096bEAdFd609D8e281d1",

  MULTICALL3_ADDRESS: "0x1F98415757620B543A52E61c46B32eB19261F984",
  USDC_ADDRESS: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  WRAPPED_NATIVE_ADDRESS: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  ANALYTICS_SUBGRAPH_ADDRESS:
    "https://api.thegraph.com/subgraphs/name/symmiograph/symmiomain_polygon_8_2",
  ORDER_HISTORY_SUBGRAPH_ADDRESS:
    "https://api.thegraph.com/subgraphs/name/symmiograph/symmiomain_polygon_8_2",
};

export const contractInfo: { [chainId: number]: ChainType } = {
  [SupportedChainId.FANTOM]: FantomChain,
  [SupportedChainId.BSC]: BSCChain,
  [SupportedChainId.POLYGON]: PolygonChain,
};
