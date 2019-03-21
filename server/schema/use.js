var mongoose = require('../config/db')()
mongoose.Promise = global.Promise
var Schema = mongoose.Schema
var UserSchema = new Schema({
  id: {
    type: String,
    index: true
  },
  userName: {
    type: String,
    unique: true,
    trim: true,
    require: true,
    index: true
  },
  password: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date
  }
}, {versionKey: false})

UserSchema.set('autoIndex', false);

UserSchema.pre('save', function (next) {
  var currentDate = new Date()
  this.updated_at = currentDate
  next()
})

module.exports = mongoose.module('User', UserSchema)
