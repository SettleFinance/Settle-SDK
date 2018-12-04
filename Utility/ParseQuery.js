const _ = require('underscore')
const jsep = require("jsep")

function Filter(command) {
  if(!_.isString(command.value) && !_.isObject(command.value)) {
    throw command.name + ' must be an expression string or object'
  }

  if(!_.isString(command.value)) {
    return command
  }

  var operators = ['!', '&&', '||', '+', '-', '*', '/', '%', '==', '!=', '>', '>=', '<', '<=']

  var parseTree = jsep(command.value)

  ValidateTree(parseTree)

  function ValidateTree(tree) {
    _.each(tree, (value, key) => {
      if(key == 'operator' && !_.contains(operators, value)) {
        throw command.name + ' invalid operator ' + value
      } else if(_.isObject(value)) {
        ValidateTree(value)
      }
    })
  }

  return {
    ...command,
    parseTree
  }
}

function UpdateOrInsert(command) {
  if(!_.isObject(command.value) && !_.isArray(command.value)) {
    throw command.name + ' value must be an object or array of objects'
  }
  if(_.isArray(command.value)) {
    _.each(command.value, (item) => {
      if(!_.isObject(item)) {
        throw command.name + ' value must be an object or array of objects'
      }
      if("id" in item && (!_.isString(item.id) && !Number.isInteger(command.id))) {
        throw command.name + ' index must be a string or integer'
      }
    })
  } else {
    if("id" in command.value && (!_.isString(command.value.id) && !Number.isInteger(command.value.id))) {
      throw command.name + ' index must be a string or integer'
    }
  }
}

function PositiveInteger(command) {
  if(!Number.isInteger(command.value)) {
    throw command.name + ' value must be an integer'
  }
  if(command.value < 1) {
    throw command.name + ' value must be greater than 1'
  }
}

function OrderBy(command) {
  if(!_.isArray(command.value)) {
    throw command.name + ' invalid arguments'
  }
  if(!_.isString(command.index) && !Number.isInteger(command.index)) {
    throw command.name + ' index must be a string or integer'
  }
  if(command.direction != 'asc' && command.direction != 'desc') {
    throw command.name + ' direction must be either "asc" or "desc"'
  }
}

function ParseQuery(query) {
  return _.map(query, (command) => {
    command = {
      name: command[0],
      value: command[1]
    }

    switch(command.name) {
      case 'delete':
      break;
      case 'filter':
        command = Filter(command)
      break;
      case 'insert':
       UpdateOrInsert(command)
      break;
      case 'limit':
        PositiveInteger(command)
      break;
      case 'orderBy':
        command.index = command.value[0]
        command.direction = command.value[1]
        OrderBy(command)
      break;
      case 'skip':
        PositiveInteger(command)
      break;
      case 'update':
        UpdateOrInsert(command)
      break;
      default:
        throw 'invalid command ' + command.name
    }
    
    return command;
  })
}

module.exports = ParseQuery;