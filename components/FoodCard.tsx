"use client";
import Image from "next/image";

interface FoodItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function FoodCard({
  item,
  onAdd,
}: {
  item: FoodItem;
  onAdd: () => void;
}) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-60 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-110"
          priority // optional: if this image is above the fold
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.name}
        </h2>
        <p className="text-md font-bold text-green-600 dark:text-green-400">
          ${item.price.toFixed(2)}
        </p>
        <button
          className="mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-medium transition"
          onClick={onAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
