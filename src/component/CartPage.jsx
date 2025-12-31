import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const {
    filteredCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    finalPrice,
    cartCount,
    setSearch,
    applyCoupon,
  } = useContext(CartContext);

  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();

  if (cartCount === 0)
    return <h2 className="text-center mt-4">Your cart is empty 🛒</h2>;

  return (
    <div className="container mt-4">
      {/* 🔍 Search */}
      <input
        className="form-control mb-4"
        placeholder="Search in cart..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCart.map((item) => (
        <div key={item.id} className="row align-items-center mb-3 border-bottom pb-3">
          <div className="col-md-2">
            <img src={item.image} alt={item.title} className="img-fluid" />
          </div>

          <div className="col-md-4 fw-bold">{item.title}</div>

          <div className="col-md-2">
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) =>
                updateQuantity(item.id, Number(e.target.value))
              }
              className="form-control"
            />
          </div>

          <div className="col-md-2">
            ${(item.price * item.qty).toFixed(2)}
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-danger w-100"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* 🎟 Coupon */}
      <div className="row mt-4">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Coupon code (SAVE10 / SAVE20)"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-outline-dark w-100"
            onClick={() => applyCoupon(coupon)}
          >
            Apply
          </button>
        </div>
      </div>

      {/* 💸 Prices */}
      <div className="mt-4">
        <h5>Total: ${totalPrice.toFixed(2)}</h5>
        <h4 className="fw-bold">
          Final Price: ${finalPrice.toFixed(2)}
        </h4>
      </div>

      <button
        className="btn btn-dark btn-lg mt-3 w-100"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
