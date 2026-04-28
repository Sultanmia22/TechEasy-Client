"use client";
import type { IWishlist } from "@/types/dashborad.interface";
import Image from "next/image";
import Link from "next/link";
import { FaTrash, FaStar } from "react-icons/fa";

interface IProps {
  item: IWishlist;
}

const Wishlist = ({ item }: IProps) => {
  const product = item?.productId;

  return (
    <div className="group relative bg-base-100 dark:bg-base-200 border border-base-300 p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">

  
      <button className="absolute top-2 right-2 z-10 p-2 bg-white/80 hover:bg-red-500 hover:text-white rounded-full transition">
        <FaTrash size={12} />
      </button>

     
      <div className="relative w-full h-36 overflow-hidden rounded-xl bg-base-200">
        <Image
          src={product?.image || "/fallback.png"}
          alt={product?.name || "Product"}
          fill
          className="object-cover p-2 group-hover:scale-110 transition-transform duration-500"
        />


        <div className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
          Wishlist
        </div>


        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <Link
            href={`/all-product/${product?._id}`}
            className="btn btn-xs btn-primary"
          >
            View
          </Link>
        </div>
      </div>


      <div className="mt-3 space-y-1">
        <h5 className="font-bold text-sm text-base-content line-clamp-1 group-hover:text-primary transition">
          {product?.name}
        </h5>


        <div className="flex items-center gap-1 text-xs text-yellow-500">
          <FaStar />
          <span>{product?.rating || 4.5}</span>
        </div>

        <p className="text-primary font-black text-sm">
          ৳{product?.price?.toLocaleString()}
        </p>


        <p
          className={`text-xs font-medium ${
            product?.stock > 0 ? "text-secondary" : "text-accent"
          }`}
        >
          {product?.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      <div className="mt-4">
        <button
          disabled={product?.stock === 0}
          className="w-full py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Wishlist;