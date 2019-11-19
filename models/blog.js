const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Blog', blogSchema)