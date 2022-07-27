const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const ProductPriceSchema = new mongoose.Schema({
  price: {
    required: true,
    type: Schema.Types.Number
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  size: {
    type: Schema.Types.ObjectId,
    ref: 'Size'
  }
})

module.exports = mongoose.model('ProductPrice', ProductPriceSchema)