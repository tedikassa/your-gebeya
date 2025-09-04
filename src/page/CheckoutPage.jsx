import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  //  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // simple form state
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.email) {
      alert("Please fill out all fields");
      return;
    }
    // Here you would send order to backend
    console.log("Order placed:", { form, items, totalPrice });
    //dispatch(clearCart());
    navigate("/thank-you"); // or navigate back to homepage
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Order summary */}
        <div className="bg-stone-50 border rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.ID} className="flex justify-between items-center">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>ETB {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold flex justify-between">
            <span>Total:</span>
            <span>ETB {totalPrice}</span>
          </div>
        </div>

        {/* Shipping form */}
        <form
          onSubmit={handlePlaceOrder}
          className="bg-stone-50 border rounded-lg shadow-sm p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
