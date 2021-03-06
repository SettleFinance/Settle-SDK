require('dotenv').config()
const axios = require('axios')
const crypto = require('crypto')
const PriceFeed = require('./SDK/price-feed')
const Portfolio = require('./SDK/portfolio')
const App = require('./SDK/app')
const User = require('./SDK/user')
const Chat = require('./SDK/chat')
const Data = require('./SDK/data')
const Watchlist = require('./SDK/watchlist')

const AuthSecurity = require('./Security/AuthSecurity');

var Settle = {
  exchangeTokenForGuid: function ExchangeTokenForGuid(token) {
    return AuthSecurity.GetGuidFromIdentityProof(token);
  },
  PriceFeed,
  Portfolio,
  App,
  User,
  Chat,
  Data,
  Watchlist
};

module.exports = Settle;
