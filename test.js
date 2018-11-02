const Settle = require('./settle')


Settle(process.env.SETTLE_DBAPI, '/api/public/erc20', {id: '1'})
.then((result) => {
  console.log(result)
})
