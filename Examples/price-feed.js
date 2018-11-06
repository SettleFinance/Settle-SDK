const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

Portfolio data requires the user to install your app and opt in to provide data to you.
If a user didnt install your app, the request will not work.
**/


/** Price Feed **/

// Get a ticker, bitcoin
Settle.PriceFeed.Ticker({id: '1'})
.then((result) => {
  console.log('ticker')
})

// Get price history, bitcoin
Settle.PriceFeed.PriceHistory({id: '1', resolution: 'minutes'})
.then((result) => {
  console.log('price history')
})

// Get token info, bitcoin
Settle.PriceFeed.Info({id: '1'})
.then((result) => {
  console.log('token info')
})
