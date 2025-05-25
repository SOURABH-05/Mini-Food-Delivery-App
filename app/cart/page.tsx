
"use client";

import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import { CartContext } from "../../context/CartContext";
import type { FoodItem } from "../../types";

export default function CartPage() {
  const {
    cartItems,
    incrementItem,
    decrementItem,
    removeItem,
  } = useContext(CartContext);

  const router = useRouter(); // ✅ Initialize router

  const total = cartItems.reduce(
    (sum: number, item: FoodItem) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout"); // ✅ Navigate to /checkout
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-10">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-3">
          🛒 Your Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item: FoodItem) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border rounded-xl p-4 shadow-sm"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-lg px-2 rounded"
                    >
                      −
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-lg px-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center border-t pt-4">
              <span className="text-xl font-medium text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout} // ✅ Attach handler
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Proceed to Checkout
            </button>
          </>
        ) : (
          <div className="text-center text-gray-500 text-lg py-20">
            Your cart is empty 😕<br />
            <span className="text-sm text-gray-400">
              Add some delicious food to get started.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
