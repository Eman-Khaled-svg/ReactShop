import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";


export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
 const [form, setForm] = useState(() => {
  return JSON.parse(localStorage.getItem("checkoutForm")) || {
    name: "",
    address: "",
    phone: "",
  };
});

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
   
   Swal.fire("Success", `Order #${orderId} placed successfully!`, "success")
  .then(() => {
    clearCart();
    localStorage.removeItem("checkoutForm");
    navigate("/products");
  });

  };
  useEffect(() => {
  localStorage.setItem("checkoutForm", JSON.stringify(form));
}, [form]);
useEffect(() => {
  if (cart.length === 0) {
    navigate("/");
  }
}, [cart, navigate]);


 return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Checkout</h2>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="form-control"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-dark w-100 py-3 mb-5 mt-4"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
);

}
