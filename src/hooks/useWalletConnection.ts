import { useAccount } from 'wagmi'
import { useEffect } from 'react'
import { sendWalletAddress } from '../services/wallet'

export const useWalletConnection = () => {
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (isConnected && address) {
      sendWalletAddress(address)
    }
  }, [isConnected, address])

  return { isConnected, address }
}
