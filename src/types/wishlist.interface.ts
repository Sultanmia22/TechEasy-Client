import type { IProduct } from "./products.interface";

export interface IWishlistResponse {
  _id: string;
  customerEmail: string;
  wishListItem: IProduct[]; 
  createdAt: string;
  updatedAt: string;
}