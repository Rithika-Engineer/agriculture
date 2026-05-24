const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    titleEn: String,
    titleTa: String,
    icon: String,
    descriptionEn: String,
    descriptionTa: String,
    applyEn: String,
    applyTa: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema, "jobs");