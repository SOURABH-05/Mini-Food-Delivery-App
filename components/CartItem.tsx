import type { FoodItem } from "../types";

export default function CartItem({ item }: { item: FoodItem }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-zinc-800 p-4 my-2 rounded">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
