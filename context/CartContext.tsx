

"use client";

import { createContext, useState } from "react";
import type { FoodItem } from "../types"; // Adjust path if needed

interface CartContextType {
  cartItems: FoodItem[];
  addToCart: (item: FoodItem) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  removeItem: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  function addToCart(item: FoodItem) {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

  function incrementItem(id: number) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementItem(id: number) {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  function removeItem(id: number) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementItem, decrementItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
