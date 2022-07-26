const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Categories', CategoriesSchema)