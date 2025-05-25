
"use client";
import FoodCard from "./FoodCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { foodItems } from "../data/foodItems";
import toast from "react-hot-toast";

export default function FeaturedItems() {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (item: any) => {
    addToCart(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {foodItems.map(item => (
        <FoodCard key={item.id} item={item} onAdd={() => handleAdd(item)} />
      ))}
    </div>
  );
}
