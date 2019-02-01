require('dotenv').config()
const Runner = require('./runner')

var api = process.env.SCOPE_ENV === "development" ? "http://localhost:3005" : "https://jsapi.settle.finance";

module.exports = {
    GetWatchlists: function (params = {}){
        return Runner(api, '/api/public/Watchlist/GetWatchlists', params)
    },
    GetWatchlistTokens: function (params = {}){
        return Runner(api, '/api/public/Watchlist/WatchlistTokens', params)
    }
}