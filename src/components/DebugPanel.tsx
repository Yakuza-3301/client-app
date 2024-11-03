import { useAccount, useChainId } from 'wagmi'

export const DebugPanel = () => {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-green-400 p-4 rounded-lg">
      <p>Status: {isConnected ? '✅' : '❌'}</p>
      <p>Address: {address}</p>
      <p>Chain ID: {chainId}</p>
    </div>
  )
}