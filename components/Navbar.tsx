
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-zinc-800 shadow-sm border-b dark:border-zinc-700 backdrop-blur-md">
      <h1 className="text-2xl font-extrabold text-green-600 tracking-tight">
        🍽️ Foodie
      </h1>
      <div className="space-x-6 text-sm font-medium">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/menu">Menu</NavLink>
        <NavLink href="/cart">Cart</NavLink>
        <NavLink href="/checkout">Checkout</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
    >
      {children}
    </Link>
  );
}
