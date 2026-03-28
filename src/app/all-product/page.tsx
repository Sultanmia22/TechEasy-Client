"use client";
import TextLoader from "@/Components/Loading/TextLoader";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/types/products.interface";
import React, { useEffect, useState } from "react";

const AllProductsTopSection: React.FC = () => {

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const [selectedValue, setSelectedValue] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const [products, setProducts] = useState<IProduct[]>([])

  const [loading, setLoading] = useState<boolean>(false)

  // 🔥 NEW: pagination state
  const [page, setPage] = useState<number>(1);
  const limit = 8;

  // Get All Categriees and Brand 
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/filters`);
        const result = await res.json();

        if (result.success) {
          setCategories(result.data.categories);
          setBrands(result.data.brands);
        }
      } catch (error) {
        console.error("Error loading filters:", error);
      }
    };

    fetchFilters();
  }, []);

  // Get Selected Filter Value 
  const handleSelectedValue = async (type: string, value: string) => {
    setSelectedValue(value)
    setSelectedType(type)
  }

  // 🔥 NEW: filter change হলে page reset
  useEffect(() => {
    setPage(1);
  }, [selectedType, selectedValue]);

  // Get Data 
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/product/allProduct?type=${selectedType}&value=${selectedValue}&page=${page}&limit=${limit}`;

        const res = await fetch(url, {
          cache: "no-store",
        });

        const data = await res.json();

        setProducts(data.data);

      } catch (er: any) {
        console.log(`Get Product Error : ${er}`);
      }
      finally {
        setLoading(false);
      }
    };

    getData();
  }, [selectedType, selectedValue, page]); // 🔥 page added
  
  if(loading){
    return <TextLoader />
  }

  return (
    <div className="bg-base-100 dark:bg-base-200 border-b border-base-300">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-base-content">
          All Products
        </h1>
        <p className="mt-2 text-neutral max-w-xl">
          Browse our latest tech products including phones, laptops, watches, and accessories.
        </p>
      </div>

      {/* Filter + Search + Sort */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Side (Search + Filters) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">

          {/* 🔍 Search */}
          <div className="relative w-full sm:max-w-xs">
            <input
              onChange={(e) => handleSelectedValue('search', e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full border border-base-300 rounded-xl px-4 py-3 pr-10 bg-base-100 dark:bg-base-200 text-base-content placeholder:text-neutral focus:outline-none focus:border-primary transition"
            />

            {/* Icon */}
            <svg
              className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.3-4.3M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          {/* Category */}
          <select
            onChange={(e) => handleSelectedValue('category', e.target.value)}
            defaultValue=""
            className="w-full sm:w-auto border border-base-300 rounded-xl px-4 py-3 bg-base-100 dark:bg-base-200 text-base-content hover:border-primary focus:border-primary focus:outline-none transition"
          >
            <option value="" disabled>
              All Categories
            </option>
            {
              categories.map((cat, index) =>
                <option key={index} value={cat}>{cat}</option>
              )
            }
          </select>

          {/* Brand */}
          <select
            onChange={(e) => handleSelectedValue('brand', e.target.value)}
            defaultValue=""
            className="w-full sm:w-auto border border-base-300 rounded-xl px-4 py-3 bg-base-100 dark:bg-base-200 text-base-content hover:border-secondary focus:border-secondary focus:outline-none transition"
          >
            <option value="" disabled>
              All Brands
            </option>
            {
              brands.map((cat, index) =>
                <option key={index} value={cat}>{cat}</option>
              )
            }
          </select>

        </div>

        {/* Sort */}
        <div className="w-full sm:w-auto">
          <select
            onChange={(e) => handleSelectedValue('sort', e.target.value)}
            defaultValue=""
            className="w-full sm:w-auto border border-base-300 rounded-xl px-4 py-3 bg-base-100 dark:bg-base-200 text-base-content hover:border-accent focus:border-accent focus:outline-none transition"
          >
            <option value="" disabled>
              Sort by price
            </option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
          {
            products.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>

        <div className="flex justify-center items-center gap-4 pb-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-base-300 rounded-lg"
        >
          Prev
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-base-300 rounded-lg"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default AllProductsTopSection;