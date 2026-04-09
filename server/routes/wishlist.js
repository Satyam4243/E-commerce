const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");

// ================= ADD TO WISHLIST =================
router.post("/", async (req, res) => {
  try {
    const { productId, userId } = req.body;

    const exists = await Wishlist.findOne({ productId, userId });

    if (exists) {
      return res.status(200).json({
        success: true,
        message: "Already in wishlist",
      });
    }

    const item = new Wishlist({ productId, userId });
    await item.save();

    res.status(200).json({
      success: true,
      message: "Added to wishlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= REMOVE FROM WISHLIST =================
router.post("/remove", async (req, res) => {
  try {
    const { productId, userId } = req.body;

    await Wishlist.findOneAndDelete({ productId, userId });

    res.status(200).json({
      success: true,
      message: "Removed from wishlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= GET USER WISHLIST =================
router.get("/:userId", async (req, res) => {
  try {
    const items = await Wishlist.find({ userId: req.params.userId })
      .populate("productId");

    res.status(200).json({
      success: true,
      items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;