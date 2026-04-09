const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes

const categoryRoutes = require('./routes/categories');
// const imageUploadRoutes = require('./helper/imageUpload');
const errHandler = require('./helper/error-handler.js');
// const Product = require('./models/products.js')
const productRoutes = require("./routes/products.js");
const userRoutes = require("./routes/user");
const homeBannerRoutes = require("./routes/homeBanner.js");
const cartRoutes = require("./routes/cart");
const imageUploadRoute = require("./routes/imageUpload.js");
const wishlistRoutes = require("./routes/wishlist");
const orderRoutes = require("./routes/order");

// app.use("/uploads",express.static("uploads"));
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(`/api/category`, categoryRoutes);
// app.use(`/api/imageUpload`, imageUploadRoutes);
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/homeBanner", homeBannerRoutes);
app.use("/api/cart", cartRoutes);
// app.use("/Upload", imageUploadRoute);
app.use("/api/imageUpload", imageUploadRoute); 
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/orders", orderRoutes);

app.use(errHandler);

// Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Mongo error:', err.message));

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
