'use client'
import { IAllProductsClientProps, IProduct } from '@/types/products.interface';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '../ProductCard/ProductCard';
import NoProductsFound from './NoProductsFound';


const AllProductsClient = ({ brands,categories,products,total,page,limit }: IAllProductsClientProps) => {

  const router = useRouter();
  const searchParams = useSearchParams();

 const totalPages = Math.ceil(total / limit);

  const handleChange = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value.trim() !== '') {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", "1");

    router.push(`/all-product?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`/all-product?${params.toString()}`);
  };

  const handleReset = () => {
    router.push('/all-product');
  };

  return (
    <div>
      {/* Header */}
      <div className=" pt-10 pb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-base-content">
          All Products
        </h1>
        <p className="mt-2 text-neutral max-w-xl">
          Browse our latest tech products including phones, laptops, watches, and accessories.
        </p>
      </div>

      {/* Filter + Search + Sort */}
      <div className=" pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Side (Search + Filters) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">

          {/* 🔍 Search */}
          <div className="relative w-full sm:max-w-xs">
            <input
              onChange={(e) => handleChange('name', e.target.value)}
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
            onChange={(e) => handleChange('category', e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="">All Categories</option>
            {categories?.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {/* Brand */}
          <select
            onChange={(e) => handleChange('brand', e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>


        </div>

        {/* Sort */}
        <div className="w-full sm:w-auto">
          <select
            onChange={(e) => handleChange('price', e.target.value)}
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

      <div className='mt-3 mb-10'>
        <button onClick={handleReset} className="btn btn-sm btn-accent">
          Reset Filters
        </button>
      </div>

      {
        products.length === 0 ?
          <NoProductsFound /> :

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              products.map((product) => <ProductCard key={product.id} product={product} />)
            }
          </div>
      }

      {/* Pagination */}

       {
        totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">

            {/* Prev Button */}
            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
             className="px-3 py-2 rounded disabled:opacity-50 border border-primary"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 rounded ${
                    page === pageNumber
                      ? 'bg-primary text-white'
                      : 'bg-base-100 border border-primary'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
              className="px-3 py-2 rounded disabled:opacity-50 border border-primary"
            >
              Next
            </button>

          </div>
        )
      }

    </div>
  )
}

export default AllProductsClient