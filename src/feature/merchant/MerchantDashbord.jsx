import { useState, useEffect } from "react";

export default function MerchantDashboard() {
  // Sample JSON data
  const sampleProducts = [
    { id: 1, name: "Product A", price: 50, stock: 10 },
    { id: 2, name: "Product B", price: 30, stock: 5 },
    { id: 3, name: "Product C", price: 20, stock: 0 },
  ];

  const sampleOrders = [
    { id: 101, name: "Product A", quantity: 2, price: 100, delivered: true },
    { id: 102, name: "Product B", quantity: 1, price: 30, delivered: false },
    { id: 103, name: "Product C", quantity: 3, price: 60, delivered: true },
  ];

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(sampleProducts);
    setOrders(sampleOrders);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Merchant Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-4  gap-4 mb-8">
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Total Products</div>
          <div className="text-2xl font-bold">{products.length}</div>
        </div>
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Total Orders</div>
          <div className="text-2xl font-bold">{orders.length}</div>
        </div>
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Pending Orders</div>
          <div className="text-2xl font-bold">
            {orders.filter((o) => !o.delivered).length}
          </div>
        </div>
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Delivered Orders</div>
          <div className="text-2xl font-bold">
            {orders.filter((o) => o.delivered).length}
          </div>
        </div>
      </div>
      {/* Orders Table */}
      <div className="bg-stone-100 shadow-md rounded p-4">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-stone-500 p-2">Order ID</th>
              <th className="border border-stone-500 p-2">Product</th>
              <th className="border border-stone-500 p-2">Quantity</th>
              <th className="border border-stone-500 p-2">Price</th>
              <th className="border border-stone-500 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border border-stone-500 p-2">{order.id}</td>
                <td className="border border-stone-500 p-2">{order.name}</td>
                <td className="border border-stone-500 p-2">
                  {order.quantity}
                </td>
                <td className="border border-stone-500 p-2">
                  ETB {order.price}
                </td>
                <td className="border border-stone-500 p-2">
                  {order.delivered ? "Delivered" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Products Table */}
      <div className="bg-stone-100 shadow rounded p-4 mt-8">
        <h3 className="text-xl font-semibold mb-4">Products</h3>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border border-stone-500 p-2">ID</th>
              <th className="border border-stone-500 p-2">Name</th>
              <th className="border border-stone-500 p-2">Price</th>
              <th className="border border-stone-500 p-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="border border-stone-500 p-2">{p.id}</td>
                <td className="border border-stone-500 p-2">{p.name}</td>
                <td className="border border-stone-500 p-2">ETB {p.price}</td>
                <td className="border border-stone-500 p-2">{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
