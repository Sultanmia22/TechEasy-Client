import ProductCard from "@/Components/ProductCard/ProductCard";
import {IResponse } from "@/types/products.interface";
import React from "react";

const PopularProducts = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/popularProduct`, {
    cache: 'no-store' // always fresh data
  });

  const data :IResponse =  await res.json();

  const productData = data.data;

  console.log(productData)

  return (
    <section className="py-12 bg-base-100 dark:bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary dark:text-primary mb-8">
          Popular Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            productData.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;