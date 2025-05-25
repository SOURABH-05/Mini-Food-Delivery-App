import Navbar from "../../components/Navbar";
import FeaturedItems from "../../components/FeaturedItems";

export default function MenuPage() {
  return (
    <div className="p-4">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4 mt-6 flex justify-center">Menu</h1>
      <FeaturedItems />
    </div>
  );
}