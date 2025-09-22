import type { SweetDto } from "../dto/sweets.dto";
import type { SweetDocument } from "../model/Sweets";

export function toSweetDto(sweet: SweetDocument): SweetDto {
  return {
    id: sweet._id.toString(),
    name: sweet.name,
    category: sweet.category,
    price: sweet.price,
    image: sweet.image,
    quantity: sweet.quantity,
  };
}
