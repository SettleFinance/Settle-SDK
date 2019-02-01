const Settle = require('../settle')

/**

 Generate a public and private api key at https://settle.finance/os
 Make sure your .env file reflects your keys to make authenticated requests.

 **/


/** Watchlist **/

let guid = "600c7844-a5c8-4ca1-b24b-5aa3a563cafc"
let watchlist_id = "c4d22704-7adb-42fb-bc39-24247996b7a3"


// Return a list of users watchlist
Settle.Watchlist.GetWatchlists({guid: guid})
    .then(result => console.log(result))
    .catch(e => console.log(e))

// Return a list of watchlist's tokens
Settle.Watchlist.GetWatchlistTokens({watchlist_id: watchlist_id})
    .then(result => console.log(result))
    .catch(e => console.log(e))