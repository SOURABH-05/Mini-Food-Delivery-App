const categories = ["🍔 Burgers",
  "🍕 Pizzas",
  "🥤 Drinks",
 "🍜 Noodles",
  "🍩 Desserts",
  "🥪 Sandwiches",
  "🧁 Cupcakes",
  "🍞 Breads",
  "🍦 Ice Cream",
  "🧀 Cheese",
  ];

export default function CategoryList() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {categories.map((cat) => (
        <div
          key={cat}
          className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-white px-6 py-3 rounded-2xl shadow hover:shadow-lg transition hover:scale-105 cursor-pointer font-semibold text-sm sm:text-base"
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
