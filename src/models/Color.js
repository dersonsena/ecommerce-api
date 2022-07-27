const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Color', ColorSchema)