import { useState } from 'react'
import { useConnect } from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

export const ConnectWalletButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { connect } = useConnect()

  const handleConnect = async (connector: any) => {
    try {
      await connect({ connector })
      setIsModalOpen(false)
    } catch (error) {
      console.error('Connection error:', error)
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Connect Wallet
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleConnect(new WalletConnectConnector({
                  options: {
                    projectId: 'YOUR_PROJECT_ID'
                  }
                }))}
                className="w-full p-4 border rounded-lg hover:bg-gray-50"
              >
                WalletConnect
              </button>
              {/* Add more wallet options here */}
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
