import { parseEther } from 'viem'

export const useWalletTest = () => {
  const testConnection = async () => {
    const testAmount = '0.0001'
    const testAddress = '0x...'

    if (typeof window.ethereum !== 'undefined') {
      try {
        const tx = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            to: testAddress,
            value: parseEther(testAmount).toString()
          }]
        })
        return tx
      } catch (error) {
        console.error('Test failed:', error)
        return null
      }
    }
  }

  return { testConnection }
}