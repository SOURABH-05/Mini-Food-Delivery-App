
// "use client";
// import FoodCard from "./FoodCard";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { foodItems } from "../data/foodItems";
// import toast from "react-hot-toast";

// export default function FeaturedItems() {
//   const { addToCart } = useContext(CartContext);

//   const handleAdd = (item: any) => {
//     addToCart(item);
//     toast.success(`${item.name} added to cart`);
//   };

//   return (
//     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {foodItems.map(item => (
//         <FoodCard key={item.id} item={item} onAdd={() => handleAdd(item)} />
//       ))}
//     </div>
//   );
// }
"use client";

import { useContext } from "react";
import FoodCard from "./FoodCard";
import { CartContext } from "../context/CartContext";
import { foodItems } from "../data/foodItems";
import toast from "react-hot-toast";
import type { FoodItem } from "../types"; // Make sure this matches your type path

export default function FeaturedItems() {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (item: Omit<FoodItem, "quantity">) => {
    const itemWithQuantity: FoodItem = { ...item, quantity: 1 };
    addToCart(itemWithQuantity);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {foodItems.map(item => (
        <FoodCard
          key={item.id}
          item={{ ...item, quantity: 1 }} // Ensure quantity is present for display
          onAdd={() => handleAdd(item)}
        />
      ))}
    </div>
  );
}
