import React, { createContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [discount, setDiscount] = useState(0); // percentage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 CRUD
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  // 🔍 Search / Filter
  const filteredCart = useMemo(() => {
    return cart.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [cart, search]);

  // 💸 Prices
  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart]
  );

  const finalPrice = useMemo(
    () => totalPrice - totalPrice * (discount / 100),
    [totalPrice, discount]
  );

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.qty, 0),
    [cart]
  );

  // 🎟 Fake Coupon
  const applyCoupon = (code) => {
    if (code === "SAVE10") setDiscount(10);
    else if (code === "SAVE20") setDiscount(20);
    else setDiscount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        filteredCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        finalPrice,
        cartCount,
        search,
        setSearch,
        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
