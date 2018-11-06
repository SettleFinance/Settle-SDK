const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

Portfolio data requires the user to install your app and opt in to provide data to you.
If a user didnt install your app, the request will not work.
**/


/** Price Feed **/

Settle.ticker()
.then((result) => {
  console.log(result)
})

// Get a ticker, bitcoin
Settle.run(process.env.SETTLE_DBAPI, '/api/public/ticker', {id: '1'})
.then((result) => {
  console.log('Ticker')
})

// Get price history, bitcoin
Settle.run(process.env.SETTLE_DBAPI, '/api/public/price-history', {id: '1', resolution: 'minutes'})
.then((result) => {
  console.log('Price history')
})

// Get token info, bitcoin
Settle.run(process.env.SETTLE_DBAPI, '/api/public/info', {id: '1'})
.then((result) => {
  console.log('Info')
})
