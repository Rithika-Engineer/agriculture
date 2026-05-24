const express = require("express");
const router = express.Router();
const Profit = require("../models/Profit");

// SAVE PROFIT DATA
router.post("/", async (req, res) => {
  try {
    const profitData = await Profit.create(req.body);

    res.status(200).json({
      success: true,
      data: profitData,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error saving profit data",
    });
  }
});

// GET LATEST PROFIT DATA
router.get("/latest", async (req, res) => {
  try {
    const latest = await Profit.findOne().sort({
      createdAt: -1,
    });

    res.status(200).json(latest || {});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error loading data",
    });
  }
});

module.exports = router;