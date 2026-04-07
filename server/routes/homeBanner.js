const express = require("express");
const router = express.Router();
const HomeBanner = require("../models/homeBanner");

// ================= GET ALL SLIDES =================
// router.get("/", async (req, res) => {
//   try {
//     const slides = await HomeBanner.find().sort({ createdAt: -1 });
//     // const slides = await HomeBanner.find().Sort({ order: 1 });

//     res.status(200).json({
//       success: true,
//       slides,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });
// router.get("/", async (req, res) => {
//   try {
//     const slides = await HomeBanner.find().sort({ order: 1 });

//     res.status(200).json({
//       success: true,
//       slides,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const now = new Date();

//     const slides = await HomeBanner.find().sort({ order: 1 });

//     const updatedSlides = slides.map((slide) => {
//       let autoActive = slide.isActive;

//       if (slide.startDate && slide.endDate) {
//         autoActive = now >= slide.startDate && now <= slide.endDate;
//       }

//       return {
//         ...slide._doc,
//         autoActive,
//       };
//     });

//     res.status(200).json({
//       success: true,
//       slides: updatedSlides,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const now = new Date();

    const slides = await HomeBanner.find().sort({ order: 1 });

    const updatedSlides = slides.map((slide) => {
      let autoActive = true;

      if (slide.startDate && slide.endDate) {
        const start = new Date(slide.startDate);
        const end = new Date(slide.endDate);

        autoActive = now >= start && now <= end;
      }

      return {
        ...slide._doc,
        autoActive,
      };
    });

    res.status(200).json({
      success: true,
      slides: updatedSlides,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= GET SINGLE SLIDE =================
router.get("/:id", async (req, res) => {
  try {
    const slide = await HomeBanner.findById(req.params.id);

    if (!slide) {
      return res.status(404).json({
        success: false,
        message: "Slide not found",
      });
    }

    res.status(200).json({
      success: true,
      slide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= CREATE NEW SLIDE =================
router.post("/", async (req, res) => {
  try {
    const banner = new HomeBanner({
      images: req.body.images,
      isActive: req.body.isActive !== undefined ? req.body.is.Active : true,
    });

    const savedBanner = await banner.save();

    res.status(201).json({
      success: true,
      message: "Home slide created successfully",
      banner: savedBanner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= UPDATE SLIDE =================
router.put("/:id", async (req, res) => {
  try {
    const updatedBanner = await HomeBanner.findByIdAndUpdate(
      req.params.id,
      {
        images: req.body.images,
        isActive: req.body.isActive,
      },
      { new: true },
    );

    if (!updatedBanner) {
      return res.status(404).json({
        success: false,
        message: "Slide not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Slide updated successfully",
      banner: updatedBanner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= TOGGLE ACTIVE STATUS =================
router.put("/toggle/:id", async (req, res) => {
  try {
    const slide = await HomeBanner.findById(req.params.id);

    if (!slide) {
      return res.status(404).json({
        success: false,
        message: "Slide not found",
      });
    }

    slide.isActive = !slide.isActive;
    await slide.save();

    res.status(200).json({
      success: true,
      message: "Slide status updated",
      slide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= DELETE SLIDE =================
router.delete("/:id", async (req, res) => {
  try {
    const deletedBanner = await HomeBanner.findByIdAndDelete(req.params.id);

    if (!deletedBanner) {
      return res.status(404).json({
        success: false,
        message: "Slide not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Slide deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= DELETE SINGLE IMAGE =================
router.delete("/:id/image", async (req, res) => {
  try {
    const { image } = req.body;

    const slide = await HomeBanner.findById(req.params.id);

    if (!slide) {
      return res.status(404).json({
        success: false,
        message: "Slide not found",
      });
    }

    slide.images = slide.images.filter((img) => img !== image);

    await slide.save();

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      slide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= BULK REORDER =================
router.put("/reorder", async (req, res) => {
  try {
    const { slides } = req.body;

    const bulkOps = slides.map((slide) => ({
      updateOne: {
        filter: { _id: slide._id },
        update: { order: slide.order },
      },
    }));

    await HomeBanner.bulkWrite(bulkOps);

    res.status(200).json({
      success: true,
      message: "Slides reordered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
