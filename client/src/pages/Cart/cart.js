import React, { useEffect, useState, useContext } from "react";
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

  const [user] = useState(() => JSON.parse(localStorage.getItem("user")));

  // ================= FETCH CART =================
  const loadCart = () => {
    if (user) {
      fetchDataFromApi(`/api/cart/${user.id || user._id || user.uid}`).then(
        (res) => {
          if (res?.success) {
            setCartItems(res.cartItems);
          }
        },
      );
    }
  };

  useEffect(() => {
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // ================= DELETE SINGLE ITEM =================
  const handleDelete = (id) => {
    deleteData(`/api/cart/${id}`).then((res) => {
      if (res?.success) {
        setCartItems((prev) => prev.filter((item) => item._id !== id));
        context.setAlertBox({
          open: true,
          error: false,
          msg: "Item removed from cart",
        });
      }
    });
  };

  // ================= CLEAR CART =================
  const handleClearCart = () => {
    deleteData(`/api/cart/clear/${user.id || user._id || user.uid}`).then(
      (res) => {
        if (res?.success) {
          setCartItems([]);
          context.setAlertBox({
            open: true,
            error: false,
            msg: "Cart cleared successfully!",
          });
        }
      },
    );
  };

  // ================= UPDATE QUANTITY =================
  const handleQuantityChange = (id, quantity) => {
    editData(`/api/cart/${id}`, { quantity }).then((res) => {
      if (res?.success) {
        loadCart(); // ✅ fresh data sync
      }
    });
  };

  // ================= CALCULATE TOTAL =================
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.totalPrice || 0),
    0,
  );

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3>Please Login to View Cart</h3>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart is Empty</h3>
        <Link to="/">
          <Button variant="contained" className="mt-3">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
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
                        <th>Unit.Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
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
                                  // src={
                                  //   item.product?.images?.[0]
                                  //     ? `${process.env.REACT_APP_API_URL}/uploads/${item.product.images[0]}`
                                  //     : "/fallback.jpg"
                                  // }
                                  src={
                                    item.product?.images?.[0]
                                      ? `${process.env.REACT_APP_BASE_URL}/uploads/${item.product.images[0]}`
                                      : "/fallback.jpg"
                                  }
                                  alt={item.product?.name}
                                  className="w-100"
                                />
                              </div>

                              <div className="info ms-4">
                                <Link to={`/product/${item.product?._id}`}>
                                  <h4 className="mb-1">{item.product?.name}</h4>
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

                          <td className="text-g">₹{item.totalPrice}</td>

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

            <div className="col-md-5 cartRightBox">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-4">
                  <h5>Subtotal</h5>
                  <h3 className="ms-auto text-g">₹{subtotal}</h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5>Shipping</h5>
                  <h3 className="ms-auto">Free</h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5>Total</h5>
                  <h3 className="ms-auto text-g">₹{subtotal}</h3>
                </div>

                <Button className="btn-g btn-lg">Proceed To Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
