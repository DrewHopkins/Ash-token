var AshToken = artifacts.require("./AshToken.sol");
var AshTokenSale = artifacts.require("./AshTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(AshToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(AshTokenSale, AshToken.address, tokenPrice);
  });
};
