import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import FeaturedItems from "../components/FeaturedItems";

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <Banner />
      <CategoryList />
      <FeaturedItems />
    </div>
  );
}
