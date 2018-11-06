require('dotenv').config()
const Runner = require('./runner')

var api = "http://settlejsapi-staging.us-west-1.elasticbeanstalk.com";
var PriceFeed = {
  Summary: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/PortfolioTracker/Summary', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  Holdings: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/PortfolioTracker/Holdings', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  HoldingsWithTrades: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/PortfolioTracker/HoldingsWithTrades', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  Trades: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/PortfolioTracker/Trades', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  Exchanges: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/PortfolioTracker/Exchanges', params)
      .then((result)=>{
        resolve(result)
      })
    })
  },
  BalanceHistory: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/public/PortfolioTracker/BalanceHistory', params)
      .then((result)=>{
        resolve(result)
      })
    })
  }
}

module.exports = PriceFeed;
