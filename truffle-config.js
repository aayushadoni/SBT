require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  contracts_build_directory:"./public/contracts",
  networks: {

    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },

      goerli: {
          provider: () =>
              new HDWalletProvider({
                  mnemonic: {
                      phrase: process.env.Memonic
                  },
                  providerOrUrl: "https://goerli.infura.io/v3/" + process.env.infuraKey,
                  numberOfAddresses: 1,
                  shareNonce: true,
              }),
          network_id: '5',
      },

  },

  compilers: {
    solc: {
      version: "0.8.19",
    }
  },

};
