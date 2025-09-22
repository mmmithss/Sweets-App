import { useState } from "react";

export interface RestockData {
  quantity: number;
  id: string;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (quantity: number) => void; // modal only passes quantity
}

export default function PurchaseModal({
  isOpen,
  onClose,
  onPurchase,
}: PurchaseModalProps) {
  const [quantity, setQuantity] = useState<number>(1);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity > 0) {
      onPurchase(quantity); // passes quantity back to outer function
      onClose(); // close modal
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Purchase Item</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
            placeholder="Enter quantity"
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Purchase
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose}>
        <button>close</button>
      </form>
    </dialog>
  );
}
