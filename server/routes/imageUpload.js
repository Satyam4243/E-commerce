const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage: storage });

// ================= IMAGE UPLOAD =================
router.post("/", upload.array("images", 10), (req, res) => {
  try {
    const images = req.files.map((file) => file.filename);

    res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/single", upload.single("image"), (req, res) => {
  try {
    res.status(200).json({
      success: true,
      image: req.file.filename,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
