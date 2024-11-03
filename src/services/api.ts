export const sendWalletAddress = async (address: string) => {
  console.log('Sending wallet address to backend:', address)
  
  try {
    const response = await fetch('http://localhost:3000/api/wallet/connect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
    
    const data = await response.json()
    console.log('Backend Response:', data)
    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
