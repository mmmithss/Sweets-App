import { useState } from "react";
import { useRestock } from "../hooks/useRestock";
import PurchaseModal from "./PurchaseModal";

interface SweetCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  quantity: number;
  isAdmin: boolean;
}

const SweetCard = ({
  id,
  name,
  price,
  category,
  image,
  quantity,
  isAdmin,
}: SweetCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { restock } = useRestock();

  // ✅ Function lives outside modal
  const handleRestock = (qty: number) => {
    console.log("Restock clicked", id, "quantity:", qty);
    restock({ id, quantity: qty }); // call your mutation
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image || "https://placehold.co/400"}
          alt={name}
          className="h-40 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-500">{category}</p>
          <p className="text-lg font-semibold">₹{price}</p>
          <p className="text-xs text-gray-500">Quantity: {quantity}</p>
          <p className="text-xs text-gray-500">
            isAdmin: {isAdmin ? "true" : "false"}
          </p>
        </div>

        {isAdmin ? (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setModalOpen(true)}
            >
              Restock
            </button>
            <button className="btn btn-error">Delete</button>
          </div>
        ) : (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setModalOpen(true)}
            >
              Purchase
            </button>
          </div>
        )}
      </div>

      {/* modal receives only quantity and calls outer function */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onPurchase={handleRestock}
      />
    </div>
  );
};

export default SweetCard;
