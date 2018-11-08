require('dotenv').config()
const Runner = require('./runner')

var api = "https://dbapi.settle.finance";

var PriceFeed = {
  Ticker: function (params = {}){
    return Runner(api, '/api/public/ticker', params)
  },
  PriceHistory: function (params = {}){
    return Runner(api, '/api/public/price-history', params)
  },
  Info: function (params = {}){
    return Runner(api, '/api/public/info', params)
  }
}

module.exports = PriceFeed;
