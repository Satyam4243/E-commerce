const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    brand: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    catName: {
      type: String,
      default: "",
    },

    catId: {
      type: String,
      default: "",
    },

    SubCatId: {
      type: String,
      default: "",
    },

    SubCat: {
      type: String,
      default: "",
    },

    // countInStock: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },

    // rating: {
    //   type: Number,
    //   default: 0,
    // },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    discount: {
      type: Number,
      default: 0,
      required: true,
    },

    productRam: [
      {
        type: String,
        default: null,
      },
    ],

    size: [
      {
        type: String,
        default: null,
      },
    ],

    productWeight: [
      {
        type: String,
        default: null,
      },
    ],

    location: [
      {
        type: String,
        default: "All",
      },
    ],

    dateCreated: [
      {
        type: Date,
        default: Date.now,
      },
    ],
  },
  { timestamps: true },
);
productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Product", productSchema);
