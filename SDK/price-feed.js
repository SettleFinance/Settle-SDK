require('dotenv').config()
const Runner = require('./runner')

var api = "https://dbapi.settle.finance";

var PriceFeed = {
  Ticker: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/ticker', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  PriceHistory: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/price-history', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  Info: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/info', params)
      .then((result)=>{
        resolve(result)
      })
    })
  }
}

module.exports = PriceFeed;
