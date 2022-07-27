const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  images: [{
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ProductImage'
  }],
  prices: [{
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ProductPrice'
  }],
  rating: {
    required: true,
    type: String
  },
  color: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Color"
  },
  category: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  collection: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Collection"
  }
})

module.exports = mongoose.model('Product', ProductSchema)