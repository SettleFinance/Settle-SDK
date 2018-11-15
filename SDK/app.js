require('dotenv').config()
const Runner = require('./runner')

var api = process.env.SCOPE_ENV === "development" ? "http://localhost:3005" : "https://jsapi.settle.finance";

var App = {
  Users: function (params = {}){
    return Runner(api, '/api/app/Users', params)
  },
  SendNotification: function (params = {}) {
    return Runner(api, '/api/app/SendNotification', params)
  }
}

module.exports = App;
