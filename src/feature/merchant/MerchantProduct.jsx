import { useState } from "react";

export default function MerchantProduct() {
  // Sample products data
  const [products, setProducts] = useState([
    { ID: 1, name: "Product A", description: "Sample A", price: 50, stock: 10 },
    { ID: 2, name: "Product B", description: "Sample B", price: 30, stock: 5 },
  ]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Update existing product
      setProducts((prev) =>
        prev.map((p) =>
          p.ID === editingId
            ? { ...p, ...form, price: +form.price, stock: +form.stock }
            : p
        )
      );
      setEditingId(null);
    } else {
      // Add new product
      const newProduct = {
        ID: products.length + 1,
        ...form,
        price: +form.price,
        stock: +form.stock,
      };
      setProducts([...products, newProduct]);
    }
    setForm({ name: "", description: "", price: "", stock: "" });
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
    setEditingId(product.ID);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      setProducts(products.filter((p) => p.ID !== id));
    }
  };

  return (
    <div className="flex gap-6">
      {/* Form */}
      <div className="w-1/3 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="flex-1 bg-white p-4 rounded shadow overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Your Products</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Stock</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.ID}>
                <td className="border px-3 py-2">{p.ID}</td>
                <td className="border px-3 py-2">{p.name}</td>
                <td className="border px-3 py-2">{p.price}</td>
                <td className="border px-3 py-2">{p.stock}</td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-2 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.ID)}
                    className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
