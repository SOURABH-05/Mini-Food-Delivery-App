

// File: app/layout.tsx
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Toaster position="top-center" />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
