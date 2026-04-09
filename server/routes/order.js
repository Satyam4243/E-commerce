const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const Order = require("../models/order");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// ================= CREATE PAYMENT =================
router.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // paisa
      currency: "INR",
      receipt: "order_rcptid_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ================= SAVE ORDER =================
router.post("/save", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    res.json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;