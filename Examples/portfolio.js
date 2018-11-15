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

var guid = '05c5bd17-ca24-42ac-bd97-c4d13c4c4f8a';


// Return a summary of a users portfolio
Settle.Portfolio.Summary({guid})
.then((result) => {
  console.log('summary')
})
.catch(e => console.log(e))
// Return a users holdings and total portfolio value
Settle.Portfolio.Holdings({guid})
.then((result) => {
  console.log('holdings')
})
.catch(e => console.log(e))

// Return a users holdings with a list of trades for each asset
Settle.Portfolio.HoldingsWithTrades({guid})
.then((result) => {
  console.log('holdings with trades')
})
.catch(e => console.log(e))

// Return a users trades
Settle.Portfolio.Trades({guid})
.then((result) => {
  console.log('trades')
})
.catch(e => console.log(e))

// Return a users exchanges
Settle.Portfolio.Exchanges({guid})
.then((result) => {
  console.log('exchanges')
})
.catch(e => console.log(e))

// Return a users 30 day balance history (for graphing on a chart)
Settle.Portfolio.BalanceHistory({guid})
.then((result) => {
  console.log('balance history')
})
.catch(e => console.log(e))
