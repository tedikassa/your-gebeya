import { useState } from "react";

export default function MerchantOrder() {
  // Sample order items
  const [orders, setOrders] = useState([
    {
      ID: 1,
      productName: "Product A",
      quantity: 2,
      price: 50,
      total: 100,
      buyerName: "John Doe",
      status: "pending",
      delivered: false,
    },
    {
      ID: 2,
      productName: "Product B",
      quantity: 1,
      price: 30,
      total: 30,
      buyerName: "Jane Smith",
      status: "paid",
      delivered: true,
    },
  ]);

  // Mark order as delivered
  const handleDeliver = (id) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.ID === id ? { ...o, status: "delivered", delivered: true } : o
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Product</th>
            <th className="border px-3 py-2">Quantity</th>
            <th className="border px-3 py-2">Price</th>
            <th className="border px-3 py-2">Total</th>
            <th className="border px-3 py-2">Buyer</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.ID}>
              <td className="border px-3 py-2">{order.ID}</td>
              <td className="border px-3 py-2">{order.productName}</td>
              <td className="border px-3 py-2">{order.quantity}</td>
              <td className="border px-3 py-2">{order.price}</td>
              <td className="border px-3 py-2">{order.total}</td>
              <td className="border px-3 py-2">{order.buyerName}</td>
              <td className="border px-3 py-2">{order.status}</td>
              <td className="border px-3 py-2">
                {!order.delivered && (
                  <button
                    onClick={() => handleDeliver(order.ID)}
                    className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                  >
                    Mark Delivered
                  </button>
                )}
                {order.delivered && (
                  <span className="text-green-600 font-semibold">
                    Delivered
                  </span>
                )}
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
