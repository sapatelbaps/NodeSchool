var balanceManager = require("./balanceManager");

const coinValues = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25,
};

module.exports = {
  getAmount: function (coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter

    if (!coinValues.hasOwnProperty(coinType)) {
      throw new Error("Unrecognized coin " + coinType);
    }
    return coinValues[coinType];
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

    console.log(change);

    return change;
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