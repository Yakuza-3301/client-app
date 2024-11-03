export interface TokenAsset {
  tokenSymbol: string
  balanceUsd: string
  balance: string
  blockchain: string
}

export interface WalletBalance {
  assets: TokenAsset[]
  totalBalanceUsd: string
}
