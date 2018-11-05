const Settle = require('../settle')
const Tester = require('./tester')
/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** App **/


// Return a list of users who installed your app
Settle(process.env.SETTLE_JSAPI, '/api/app/Users', { })
.then((result) => {
  console.log(result)
  console.log('Users')
})
.catch((reason)=>{
  console.log(reason)
})
