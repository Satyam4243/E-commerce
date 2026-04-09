import React, { useContext, useEffect } from "react";
import { postData } from "../../utils/api";
import Product from "../../components/product/product";
import { MyContext } from "../../App";

const Wishlist = () => {
  const { loadWishlist, wishlistItems, setAlertBox } =
    useContext(MyContext);

  const user = JSON.parse(localStorage.getItem("user"));

  const items = wishlistItems || [];

  useEffect(() => {
    loadWishlist();
  }, [loadWishlist]);

  const removeItem = async (productId) => {
    const res = await postData("/api/wishlist/remove", {
      productId,
      userId: user._id || user.id || user.uid,
    });

    if (res?.success) {
      loadWishlist();

      setAlertBox({
        open: true,
        error: false,
        msg: "Removed from Wishlist ",
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Wishlist </h2>

      {items.length === 0 && (
        <div className="text-center">
          <h5>No items in wishlist </h5>
        </div>
      )}

      <div className="row">
        {items.map((item) => (
          <div className="col-md-3 mb-4" key={item._id}>
            <Product item={item.productId} />

            <button
              className="btn btn-danger w-100 mt-2"
              onClick={() => removeItem(item.productId._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Wishlist;