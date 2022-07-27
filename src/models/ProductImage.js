const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const ProductImageSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
})

module.exports = mongoose.model('ProductImage', ProductImageSchema)