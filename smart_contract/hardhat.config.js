// https://eth-ropsten.alchemyapi.io/v2/bqELe_iYniGcwL-ccOoNIZveoBRHC4Wu

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bqELe_iYniGcwL-ccOoNIZveoBRHC4Wu',
      accounts: [ '516968d93f5e44d9f1e38012a8936b6f67a1fd645d4e9c1cdcce0b479ab11b80' ]
    }
  }
}