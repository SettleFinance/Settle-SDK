require('dotenv').config()
const Runner = require('./runner')

var api = "http://settlejsapi-staging.us-west-1.elasticbeanstalk.com";

var App = {
  Users: function (params = {}){
    return new Promise(async (resolve, reject) => {
      Runner(api, '/api/app/Users', params)
      .then((result)=>{
        resolve(result)
      })
    })
  }
}

module.exports = App;
