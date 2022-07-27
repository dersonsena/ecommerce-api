const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Size', SizeSchema)