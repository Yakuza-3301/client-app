import { AnkrProvider } from '@ankr.com/ankr.js'
import { TokenAsset, WalletBalance } from '../types/ankr'

const provider = new AnkrProvider('https://rpc.ankr.com/multichain/f14a0d7a452ee1ef51c3a8f34e1d79bb061d8a3712347f604aa5063f1881f055')

export const getWalletDetails = async (address: string): Promise<WalletBalance> => {
  const balances = await provider.getAccountBalance({
    blockchain: ['bsc', 'eth', 'polygon', 'avalanche'],
    walletAddress: address
  })

  return {
    assets: balances.assets.sort((a: TokenAsset, b: TokenAsset) => 
      Number(b.balanceUsd) - Number(a.balanceUsd)
    ),
    totalBalanceUsd: balances.totalBalanceUsd
  }
}