const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

Portfolio data requires the user to install your app and opt in to provide data to you.
If a user didnt install your app, the request will not work.
**/


/** Portfolio **/

var user_id = '1736-4642-5635';

// Return a summary of a users portfolio
Settle.run(process.env.SETTLE_JSAPI, '/api/public/PortfolioTracker/Summary', { user_id })
.then((result) => {
  console.log('Summary')
})
.catch((reason)=>{
  console.log(reason)
})


// Return a users holdings and total portfolio value
Settle.run(process.env.SETTLE_JSAPI, '/api/public/PortfolioTracker/Holdings', { user_id })
.then((result) => {
  console.log('Holdings')
})
.catch((reason)=>{
  console.log(reason)
})


// Return a users holdings with a list of trades for each asset
Settle.run(process.env.SETTLE_JSAPI, '/api/public/PortfolioTracker/HoldingsWithTrades', { user_id })
.then((result) => {
  console.log('HoldingsWithTrades')
})
.catch((reason)=>{
  console.log(reason)
})

// Return a users trades
Settle.run(process.env.SETTLE_JSAPI, '/api/public/PortfolioTracker/Trades', { user_id })
.then((result) => {
  console.log('Trades')
})
.catch((reason)=>{
  console.log(reason)
})

// Return a users exchanges
Settle.run(process.env.SETTLE_JSAPI, '/api/public/PortfolioTracker/Exchanges', { user_id })
.then((result) => {
  console.log('Exchanges')
})
.catch((reason)=>{
  console.log(reason)
})

// Return a users 30 day balance history (for graphing on a chart)
Settle.run(process.env.SETTLE_JSAPI, '/api/public/PortfolioTracker/BalanceHistory', { user_id })
.then((result) => {
  console.log('BalanceHistory')
})
.catch((reason)=>{
  console.log(reason)
})
