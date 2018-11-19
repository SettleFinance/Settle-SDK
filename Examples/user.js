const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** User **/

var guid = "05c5bd17-ca24-42ac-bd97-c4d13c4c4f8a"

Settle.User.GuidToUsername({guid})
.then((result) => {
  console.log(result)
})
.catch(e => console.log(e))
