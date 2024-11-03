import { createConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { http } from 'viem'

export const config = createConfig({
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http()
  }
})

export default config