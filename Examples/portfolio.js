const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/

/**

Portfolio data requires the user to install your app and opt in to provide data to you.
If a user didnt install your app, the request will not work.

**/


/** Portfolio **/

var user_id = '1736-4642-5635';

// Return a summary of a users portfolio
Settle.Portfolio.Summary({user_id})
.then((result) => {
  console.log('summary')
})

// Return a users holdings and total portfolio value
Settle.Portfolio.Holdings({user_id})
.then((result) => {
  console.log('holdings')
})

// Return a users holdings with a list of trades for each asset
Settle.Portfolio.HoldingsWithTrades({user_id})
.then((result) => {
  console.log('holdings with trades')
})

// Return a users trades
Settle.Portfolio.Trades({user_id})
.then((result) => {
  console.log('trades')
})

// Return a users exchanges
Settle.Portfolio.Exchanges({user_id})
.then((result) => {
  console.log('exchanges')
})

// Return a users 30 day balance history (for graphing on a chart)
Settle.Portfolio.BalanceHistory({user_id})
.then((result) => {
  console.log('balance history')
})
