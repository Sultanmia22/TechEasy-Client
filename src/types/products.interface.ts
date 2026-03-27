export interface ProductSpecs {
  [key: string]: string | number;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  description?: string;
  specs?: ProductSpecs;
}

export interface IResponse {
  success: boolean;
  message: string;
  data: IProduct[];
}