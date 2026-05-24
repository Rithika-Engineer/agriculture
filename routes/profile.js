const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Save profile
router.post("/", async (req, res) => {
  try {
    const { farmerName, village, land, crop, phone } = req.body;

    const user = await User.create({
      farmerName,
      village,
      land,
      crop,
      phone,
    });

    res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      user,
    });
  } catch (error) {
    console.log("Save error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Get latest profile
router.get("/latest", async (req, res) => {
  try {
    const user = await User.findOne().sort({ createdAt: -1 });

    if (!user) {
      return res.status(200).json({});
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Load error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;