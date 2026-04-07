// const { Category } = require("../models/category");
// const { imageUpload: ImageUpload } = require("../models/imageUpload");
// const express = require("express");
// const router = express.Router();
// const slugify = require("slugify");
// const multer = require("multer");
// const fs = require("fs");
// const { error } = require("console");

// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.cloudinary_Config_cloud_name,
//   api_key: process.env.cloudinary_Config_api_key,
//   api_secret: process.env.cloudinary_Config_api_secret,
//   secure: true,
// });
// console.log({
//   cloud_name: process.env.cloudinary_Config_cloud_Name,
//   api_key: process.env.cloudinary_Config_api_key,
//   api_secret: process.env.cloudinary_Config_api_secret,
//   secure: true,
// });

// var imagesArr = [];
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// // router.post(
// //   "/upload",
// //   upload.array("images", 10),
// //   async (req, res, next) => {
// //     try {
// //       // ✅ Validate files
// //       if (!req.files || req.files.length === 0) {
// //         return res.status(400).json({
// //           success: false,
// //           message: "No images uploaded",
// //         });
// //       }

// //       const imagesArr = [];

// //       for (const file of req.files) {
// //         const imageDoc = new ImageUpload({
// //           images: file.filename, // or file.path if using Cloudinary
// //         });

// //         const savedImage = await imageDoc.save();
// //         imagesArr.push(savedImage);
// //       }

// //       return res.status(201).json({
// //         success: true,
// //         data: imagesArr,
// //         message: "Images uploaded successfully",
// //       });
// //     } catch (error) {
// //       console.error(error);
// //       next(error);
// //     }
// //   }
// // );

// router.post("/upload", upload.array("images", 10), async (req, res) => {
//   try {
//     const images = req.files.map((file) => file.filename);

//     res.status(200).json({
//       success: true,
//       images: images, // ✅ RETURN FILENAMES
//     });
//   } catch (err) {
//     res.status(500).json({ success: false });
//   }
// });

// // router.post("/create", async (req, res) => {
// //   try {
// //     const { name, images, color, parentId } = req.body;

// //     if (!name) {
// //       return res.status(400).json({
// //         success: false,
// //         msg: "Category name is required",
// //       });
// //     }

// //     const category = new Category({
// //       name,
// //       slug: slugify(name),
// //       images: Array.isArray(images) ? images : [],
// //       color: color || "",
// //       parentId: parentId || null,
// //     });

// //     const savedCategory = await category.save();

// //     res.status(201).json({
// //       success: true,
// //       category: savedCategory,
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({
// //       success: false,
// //       msg: "Failed to create category",
// //     });
// //   }
// // });

// router.post("/create", async (req, res) =>{
//   let catObj = {};

//   if (imagesArr.length > 0){
//     catObj = {
//       name: req.body.name,
//       images: imagesArr,
//       color: req.body.color,
//       slug: req.body.name,
//     };
//   } else {
//     catObj = {
//       name: req.body.name,
//       slug: req.body.name,
//     };
//   }

//   if (req.body.parentId) {
//     catObj.parentId = req.body.parentId;
//   }
//   let category = new Category(catObj);

//   if (!category) {
//     res.status(500).json({
//       error: err,
//       success: false,
//     });
//   }
//   category = await category.save();
//   imagesArr = [];

//   res.status(201).json(category);
// });

// const createCategories = (categories, parentId = null) => {
//   const categoryList = [];
//   let category;
//   if (parentId == null) {
//     category = categories.filter((cat) => cat.parentId == undefined);
//   } else {
//     category = categories.filter((cat) => cat.parentId == parentId);
//   }

//   for (let cat of category) {
//     categoryList.push({
//       id: cat._id,
//       name: cat.name,
//       images: cat.images,
//       color: cat.color,
//       slug: cat.slug,
//       children: createCategories(categories, cat._id),
//     });
//   }

//   return categoryList;
// };

// router.get("/", async (req, res) => {
//   try {
//     const categoryList = await Category.find();

//     if (!categoryList) {
//       res.status(500).json({ success: false });
//     }

//     if (categoryList) {
//       const categoryData = createCategories(categoryList);
//       return res.status(200).json({
//         categoryList: categoryData,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false });
//     // console.log(error);
//   }
// });

// router.get(`/get/count`, async (req, res) => {
//   const categoryCount = await Category.countDocuments({ parentId: undefined });

//   if (!categoryCount) {
//     res.status(500).json({ success: false });
//   } else {
//     res.send({
//       categoryCount: categoryCount,
//     });
//   }
// });

// router.get(`/subCat/get/count`, async (req, res) => {
//   const category = await Category.find();

//   if (!category) {
//     res.status(500).json({ success: false });
//   } else {
//     const subCatList = [];
//     for (let cat of category) {
//       if (cat.parentId !== undefined) {
//         subCatList.push(cat);
//       }
//     }

//     res.send({
//       categoryCount: subCatList.length,
//     });
//   }
// });

// router.get("/:id", async (req, res) => {
//   categoryEditId = req.params.id;

//   const category = await Category.findById(req.params.id);

//   if (!category) {
//     res
//       .status(500)
//       .json({ message: "The category with the given ID was not found." });
//   }

//   return res.status(200).send(category);
// });

// router.delete("/deleteImage", async (req, res) => {
//   const imgUrl = req.query.img;

//   const urlArr = imgUrl.split("/");
//   const image = urlArr[urlArr.length - 1];
//   const imageName = image.split(".")[0];

//   await cloudinary.uploader.destroy(imageName);

//   res.status(200).json({
//     success: true,
//     message: "Image deleted",
//   });
// });

// router.delete("/:id", async (req, res) => {
//   const category = await Category.findById(req.params.id);
//   const images = category.images;

//   for (img of images) {
//     const imgUrl = img;
//     const urlArr = imgUrl.split("/");
//     const image = urlArr[urlArr.length - 1];

//     const imageName = image.split(".")[0];

//     cloudinary.uploader.destroy(imageName, (error, result) => {});
//     // console.log(imageName)
//   }

//   const deletedCat = await Category.findByIdAndDelete(req.params.id);

//   if (!deletedCat) {
//     res.status(400).json({
//       message: "Category not found!",
//       success: false,
//     });
//   }

//   res.status(200).json({
//     success: true,
//     message: "Category Deleted!",
//   });
// });

// router.put("/:id", async (req, res) => {
//   console.log({
//     name: req.body.name,
//     images: req.body.images,
//     color: req.body.color,
//     id: req.params.id,
//   });

//   const category = await Category.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       images: req.body.images,
//       color: req.body.color,
//     },
//     { new: true }
//   );

//   if (!category) {
//     return res.status(500).json({
//       message: "Category cannot be updated!",
//       success: false,
//     });
//   }

//   imagesArr = [];

//   res.send(category);
// });

// module.exports = router;

const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.array("images", 10), async (req, res) => {
  try {
    const images = req.files.map((file) => file.filename);
    res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Upload failed" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name, images, color, parentId } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    let category = new Category({
      name,
      slug: slugify(name, { lower: true }),
      images: images || [],
      color: color || "",
      parentId: parentId ? parentId : undefined,
    });

    category = await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/deleteImage", async (req, res) => {
  const imgName = req.query.img;

  if (!imgName) {
    return res.status(400).json({ message: "Image name required" });
  }

  const filePath = path.join(__dirname, "../uploads", imgName);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return res.status(200).json({ success: true, message: "Image deleted" });
  } else {
    return res.status(404).json({ message: "File not found" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // delete images from local folder
    category.images.forEach((img) => {
      const filePath = path.join(__dirname, "../uploads", img);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Category Deleted!",
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

const createCategories = (categories, parentId = null) => {
  const categoryList = [];
  let filteredCategories;

  if (parentId === null) {
    filteredCategories = categories.filter((cat) => cat.parentId === undefined);
  } else {
    filteredCategories = categories.filter(
      (cat) => String(cat.parentId) === String(parentId),
    );
  }

  for (let cat of filteredCategories) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      images: cat.images,
      color: cat.color,
      parentId: cat.parentId,
      children: createCategories(categories, cat._id),
    });
  }

  return categoryList;
};

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    const categoryTree = createCategories(categories);
    res.status(200).json({ categoryList: categoryTree });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        images: req.body.images,
        color: req.body.color,
      },
      { new: true },
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.get("/", async (req, res) => {
  const categoryList = await Category.find().populate("children");
  res.json({ categoryList });
});

module.exports = router;
