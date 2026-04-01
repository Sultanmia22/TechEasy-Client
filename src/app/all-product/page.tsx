import AllProductsClient from '@/Components/AllProducts/AllProductsClient'
import { IFilters, IProduct, IProductResponse, ISearchParams } from '@/types/products.interface';
import React from 'react'



const getFilters = async (): Promise<IFilters> => {
  try {
    const res = await fetch('http://localhost:5000/api/v1/product/filters', {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch filters');
    }

    const data = await res.json();

    return data.data

  } catch (error) {
    console.error('Error fetching filters:', error);
    return { brands: [], categories: [] };
  }
};

const getProducts = async (filters: ISearchParams): Promise<IProductResponse> => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/product/allProduct`

  const params = new URLSearchParams();

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value.trim() !== '') {
        params.set(key, encodeURIComponent(value));
      }
    })
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

  const data = await res.json();

  return {
    products: data?.data || [],
    total: data?.total || 0,
    page: data?.page || 1,
    limit: data?.limit || 8
  };
}

const AllProductPage = async ({ searchParams }: { searchParams: Promise<ISearchParams> }) => {

  const filtersFromUrl = await searchParams;

  const [filters, productsData] = await Promise.all([
    getFilters(),
    getProducts(filtersFromUrl)

  ]);

  const { products, total, page, limit } = productsData;

  console.log(products)

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

export default AllProductPage