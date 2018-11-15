require('dotenv').config()
const Runner = require('./runner')

var api = "https://jsapi.settle.finance";
var PriceFeed = {
  Summary: function (params = {}){
    return Runner(api, '/api/public/PortfolioTracker/Summary', params)
  },
  Holdings: function (params = {}){
    return Runner(api, '/api/public/PortfolioTracker/Holdings', params)
  },
  HoldingsWithTrades: function (params = {}){
    return Runner(api, '/api/public/PortfolioTracker/HoldingsWithTrades', params)
  },
  Trades: function (params = {}){
    return Runner(api, '/api/public/PortfolioTracker/Trades', params)
  },
  Exchanges: function (params = {}){
    return Runner(api, '/api/public/PortfolioTracker/Exchanges', params)
  },
  BalanceHistory: function (params = {}){
    return Runner(api, '/api/public/PortfolioTracker/BalanceHistory', params)
  }
}

module.exports = PriceFeed;
