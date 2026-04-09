const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const Product = require("../models/products");

// ================= ADD TO CART =================
router.post("/", async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;

    if (!productId || !userId || !quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.countInStock < quantity) {
      return res.status(400).json({
        success: false,
        message: "Not enough stock",
      });
    }

    const existingItem = await Cart.findOne({
      product: productId,
      userId,
    });

    // ================= UPDATE EXISTING =================
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;

      if (newQuantity > product.countInStock) {
        return res.status(400).json({
          success: false,
          message: "Stock limit exceeded",
        });
      }

      existingItem.quantity = newQuantity;
      existingItem.price = product.price;

      await existingItem.save();

      return res.status(200).json({
        success: true,
        message: "Cart updated successfully",
        item: existingItem, // 🔥 IMPORTANT
      });
    }

    // ================= CREATE NEW =================
    const newCartItem = new Cart({
      product: productId,
      userId,
      quantity,
      price: product.price,
    });

    await newCartItem.save();

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      item: newCartItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ================= GET USER CART =================
router.get("/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId })
      .populate("product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      cartItems,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ================= UPDATE QUANTITY =================
router.put("/:id", async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid quantity",
      });
    }

    const cartItem = await Cart.findById(req.params.id).populate("product");

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    if (quantity > cartItem.product.countInStock) {
      return res.status(400).json({
        success: false,
        message: "Stock limit exceeded",
      });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({
      success: true,
      message: "Cart updated",
      item: cartItem, // 🔥 IMPORTANT
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ================= DELETE ITEM =================
router.delete("/:id", async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// ================= CLEAR CART =================
router.delete("/clear/:userId", async (req, res) => {
  try {
    await Cart.deleteMany({ userId: req.params.userId });

    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;