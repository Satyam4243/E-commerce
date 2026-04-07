const mongoose = require("mongoose");

const homeBannerSchema = new mongoose.Schema(
  {
    images: [
      {
        type: String,
        required: true,
      },
    ],

    order: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },


  },
  { timestamps: true }
);

// Virtual ID
homeBannerSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

homeBannerSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("HomeBanner", homeBannerSchema);