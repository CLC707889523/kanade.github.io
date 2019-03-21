var mongoose = require('../config/db')()
mongoose.Promise = global.Promise
var Schema = mongoose.Schema
var TagSchema = new Schema({
  id: {
    type: String,
    index: true
  },
  name: {
    type: String,
    unique: true,
    trim: true,
    require: true,
    index: true
  },
  // 权重
  key: {
    type: Number,
    default: 1
  },
  status: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date
  }
}, {versionKey: false})

TagSchema.set('autoIndex', false)

TagSchema.pre('save', function (next) {
  var currentDate = new Date()
  this.updated_at = currentDate
  next()
})

module.exports = mongoose.module('User', TagSchema)
