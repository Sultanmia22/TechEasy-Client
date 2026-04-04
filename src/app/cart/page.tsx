'use client'
import CartItem from '@/Components/CartComponent/CartItem';
import OrderSummary from '@/Components/CartComponent/OrderSummary';
import useAuth from '@/hook/useAuth';
import useAxiosSecure from '@/hook/useAxiosSecure';
import type { ICartItem} from '@/types/cart.interface';
import { useEffect, useState } from 'react';


const CartPage = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
 
  const [cartItems,setCartItems] = useState<ICartItem[]>([])
  const [totalPrice,setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const getItemByEmail = async () => {
      if (!user?.email) return;
      try{
        const res = await axiosSecure.get(`/cart/getCart/${user.email}`)
        const data = res.data.data.cart[0].items 
        setCartItems(data)
        setTotalPrice(res.data.data.subTotal)
      }
      catch(er:any){
        console.log(er.response?.data?.message || er.message)
      }
    }
    getItemByEmail()
  },[axiosSecure,user])




  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className='flex flex-col md:flex-row  gap-6'>
            <div className='w-full flex-1 min-h-24 p-4'>
                 <div className='flex flex-col'>
                {
                   cartItems?.map((cartItem) => <CartItem key={cartItem.productId._id} item={cartItem}></CartItem>)
                }
                </div> 
            </div>
            <div className='w-full flex-1  min-h-24 p-4'>
              <OrderSummary  totalPrice={totalPrice}/>
            </div>
        </div>
    </div>
  );
};

export default CartPage;