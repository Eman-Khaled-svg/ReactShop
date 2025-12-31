// context/OrdersContext.jsx
import { createContext, useState } from "react";

 const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const addOrder = (order) => {
    const updated = [...orders, order];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
export { OrdersContext };