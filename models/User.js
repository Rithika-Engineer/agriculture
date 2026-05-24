const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  farmerName: String,
  village: String,
  land: String,
  crop: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema,"farmersuser");