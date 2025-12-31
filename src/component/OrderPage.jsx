import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, totalPrice, setCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const orderId = Date.now();
    const newOrder = {
      id: orderId,
      items: cart,
      total: totalPrice,
      customer: form,
      status: "Pending",
    };
    localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));
    setCart([]); // تفريغ الكارت بعد الطلب
    Swal.fire("Success", `Order #${orderId} placed successfully!`, "success").then(() => {
      navigate("/orders"); // اذهب لصفحة الطلبات بعد تأكيد الطلب
    });
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <div className="mb-3">
        <input type="text" name="name" placeholder="Name" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input type="text" name="address" placeholder="Address" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input type="text" name="phone" placeholder="Phone" className="form-control" onChange={handleChange} />
      </div>
      <button className="btn btn-dark" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}
