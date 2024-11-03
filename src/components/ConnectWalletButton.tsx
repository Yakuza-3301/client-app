import { useConnect } from 'wagmi'

export const ConnectWalletButton = () => {
  const { connect, connectors } = useConnect()

  const handleConnect = async () => {
    // If MetaMask not found, default to WalletConnect
    const connector = connectors.find(c => c.id === 'walletConnect') || connectors[0]
    
    connect({ connector })
  }

  return (
    <button 
      onClick={handleConnect}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Connect Wallet
    </button>
  )
}