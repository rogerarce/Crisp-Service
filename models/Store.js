let mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
  name: String,
  location: {
    address: String,
    geolocation: {
      lat: String,
      lng: String,
    },
  },
  availability: {
    opens_at: String,
    closes_at: String,
    status: String,
  },
  rating: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.models.Store || mongoose.model('Store', StoreSchema)
