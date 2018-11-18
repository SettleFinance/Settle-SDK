/**
 * @author arman
 * @since 11/19/18
 *
 */
'use strict';

require('dotenv').config();
const Runner = require('./runner');
const $host = process.env.SCOPE_ENV === 'development' ? 'http://localhost:3006' : 'https://chat.settle.finance';

module.exports = {
  
};
