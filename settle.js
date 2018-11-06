require('dotenv').config()
const axios = require('axios')
const crypto = require('crypto')
const PriceFeed = require('./SDK/price-feed')
const Portfolio = require('./SDK/portfolio')

const AuthSecurity = require('./Security/AuthSecurity')

var Settle = {
  exchangeTokenForGuid: function ExchangeTokenForGuid(token) {
    return AuthSecurity.GetGuidFromIdentityProof(token);
  },
  PriceFeed: PriceFeed,
  Portfolio: Portfolio
}

module.exports = Settle;
