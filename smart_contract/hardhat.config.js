// https://eth-ropsten.alchemyapi.io/v2/bqELe_iYniGcwL-ccOoNIZveoBRHC4Wu

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bqELe_iYniGcwL-ccOoNIZveoBRHC4Wu',
    }
  }
}