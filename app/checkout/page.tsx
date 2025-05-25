// File: app/checkout/page.tsx (Checkout Page)
import Navbar from "../../components/Navbar";
import CheckoutForm from "../../components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen p-4">
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Checkout</h1>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
