var mongoose = require('../config/db')()
mongoose.Promise = global.Promise
var Schema = mongoose.Schema
var CommentSchema = new Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  from: {
    type: String,
    require: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    // 评论类型 1: 普通类型 2: 转发
    type: String,
    required: true
  },
  parent_id: {
    type: String,
    required: true
  },
  like: {
    type: [String],
    default: []
  },
  unlike: {
    type: [String],
    default: []
  },
  total_like: {
    type: Number,
    default: 0
  },
  total_unlike: {
    type: Number,
    default: 0
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
  },
  userInfo: {
    type: Object
  }
}, {versionKey: false})

CommentSchema.set('autoIndex', false)

CommentSchema.pre('save', function (next) {
  var currentDate = new Date()
  this.updated_at = currentDate
  next()
})

module.exports = mongoose.module('User', CommentSchema)
