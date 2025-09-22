export interface SweetDto {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  quantity: number;
}

export type GetAllSweetsDto = SweetDto[] | [];
