const mongoose = require("mongoose");

const profitSchema = new mongoose.Schema(
  {
    crop: String,
    landSize: Number,
    seedCost: Number,
    fertilizerCost: Number,
    laborCost: Number,
    waterCost: Number,
    yieldKg: Number,
    pricePerKg: Number,
    totalCost: Number,
    revenue: Number,
    profit: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profit", profitSchema, "profits");