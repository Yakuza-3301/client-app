import { useState } from 'react'
import { useConnect } from 'wagmi'
import { getWalletConnector } from '../utils/walletConnectors'

export const useWallet = () => {
  const [isConnecting, setIsConnecting] = useState(false)
  const { connect } = useConnect()

  const handleConnect = async (walletId: string) => {
    if (isConnecting) return
    
    setIsConnecting(true)
    try {
      const connector = getWalletConnector(walletId)
      await connect({ connector })
    } finally {
      setIsConnecting(false)
    }
  }

  return {
    connect: handleConnect,
    isConnecting
  }
}