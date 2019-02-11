const Settle = require('../settle')

/**

 Generate a public and private api key at https://settle.finance/os
 Make sure your .env file reflects your keys to make authenticated requests.

 **/


/** Watchlist **/

let guid = "c763f61b-5a4d-42f5-9d26-ef04f420f556"
let watchlist_id = "8addc02f-9080-4082-bead-7e7c72617149"


// Return a list of users watchlist
Settle.Watchlist.GetWatchlists({guid: guid})
    .then(result => console.log(result))
    .catch(e => console.log(e))

// Return a list of watchlist's tokens
Settle.Watchlist.GetWatchlistTokens({watchlist_id: watchlist_id})
    .then(result => console.log(result))
    .catch(e => console.log(e))
