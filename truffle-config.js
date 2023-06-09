require('babel-register');
require('babel-polyfill');
require('dotenv').config();

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const mnemonic = ``

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // testnet: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
    //   network_id: 97,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
    // bsc: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
    //   network_id: 56,
    //   confirmations: 10,
    //   timeoutBlocks: 200, 
    //   skipDryRun: true
    // },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',

  compilers: {
    solc: {
      version: "0.6.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
