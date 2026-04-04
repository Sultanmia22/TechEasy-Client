interface ISpecs {
  processor: string;
  ram: string;
  storage: string;
  display: string;
}

interface IProduct {
  _id: string;
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  description: string;
  specs: ISpecs;
}

export interface ICartItem {
  productId: IProduct; 
  quantity: number;
}

export interface ICart {
  _id: string;
  userEmail: string;
  items: ICartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItemProps {
  item: ICartItem;
}