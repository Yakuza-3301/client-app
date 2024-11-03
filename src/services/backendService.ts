export const backendService = {
  async registerWallet(address: string, chainId: number) {
    const response = await fetch('/api/wallet/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, chainId })
    })
    
    if (!response.ok) {
      throw new Error('Wallet registration failed')
    }
    
    return response.json()
  },

  async verifyConnection(address: string) {
    const response = await fetch(`/api/wallet/verify/${address}`)
    return response.json()
  }
}
