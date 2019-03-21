var mongoose = require('mongoose')

module.exports = function () {
  var db = mongoose.connect('mongodb://localhost:27017/kanade', {server: {poolSize: 20}}, function (err) {
    if (!err) {
      console.log('connect kanade success!')
    } else {
      console.log('connect kanade faild', err)
    }
  })
  return db
}
