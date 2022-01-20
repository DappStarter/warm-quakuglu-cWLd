require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot blanket radar punch provide hockey praise army giant'; 
let testAccounts = [
"0x540877a2ff1b1c436a835979a4803ffa533eb5639a59f6586c194f43fd1b30a5",
"0x6aee2171495bdf6ea7d15bae645c1dca6dca1e8f638fc40da38fbbacf7379ab8",
"0x231a800882d3980d6119a528c31590b83965aa38ff5cc8b1b078179ec8c4d9c9",
"0x9378b701e0ecd5bb0a403798c27621912d6f9cccedc12ca6d4143d7ecd34b145",
"0x94971b9819f494fa42b7f0f43b241f48481270b9125e08433b1dd5f77678da21",
"0x11ed0800ee166b699668fcc9f798958fe2dca0e84ec3e5160b28e5fd28beef4a",
"0xdaad5702262cdf76719a5f582366e12bc8832884f09428d5d5a14a6fdcaef497",
"0xee7abe08368fe67e639bdbf4cfa087fe6730a990de93d7affc545ce8a69cfb10",
"0xf8bcd40ff2a9393058cccc2f6471a836bface412749626cb34f459fbcb064885",
"0x72331a151ef5ff40914f92d58f3bab88866b1a00b655a95ebd58dd8a99a11887"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

