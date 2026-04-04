'use client'
import CartItem from '@/Components/CartComponent/CartItem';
import NoCartAvailable from '@/Components/CartComponent/NoCartAvailable';
import OrderSummary from '@/Components/CartComponent/OrderSummary';
import TextLoader from '@/Components/Loading/TextLoader';
import useAuth from '@/hook/useAuth';
import useAxiosSecure from '@/hook/useAxiosSecure';
import type { ICartItem } from '@/types/cart.interface';
import { FaChessKing } from 'react-icons/fa';
import useSWR from 'swr';


const CartPage = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()

 
  const fetcher = (url: string) => axiosSecure.get(url).then(res => res.data);


  const { data, mutate, isLoading } = useSWR(
    user?.email ? `/cart/getCart/${user.email}` : null,
    fetcher
  );


  const cartItems: ICartItem[] = data?.data?.cart[0]?.items || [];
  const totalPrice = data?.data?.subTotal || 0;

  if (isLoading) return <TextLoader />

  if(cartItems.length === 0){
    return <NoCartAvailable />
  }
  

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className='flex flex-col md:flex-row  gap-6'>
            <div className='w-full flex-1 min-h-24 p-4'>
                 <div className='flex flex-col'>
                {
                   cartItems?.map((cartItem) => <CartItem key={cartItem.productId._id}  item={cartItem}  mutate={mutate}></CartItem>)
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