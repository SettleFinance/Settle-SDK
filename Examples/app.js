const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** App **/

let quid = "785035bc-2b83-478f-9fa5-371b64b66e67"


// Return a list of users who installed your app
Settle.App.Users()
.then((result) => {
  console.log(result)
})

Settle.App.SendNotification({guid: guid})
.then(res => console.log(res))
.catch(e => console.log(e))


