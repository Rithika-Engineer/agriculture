const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch("PASTE_YOUR_REQUEST_URL_HERE", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "india-mandi-price-api.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({
        message: `RapidAPI request failed with status ${response.status}`,
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log("RapidAPI error:", error);
    res.status(500).json({ message: "API Error" });
  }
});

module.exports = router;