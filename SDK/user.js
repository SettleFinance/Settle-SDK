require('dotenv').config()
const Runner = require('./runner')

var api = process.env.SCOPE_ENV === "development" ? "http://localhost:3005" : "https://jsapi.settle.finance";

var User = {
  GuidToUsername: function (params = {}){
    return Runner(api, '/api/app/GuidToUsername', params)
  }
}

module.exports = User;
