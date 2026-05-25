"use client";
import useAxiosSecure from "@/hook/useAxiosSecure";
import useCart from "@/hook/useCart";
import type { IWishlist } from "@/types/dashboradCustomer.interface";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTrash, FaStar, FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";

interface IProps {
  item: IWishlist;
  refetch: () => void;
}

const Wishlist = ({ item ,refetch}: IProps) => {

  const axiosSecure = useAxiosSecure()

  const {addToCart} = useCart()

  const { data } = useSession()

  const product = item?.productId;

  const [qty, setQty] = useState(1);

  // Handle Quantity Manage Function
  const handleQty = async (type: "inc" | 'dec') => {

    setQty((prev) => {

      if (type === 'inc') {

        if (prev >= product?.stock) {
          toast.warn(`Only ${product?.stock} items available in stock!`)
          return prev
        };

        return prev + 1
      }

      if (type === "dec") {

        if (prev <= 1) {

          toast.warn('Minimum quantity is 1!')

          return prev
        };

        return prev - 1;
      }

      return prev;
    })

  }

  // Hanlde Add To Cart Function 
  const handleAddToCart = async () => {
    addToCart({
      userEmail: data?.user?.email,
      productId: product?._id,
      quantity: qty
    })
  }

  const handleDelWishlist = async (email:string,id:string) => {
    try{
        const res = await axiosSecure.delete(`/wishlist/deleteWishlist?customerEmail=${email}&productId=${id}`)

        if(res.status === 200 && res.data.success === true){
          toast.success(res.data.message)
        }
        refetch()
    }
    catch(er){
      console.log(er)
    }
  }


  return (
    <div className="group relative bg-base-100 dark:bg-base-200 border border-base-300 p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">

      <button 
      onClick={() => handleDelWishlist(data?.user?.email ?? "", product?._id ?? "")}
      className="absolute top-2 right-2 z-10 p-2 bg-white/80 hover:bg-red-500 hover:text-white rounded-full transition">
        <FaTrash size={12} />
      </button>


      <div className="relative w-full h-56 overflow-hidden rounded-xl bg-base-200">
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
          className={`text-xs font-medium ${product?.stock > 0 ? "text-secondary" : "text-accent"
            }`}
        >
          {product?.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3">

        {/* Quantity Control */}
        <div className="flex items-center justify-between bg-base-200 border border-base-300 rounded-xl px-3 py-2">

          <span className="text-xs text-neutral">Quantity</span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQty('dec')}
              disabled={qty <= 0}
              className={` w-7 h-7 flex items-center justify-center rounded-md bg-base-100 hover:bg-primary/10 text-base-content hover:text-primary transition`}
            >
              <FaMinus size={10} />
            </button>

            <span className="w-6 text-center text-sm font-bold">
              {qty}
            </span>

            <button
              onClick={() => handleQty('inc')}
              className={` w-7 h-7 flex items-center justify-center rounded-md bg-base-100 hover:bg-primary/10 text-base-content hover:text-primary transition`}
            >
              <FaPlus size={10} />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
        onClick={() => handleAddToCart()}
          disabled={product?.stock === 0}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaCartPlus size={14} />
           Add {qty} to Cart
        </button>

      </div>
    </div>
  );
};

export default Wishlist;