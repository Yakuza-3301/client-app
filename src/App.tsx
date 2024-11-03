import { WagmiConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import config from './config/wagmi'
import { Layout } from './components/layout/Layout'
import { WalletButton } from './components/wallet/WalletButton'
import { WalletNotifications } from './components/wallet/WalletNotifications'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <Layout>
          <WalletButton />
          <WalletNotifications />
        </Layout>
      </WagmiConfig>
    </QueryClientProvider>
  )
}

export default App