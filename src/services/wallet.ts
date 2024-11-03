export const sendWalletAddress = async (address: string) => {
  try {
    const response = await fetch('YOUR_BACKEND_URL/wallet/connect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
    return await response.json()
  } catch (error) {
    console.error('API error:', error)
    throw error
  }
}
