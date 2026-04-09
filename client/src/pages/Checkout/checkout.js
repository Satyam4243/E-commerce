import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { fetchDataFromApi } from "../../utils/api";
import "./checkout.css";

const Checkout = () => {
  const context = useContext(MyContext);

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  // ================= LOAD CART =================
  useEffect(() => {
    if (!user) return;

    fetchDataFromApi(`/api/cart/${user._id || user.id || user.uid}`).then(
      (res) => {
        if (res?.success) {
          setCartItems(res.cartItems);
        }
      },
    );
  }, [user]);

  // ================= TOTAL =================
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // ================= PLACE ORDER =================
  //   const handleCheckout = () => {
  //     if (!address) {
  //       context.setAlertBox({
  //         open: true,
  //         error: true,
  //         msg: "Please enter delivery address!",
  //       });
  //       return;
  //     }

  //     // 👉 next step: payment
  //     console.log("Proceeding to payment...");
  //   };

  const handleCheckout = async () => {
    if (!address) {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Enter address!",
      });
      return;
    }

    // ✅ LOAD SCRIPT
    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    // ✅ CREATE ORDER
    const res = await fetch("http://localhost:8000/api/orders/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    });

    const data = await res.json();

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: data.order.amount,
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      order_id: data.order.id,

      handler: async function (response) {
        await fetch("http://localhost:8000/api/orders/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user._id,
            products: cartItems.map((item) => ({
              product: item.product._id,
              quantity: item.quantity,
              price: item.price,
            })),
            amount: total,
            address,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            status: "paid",
          }),
        });

        context.setAlertBox({
          open: true,
          error: false,
          msg: "Payment Successful 🎉",
        });
      },

      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return (
    <div className="container mt-5 checkoutPage">
      <h2>Checkout</h2>

      <div className="row mt-4">
        {/* LEFT - ADDRESS */}
        <div className="col-md-6">
          <h5>Delivery Address</h5>

          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter your full address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="col-md-6">
          <h5>Order Summary</h5>

          <div className="card p-3">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="d-flex justify-content-between mb-2"
              >
                <span>{item.product?.name}</span>
                <span>
                  ₹{item.price} x {item.quantity}
                </span>
              </div>
            ))}

            <hr />

            <h4>Total: ₹{total}</h4>

            <button
              className="btn btn-success mt-3 w-100"
              onClick={handleCheckout}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
