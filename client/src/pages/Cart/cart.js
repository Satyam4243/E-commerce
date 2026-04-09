import React, { useEffect, useState, useContext, useCallback } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QuantityBox from "../../components/quantityBox/quantity";
import { fetchDataFromApi, deleteData, editData } from "../../utils/api";
import { MyContext } from "../../App";

const Cart = () => {
  const context = useContext(MyContext);
  const [cartItems, setCartItems] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // ================= LOAD CART =================
  const loadCart = useCallback(() => {
    if (!user) return;

    fetchDataFromApi(`/api/cart/${user.id || user._id || user.uid}`).then(
      (res) => {
        if (res?.success) {
          setCartItems(res.cartItems);
        }
      }
    );
  }, [user]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  // ================= DELETE =================
  const handleDelete = async (id) => {
    const res = await deleteData(`/api/cart/${id}`);

    if (res?.success) {
      context.setAlertBox({
        open: true,
        error: false,
        msg: "Item removed from cart ❌",
      });

      context.setCartUpdated((prev) => !prev);
      loadCart(); // 🔥 reload
    }
  };

  // ================= CLEAR CART =================
  const handleClearCart = async () => {
    const res = await deleteData(
      `/api/cart/clear/${user.id || user._id || user.uid}`
    );

    if (res?.success) {
      setCartItems([]);

      context.setCartUpdated((prev) => !prev);

      context.setAlertBox({
        open: true,
        error: false,
        msg: "Cart cleared successfully!",
      });
    }
  };

  // ================= UPDATE QTY =================
  const handleQuantityChange = async (id, quantity) => {
    const res = await editData(`/api/cart/${id}`, { quantity });

    if (res?.success) {
      loadCart(); // 🔥 reload fresh data

      context.setCartUpdated((prev) => !prev);
    }
  };

  // ================= TOTAL =================
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ================= LOGIN CHECK =================
  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3>Please Login to View Cart</h3>
      </div>
    );
  }

  // ================= EMPTY =================
  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart is Empty 🛒</h3>
        <Link to="/">
          <Button variant="contained" className="mt-3">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="cartSection mb-5">
      <div className="container-fluid">
        <div className="row">
          {/* LEFT */}
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <h1 className="hd mb-3">Your Cart</h1>

              <span
                className="ms-auto clearCart cursor text-danger"
                onClick={handleClearCart}
              >
                Clear Cart
              </span>
            </div>

            <div className="cartWrapper mt-4">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <div className="d-flex align-items-center productCell">
                            <div className="img">
                              <img
                                src={
                                  item.product?.images?.[0]
                                    ? `${process.env.REACT_APP_API_URL}/uploads/${item.product.images[0]}`
                                    : "/fallback.jpg"
                                }
                                alt={item.product?.name}
                              />
                            </div>

                            <div className="info ms-4">
                              <Link to={`/product/${item.product?._id}`}>
                                <h4>{item.product?.name}</h4>
                              </Link>

                              <Rating
                                value={item.product?.rating || 0}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </td>

                        <td>₹{item.price}</td>

                        <td>
                          <QuantityBox
                            quantity={item.quantity}
                            max={item.product?.countInStock || 1}
                            onChange={(qty) =>
                              handleQuantityChange(item._id, qty)
                            }
                          />
                        </td>

                        <td className="text-g">
                          ₹{item.price * item.quantity}
                        </td>

                        <td>
                          <span
                            className="cursor"
                            onClick={() => handleDelete(item._id)}
                          >
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-5 cartRightBox">
            <div className="card p-4">
              <div className="d-flex align-items-center mb-3">
                <h5>Subtotal</h5>
                <h3 className="ms-auto text-g">₹{subtotal}</h3>
              </div>

              <div className="d-flex align-items-center mb-3">
                <h5>Shipping</h5>
                <h3 className="ms-auto">Free</h3>
              </div>

              <div className="d-flex align-items-center mb-4">
                <h5>Total</h5>
                <h3 className="ms-auto text-g">₹{subtotal}</h3>
              </div>

              <Link to="/checkout">
                <Button className="btn-g btn-lg w-100">
                  Proceed To Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;