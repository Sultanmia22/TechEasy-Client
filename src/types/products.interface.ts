// All Product Interfaces 
export interface ProductSpecs {
  [key: string]: string | number;
}

export interface IProduct {
  _id:string;
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


export interface IFilters {
  brands: string[];
  categories: string[];
}


export interface ISearchParams {
  category?: string;
  brand?: string;
  name?: string;
  price?: 'low' | 'high';
}

 export interface IProductResponse {
  products: IProduct[];
  total: number;
  page: number;
  limit: number;
}

export interface IAllProductsClientProps {
  products: IProduct[];
  brands: string[];
  categories: string[];
  total: number;
  page: number;
  limit: number;
}

// Product Details Interfaces

export interface IProps {
  id:string;
}