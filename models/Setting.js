const mongoose = require('mongoose')

const SettingSchema = new mongoose.Schema({
  radius: { type: Number, required: true },
  proximity: { type: Number, required: true },
})

module.exports = mongoose.models.Setting || mongoose.model('Setting', SettingSchema);
