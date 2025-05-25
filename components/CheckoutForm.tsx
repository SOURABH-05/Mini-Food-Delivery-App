
"use client";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast"; // ✅ Import toast

export default function CheckoutForm() {
  const { cartItems } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      toast.error(" Please fill in all fields"); 
      return;
    }

    toast.success(" Order placed successfully!"); 
    // Optional: clear form
    setForm({ name: "", address: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div className="grid gap-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="+1234567890"
          />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Order Summary</h2>
        <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded shadow">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="font-semibold mt-2">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow w-full"
      >
        Place Order
      </button>
    </form>
  );
}
