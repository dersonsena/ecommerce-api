const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Collection', CollectionSchema)