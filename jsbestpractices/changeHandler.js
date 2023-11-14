var balanceManager = require("./balanceManager");

module.exports = {
  getAmount: function (coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    let coinValues = {
      p: 1,
      n: 5,
      d: 10,
      q: 25,
    };

    if (coinValues.hasOwnProperty(coinType)) {
      return coinValues[coinType];
    } else {
      throw new Error("Unrecognized coin " + coinType);
    }
  },

  convertToChange: function (amount) {
    let coins = ["q", "d", "n", "p"];
    let change = [];

    for (coin of coins) {
      let data = this.getDivider(amount, coin);
      if (data.length) {
        change = change.concat(data);
        amount = parseInt(amount % this.getAmount(coin));
      }
    }
    
    return change.reverse();
  },

  getDivider: function (amount, coin) {
    let divider = parseInt(amount / this.getAmount(coin));
    let changeCoins = [];

    if (divider >= 1) {
      for (let i = 0; i < divider; i++) {
        changeCoins.push(coin);
      }
    }

    return changeCoins;
  },
};
