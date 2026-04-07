import React, { useContext } from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import Tooltip from "@mui/material/Tooltip";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";
import { useState } from "react";

const Product = (props) => {
  const { item, tag } = props;
  const context = useContext(MyContext);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  if (!item) return null;

  const discountPercentage =
    item.oldPrice && item.oldPrice > item.price
      ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
      : 0;

  // ================= ADD TO CART =================
  // const handleAddToCart = async () => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (!user) {
  //     context.setAlertBox({
  //       open: true,
  //       error: true,
  //       msg: "Please login first!",
  //     });
  //     return;
  //   }

  //   const response = await postData("/api/cart", {
  //     productId: item._id,
  //     userId: user.uid,
  //     quantity: 1,
  //   });

  //   if (response?.success) {
  //     context.setAlertBox({
  //       open: true,
  //       error: false,
  //       msg: "Product added to cart!",
  //     });

  //     context.getCartCount && context.getCartCount();

  //     // 🔥 IMPORTANT: header badge update trigger
  //     context.setCartUpdated((prev) => !prev);

  //   } else {
  //     context.setAlertBox({
  //       open: true,
  //       error: true,
  //       msg: "Failed to add product",
  //     });
  //   }
  // };

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("USER:", user);

    if (!user) {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please login first!",
      });
      return;
    }

    // const response = await postData("/api/cart", {
    const payload = {
      productId: item._id,
      userId: user._id || user.id || user.uid,
      quantity: 1,
      // });
    };
    console.log("PAYLOAD:", payload);
    const response = await postData("/api/cart", payload);
    console.log("RESPONSE:", response);

    if (response?.success) {
      context.setAlertBox({
        open: true,
        error: false,
        msg: "Product added to cart!",
      });

      context.setCartUpdated(!context.cartUpdated);

      if (context.getCartCount) {
        context.getCartCount();
      }
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: response?.message || "Failed to add product",
      });
    }
  };

  return (
    <div className="productThumb">
      {tag && <span className={`badge ${tag}`}>{tag}</span>}

      {discountPercentage > 0 && (
        <span className="badge sale">{discountPercentage}% OFF</span>
      )}

      <Link to={`/product/${item._id}`}>
        <div className="imgWrapper">
          <img
            src={
              item?.images?.length > 0
                ? `${process.env.REACT_APP_BASE_URL}/uploads/${item.images[0]}`
                : "https://via.placeholder.com/300"
            }
            className="w-100"
            alt={item.name}
          />

          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Tooltip title="Add to Wishlist" placement="top" arrow>
                  <span
                    className="cursor"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <FavoriteBorderOutlinedIcon
                      style={{ color: isWishlisted ? "red" : "#000" }}
                    />
                  </span>
                </Tooltip>
              </li>

              <li className="list-inline-item">
                <Tooltip title="Compare" placement="top" arrow>
                  <span
                    className="cursor"
                    onClick={() => setIsCompared(!isCompared)}
                  >
                    <CompareArrowsOutlinedIcon
                      style={{ color: isCompared ? "#0d6efd" : "#000" }}
                    />
                  </span>
                </Tooltip>
              </li>

              <li className="list-inline-item">
                <Tooltip title="Quick-View" placement="top" arrow>
                  <span className="cursor">
                    <RemoveRedEyeOutlinedIcon />
                  </span>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </Link>

      <div className="info">
        <span className="d-block catName">{item.category?.name || ""}</span>

        <h4 className="title">
          <Link to={`/product/${item._id}`}>{item.name}</Link>
        </h4>

        <Rating
          name="half-rating-read"
          value={item.rating || 0}
          precision={0.5}
          readOnly
        />

        {item.brand && (
          <span className="brand d-block text-g">
            By <span className="text-g">{item.brand}</span>
          </span>
        )}

        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold ms-auto">
              ₹{item.price}
            </span>

            {item.oldPrice > 0 && item.oldPrice > item.price && (
              <span className="oldPrice ms-2">₹{item.oldPrice}</span>
            )}
          </div>

          <Button className="ml-auto transition" onClick={handleAddToCart}>
            <ShoppingCartOutlinedIcon className="me-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
