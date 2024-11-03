import { useEffect } from 'react'
import { useAccount } from 'wagmi'

export const useWalletConnection = () => {
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (isConnected) {
      console.log('Wallet Connected:', address)
    }
  }, [isConnected, address])

  return { isConnected, address }
}