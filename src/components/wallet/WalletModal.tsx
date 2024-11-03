import { useWallet } from '../../hooks/useWallet'
import { Z_INDEX } from '../../styles/zIndex'

const WALLET_OPTIONS = [
  { id: 'metamask', name: 'MetaMask', icon: '🦊' },
  { id: 'coinbase', name: 'Coinbase', icon: '💰' },
  { id: 'trust', name: 'Trust Wallet', icon: '🛡️' },
  { id: 'walletconnect', name: 'More Wallets', icon: '🔗' }
]

export const WalletModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { connect, isConnecting } = useWallet()

  const handleConnect = async (walletId: string) => {
    try {
      await connect(walletId)
      onClose()
    } catch (error) {
      console.error('Connection failed:', error)
    }
  }

  return (
    <div 
      className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}
      style={{ zIndex: Z_INDEX.MODAL_BACKDROP }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-800 p-6 rounded-2xl w-[90%] max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Connect Wallet</h2>
        <div className="grid gap-4">
          {WALLET_OPTIONS.map(wallet => (
            <button
              key={wallet.id}
              onClick={() => handleConnect(wallet.id)}
              disabled={isConnecting}
              className="flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 rounded-xl text-white transition-all"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{wallet.icon}</span>
                {wallet.name}
              </span>
              {isConnecting ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <span>→</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}