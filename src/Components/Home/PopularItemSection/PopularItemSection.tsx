import NoProductsFound from "@/Components/AllProducts/NoProductsFound";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/types/products.interface";
import React from "react";

const getPopularProducts = async (): Promise<IProduct[]>  => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/popularProduct`, {
    cache: 'no-store' 
  });

  const data = await res.json();

  return data.data || [];

  }
  catch(er:any){
    console.log(er.message)
    return []
  }
}

const PopularProducts = async () => {

    const productData = await getPopularProducts();

    if(!productData || productData.length === 0){
      return <NoProductsFound />
    }

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