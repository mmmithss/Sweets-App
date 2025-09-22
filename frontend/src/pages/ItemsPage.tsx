import { useState } from "react";

interface Sweet {
  id: number;
  name: string;
  category: string;
  price: number;
  image?: string;
}

const mockSweets: Sweet[] = [
  { id: 1, name: "Gulab Jamun", category: "Traditional", price: 120 },
  { id: 2, name: "Rasgulla", category: "Bengali", price: 150 },
  { id: 3, name: "Kaju Katli", category: "Dry Fruit", price: 300 },
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("sweetName");

  const filteredSweets = mockSweets.filter((sweet) => {
    const query = search.toLowerCase();
    if (filter === "sweetName") return sweet.name.toLowerCase().includes(query);
    if (filter === "category")
      return sweet.category.toLowerCase().includes(query);
    if (filter === "price") return sweet.price.toString().includes(query);
    return true;
  });

  const handleLogout = () => {
    // TODO: implement logout logic
    console.log("Logout clicked");
  };

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
          <div key={sweet.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={sweet.image || "https://via.placeholder.com/150"}
                alt={sweet.name}
                className="h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{sweet.name}</h2>
              <p className="text-sm text-gray-500">{sweet.category}</p>
              <p className="text-lg font-semibold">₹{sweet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
