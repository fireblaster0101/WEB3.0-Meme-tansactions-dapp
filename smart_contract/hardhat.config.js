require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/NCCuX_YXPDkoKbft9zM_w8kQ60fAkOnI',
      accounts: ['4a03a89ad4874bbf3b0240b0ff8238092ecf941ab2e1932e9233f9fe2f020c60'],
    },
  },
};