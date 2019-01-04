require('dotenv').config()
const Runner = require('./runner')
const ParseQuery = require('../Utility/ParseQuery')

var api = process.env.SCOPE_ENV === "development" ? "http://localhost:3005" : "https://data.settle.finance";

function Data(table) {
  var This = this

  This.table = table
  This.dbquery = []

  This.Delete = () => {
    This.dbquery.push(['delete'])
    return This
  }

  This.Drop = () => {
    This.dbquery.push(['drop'])
    return This
  }

  This.Filter = (value) => {
    This.dbquery.push(['filter', value])
    return This
  }

  This.Insert = (value) => {
    This.dbquery.push(['insert', value])
    return This
  }

  This.Limit = (value) => {
    This.dbquery.push(['limit', value])
    return This
  }

  This.OrderBy = (value) => {
    This.dbquery.push(['orderBy', [value.index, value.direction]])
    return This
  }

  This.Pluck = function() {
    This.dbquery.push(['pluck', [...arguments]])
    return This
  }

  This.Skip = (value) => {
    This.dbquery.push(['skip', value])
    return This
  }

  This.Update = (value) => {
    This.dbquery.push(['update', value])
    return This
  }

  This.Run = () => {
    try {
      ParseQuery(This.dbquery)
    } catch(error) {
      throw error
    }

    return Runner(api, '/api/public/Data/Query', {
      table: This.table,
      dbquery: This.dbquery
    })
  }
  return This
}

module.exports = Data;