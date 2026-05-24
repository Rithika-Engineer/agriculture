const mongoose = require("mongoose");

const marketSchema = new mongoose.Schema(
  {
    crop: String,
    district: String,
    min: Number,
    max: Number,
    trend: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Market", marketSchema, "markets");