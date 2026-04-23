'use client';

import useAxiosSecure from "@/hook/useAxiosSecure";
import type { CartItemProps } from "@/types/cart.interface";
import Image from "next/image";
import { toast } from "react-toastify";


const CartItem: React.FC<CartItemProps> = ({ item ,mutate}) => {

    const axiosSecure = useAxiosSecure()

    // Delete cart Item form cart page 
    const handleRemoveCart = async (id:string) => {
        try{
            const res = await axiosSecure.patch(`${process.env.NEXT_PUBLIC_API_URL}/cart/removeCart/${id}`)

            if(res.status === 200 || res.data.success){
                toast.success(res?.data.message)
            }
            mutate();
        }
        catch(er:any){
            const erMessage = er.response?.data.message;
            toast.error(erMessage)
        }
    } 

    return (

        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-2 shadow-md rounded-lg dark:border dark:border-primary">

            <div className="flex flex-col md:flex-row gap-2">

                <div className="w-full h-40 md:w-30 md:h-30 ">

                    <Image 
                     src={item?.productId?.image} 
                     alt="" 
                     className="w-full h-full object-cover rounded-xl"
                     width={200}
                     height={200}
                     />
    
                </div>

                <div>

                    <h2 className=" md:text-sm text-primary font-bold">{item?.productId?.name}</h2>

                    <p><span className="font-medium text-sm text-neutral">Tk</span> <span className="text-neutral font-semibold">{item?.productId?.price}</span></p>

                    <p> <span className="text-sm text-neutral">Quantity:</span> <span className="text-sm font-semibold text-neutral">{item?.quantity}</span></p>

                </div>

            </div>

            <div className="flex items-center justify-center gap-3 ">
                <button className="btn btn-sm">-</button>
                <button className="btn btn-sm">+</button>
                <button onClick={ () =>  handleRemoveCart(item?.productId?._id)} className="btn btn-outline btn-accent">remove</button>
            </div>

        </div>

    );

};



export default CartItem;