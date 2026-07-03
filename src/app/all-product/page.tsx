import AllProductsClient from '@/Components/AllProducts/AllProductsClient'
import { IFilters, IProduct, IProductResponse, ISearchParams } from '@/types/products.interface';
import React from 'react'

const getFilters = async (): Promise<IFilters> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URL env variable is missing!");
      return { brands: [], categories: [] };
    }

    const res = await fetch(`${apiUrl}/product/filters`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Failed to fetch filters from backend. Response:', errText);
      return { brands: [], categories: [] };
    }

    const data = await res.json();
    return data.data || { brands: [], categories: [] };

  } catch (error) {
    console.error('Error fetching filters:', error);
    return { brands: [], categories: [] };
  }
};

const getProducts = async (filters: ISearchParams): Promise<IProductResponse> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URL env variable is missing!");
      return { products: [], total: 0, page: 1, limit: 8 };
    }

    let url = `${apiUrl}/product/allProduct`;
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value && typeof value === 'string' && value.trim() !== '') {
          params.set(key, value.trim()); 
        }
      });
    }

    if (Array.from(params).length > 0) {
      url += `?${params.toString()}`;
    }

    const res = await fetch(url, {
      next: {
        revalidate: 3600,
        tags: ['products']
      }
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Backend error on getProducts (${res.status}):`, errorText);
      return { products: [], total: 0, page: 1, limit: 8 };
    }

    const data = await res.json();

    return {
      products: data?.data || [],
      total: data?.total || 0,
      page: data?.page || 1,
      limit: data?.limit || 8
    };

  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [], total: 0, page: 1, limit: 8 };
  }
}

const AllProductPage = async ({ searchParams }: { searchParams: Promise<ISearchParams> }) => {
  const filtersFromUrl = await searchParams;

  const [filters, productsData] = await Promise.all([
    getFilters(),
    getProducts(filtersFromUrl)
  ]);

  const { products, total, page, limit } = productsData;

  return (
    <div className="">
      <AllProductsClient
        brands={filters.brands}
        categories={filters.categories}
        products={products}
        total={total}
        page={page}
        limit={limit}
      />
    </div>
  )
}

export default AllProductPage;