module.exports = (type, value) => {
  return new Promise(async (resolve, reject) => {
    try {
      var message = (value.length > 0 || Object.keys(value).length > 0) ? 'success' : 'failure';
      console.log(type, message)
      resolve(message)
    } catch(error) {
      reject(error.response ? error.response.data : error)
    }
  })
}
