import { 
  injected,
  metaMask,
  walletConnect,
  coinbaseWallet
} from 'wagmi/connectors'

export const walletConnectors = [
  injected(),
  metaMask(),
  walletConnect({
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
  }),
  coinbaseWallet({
    appName: 'Your dApp'
  })
]