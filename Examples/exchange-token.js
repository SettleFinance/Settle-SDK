const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** Exchange Token **/

// The token is passed as a get param (?user_id) into your app, along with the app mode (?mode)
var token = ``;

// Convert a users token to a GUID to make requests for their data
Settle.exchangeTokenForGuid(token)
.then((result) => {
  console.log(result)
})
