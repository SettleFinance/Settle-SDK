const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** App **/

let guid = "05c5bd17-ca24-42ac-bd97-c4d13c4c4f8a"


// Return a list of users who installed your app
Settle.App.Users()
.then((result) => {
  console.log(result)
})

Settle.App.SendNotification({guid: guid})
.then(res => console.log(res))
.catch(e => console.log(e))
