require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note shift pudding hidden entire front segment'; 
let testAccounts = [
"0x8eaa79459c01c71904f52cd45dddd8eaae6477d18a10fa3912dccdea77f24f1f",
"0x9cddceba3e36eed5c76e0e796d49fa4d2cf23fe023b81a14f9b63e259c6da404",
"0xd5c8894c9fcecf0533917d273a0037a93768d7fc95450281a380ba01eafa12b5",
"0xdbb2452bebf74b517cd948bb833228029d7d97f9234666b8ce3222fdd599e8b3",
"0xe7131346aac057fbd3097ae735609b4152f7901007f90376e0ae2087f04412e4",
"0x9ce029dd6ef007c66fb709420a8b9a35825b43ed8e85790811c8753f0a287280",
"0xab6d4536847d1324a2e4b9eb7a7a4dfd166b0f79763e073dfcb98cf62b92d421",
"0x830c148ac3af62b1517495e98dc22a84692ba57ab07424b4c111b9ecffeee28d",
"0xc0ea0fcf8444cd879261ac7e16580890ee25dfe4bc78b1bb354eeb53b2f8ef9a",
"0xe128abf81e5d70b107eb22409d3bb8e11c7f8fef2754ecee06d543b237c3806e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

