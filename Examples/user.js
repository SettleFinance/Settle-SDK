const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** User **/

var guid = {guid: "881e3777-a9d6-4e8c-a85f-b0d8d6fb0bde"}

Settle.User.GuidToUsername(guid)
.then((result) => {
  console.log(result)
})