import { WagmiConfig } from 'wagmi'
import { config } from './config/wagmi'
import { ConnectWalletButton } from './components/ConnectWalletButton'

function App() {
  return (
    <WagmiConfig config={config}>
      <div className="min-h-screen flex items-center justify-center">
        <ConnectWalletButton />
      </div>
    </WagmiConfig>
  )
}

export default App
