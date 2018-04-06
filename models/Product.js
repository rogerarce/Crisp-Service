const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  rating: Number,
  status: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Product', ProductSchema);
