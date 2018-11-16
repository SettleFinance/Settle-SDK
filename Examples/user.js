const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** App **/

var guid = {guid: "881e3777-a9d6-4e8c-a85f-b0d8d6fb0bde"}

// console.log(process.env.SETTLE_API_KEY)

Settle.User.GuidToUsername(guid)
.then((result) => {
  console.log(result)
})