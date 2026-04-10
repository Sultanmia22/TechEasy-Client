'use client'
import CartItem from '@/Components/CartComponent/CartItem';
import NoCartAvailable from '@/Components/CartComponent/NoCartAvailable';
import OrderSummary from '@/Components/CartComponent/OrderSummary';
import TextLoader from '@/Components/Loading/TextLoader';
import useAuth from '@/hook/useAuth';
import useAxiosSecure from '@/hook/useAxiosSecure';
import type { ICartItem } from '@/types/cart.interface';
import { useQuery } from '@tanstack/react-query';
import { FaChessKing } from 'react-icons/fa';



const CartPage = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()

const { data, isLoading, refetch } = useQuery({
    queryKey: ['cart', user?.email],
    enabled: !!user?.email, // User thaklei kebol fetch hobe
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart/getCart/${user?.email}`);
      return res.data;
    },
  });


  const cartItems: ICartItem[] = data?.data?.cart[0]?.items || [];
  const totalPrice = data?.data?.subTotal || 0;

  if (isLoading) return <TextLoader />

  if(cartItems.length === 0){
    return <NoCartAvailable />
  }
  

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className='flex flex-col md:flex-row justify-between gap-6'>
            <div className='w-full flex-1 min-h-24 p-4'>
                 <div className='flex flex-col'>
                {
                   cartItems?.map((cartItem) => <CartItem key={cartItem.productId._id}  item={cartItem}  mutate={refetch}></CartItem>)
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