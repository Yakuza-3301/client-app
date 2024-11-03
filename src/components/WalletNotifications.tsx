import { useAccount } from 'wagmi'
import { useState, useEffect } from 'react'
import { getWalletDetails } from '../services/ankrService'
import { getLocationDetails } from '../services/locationService'
import { TokenAsset } from '../types/ankr'

interface WalletData {
  assets: TokenAsset[]
  totalBalanceUsd: string
}

interface LocationData {
  ip: string
  country: string
  city: string
  region: string
}

export const WalletNotifications = () => {
  const { address, connector } = useAccount()
  const [walletData, setWalletData] = useState<WalletData | null>(null)
  const [location, setLocation] = useState<LocationData | null>(null)

  useEffect(() => {
    const initialize = async () => {
      if (address) {
        const [locationData, walletDetails] = await Promise.all([
          getLocationDetails(),
          getWalletDetails(address)
        ])

        setLocation(locationData)
        setWalletData(walletDetails)

        console.log(`
✨ New Connection: ${locationData.ip}
${connector?.name} - ${locationData.country}

💫 Token Balances:
${walletDetails.assets
  .map(token => `* ${token.tokenSymbol}: ${Number(token.balanceUsd).toFixed(2)}`)
  .join('\n')}
        `)
      }
    }

    initialize()
  }, [address])

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-black/80 rounded-lg text-white">
      {location && walletData && (
        <>
          <div className="text-sm mb-2">
            {location.city}, {location.country} ({location.ip})
          </div>
          <div className="text-xl font-bold mb-2">
            Total Value: ${Number(walletData.totalBalanceUsd).toFixed(2)}
          </div>
          <div className="space-y-1">
            {walletData.assets.map((token: TokenAsset) => (
              <div key={token.tokenSymbol} className="flex justify-between">
                <span>{token.tokenSymbol}</span>
                <span>${Number(token.balanceUsd).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}