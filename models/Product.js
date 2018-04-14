const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  rating: Number,
  status: { type: String, enum: ['AVAILABLE', 'UNAVAILABLE', 'LOW'] },
  image: {
    small: String,
    medium: String,
    large: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
