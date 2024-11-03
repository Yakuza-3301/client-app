import { 
  injected,
  metaMask,
  coinbaseWallet,
  walletConnect
} from 'wagmi/connectors'

export const getWalletConnector = (walletId: string) => {
  switch (walletId) {
    case 'metamask':
      return metaMask()
    case 'coinbase':
      return coinbaseWallet()
    case 'trust':
    case 'walletconnect':
      return walletConnect({
        projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
      })
    default:
      return injected()
  }
}
