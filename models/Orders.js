let mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  quantity: Number,
  price: Number,
  item: [],
  order_number: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema)
