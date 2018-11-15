require('dotenv').config()
const Runner = require('./runner')

var api = "https://jsapi.settle.finance";

var App = {
  Users: function (params = {}){
    return Runner(api, '/api/app/Users', params)
  }
}

module.exports = App;
