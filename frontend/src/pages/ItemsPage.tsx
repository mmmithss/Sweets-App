import { useState } from "react";
import SweetCard from "../components/SweetCard";
import { useGetSweets } from "../hooks/useGetSweets";
import PageLoading from "./PageLoader";

interface Sweet {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  quantity: number;
}

interface AuthUser {
  name: string;
  email: string;
  isAdmin: boolean;
}
interface ItemsPageProps {
  user: AuthUser;
}
export default function ItemsPage({ user }: ItemsPageProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("sweetName");

  const { sweets, isPending } = useGetSweets();
  console.log(sweets);
  const filteredSweets = ((sweets as Sweet[]) ?? []).filter((sweet: Sweet) => {
    const query = search.toLowerCase();

    if (!query) return true;

    switch (filter) {
      case "sweetName":
        return sweet.name.toLowerCase().includes(query);
      case "category":
        return sweet.category.toLowerCase().includes(query);
      case "price":
        return sweet.price.toString().includes(query);
      default:
        return true;
    }
  });

  const handleLogout = () => {
    // TODO: implement logout logic
    console.log("Logout clicked");
  };
  if (isPending) return <PageLoading />;
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sweets Shop</h1>
        <button className="btn btn-error" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search sweets..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="sweetName">Sweet Name</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* Sweet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSweets.map((sweet) => (
          <SweetCard
            key={sweet.id}
            id={sweet.id}
            name={sweet.name}
            category={sweet.category}
            price={sweet.price}
            image={sweet.image}
            quantity={sweet.quantity}
            isAdmin={user.isAdmin}
          />
        ))}
      </div>
    </div>
  );
}
