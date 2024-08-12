let mnemo = "";
let wallets = [];


document.getElementById('mnemo').addEventListener('click', () => {

    mnemo = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
    document.getElementById('mLoad').textContent = mnemo;
});

document.getElementById("generateKeypair").addEventListener("click", function() {

    if(mnemo == ""){
        alert("Generate mnemo first");
    }else{

    // Generate a new keypair using Solana web3.js
    const keypair = solanaWeb3.Keypair.generate();

    // Extract the public and private keys
    const publicKey = keypair.publicKey.toString();
    const secretKey = keypair.secretKey;

    wallets.push(publicKey);

    // // Convert the message "hello world" to a Uint8Array
    // const message = new TextEncoder().encode("hello world");

    // // Sign the message with the secret key using tweetnacl
    // const signature = nacl.sign.detached(message, secretKey);

    // // Verify the signature using tweetnacl
    // const isValid = nacl.sign.detached.verify(
    //     message,
    //     signature,
    //     keypair.publicKey.toBytes()
    // );

    displayWallets();
}});


function displayWallets() {
    const walletList = document.getElementById('walletList');
    walletList.innerHTML = '';
    wallets.forEach((wallet, index) => {
        const walletInfo = document.createElement('li');
        walletInfo.textContent = `Wallet ${index + 1}: ${wallet}`;
        walletList.appendChild(walletInfo);
    });
}








