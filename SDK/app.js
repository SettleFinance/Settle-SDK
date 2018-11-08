require('dotenv').config()
const Runner = require('./runner')

var api = "http://settlejsapi-staging.us-west-1.elasticbeanstalk.com";

var App = {
  Users: function (params = {}){
    return Runner(api, '/api/app/Users', params)
  }
}

module.exports = App;
