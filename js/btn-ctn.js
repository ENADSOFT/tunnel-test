const button = document.getElementById('connectWalletButton');
let web3; // This will hold the web3 instance

button.addEventListener('click', () => {
    if (window.ethereum) { // Check if MetaMask is installed
        web3 = new Web3(window.ethereum);
        try {
            window.ethereum.enable().then(function (accounts) {
                // Wallet is connected
                console.log('Connected to account: ', accounts[0]);
                // You can now interact with the blockchain
            });
        } catch (e) {
            console.error('User denied account access', e);
        }
    } else if (window.web3) { // Legacy dapp browsers...
        web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
        web3.eth.getAccounts().then(console.log);
    } else {
        // Non-dapp browsers...
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});