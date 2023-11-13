// Demonstrate separation of concerns principle in javascript and use functions as per domain from different files.
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  canAfford: function (amount){
    return balanceManager.canAfford(amount);
  },

  increaseBalance(amount){
    return balanceManager.increaseBalance(amount);
  },

  getBalance(){
    return balanceManager.getBalance();
  },

  decreaseBalance(amount){
    balanceManager.decreaseBalance(amount);
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
