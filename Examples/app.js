const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** App **/

// Return a list of users who installed your app
Settle.App.Users()
.then((result) => {
  console.log(result)
})
