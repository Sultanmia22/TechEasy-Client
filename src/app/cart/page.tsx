'use client';
import CartItem from '@/Components/CartComponent/CartItem';
import OrderSummary from '@/Components/CartComponent/OrderSummary';
import Link from 'next/link';

const CartPage = () => {

  // Dummy cart data (later API diye replace korba)
  const cartItems = [

    {
      _id: "2",
      name: "iPhone 15 Pro Max",
      price: 148000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1696446701796-da61225697cc"
    }
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className='flex flex-col md:flex-row  gap-6'>
            <div className='w-full flex-1 min-h-24 p-4'>
                <div className='flex flex-col'>
                {
         
                    cartItems.map((item) => <CartItem key={item._id} item={item}></CartItem>)
                }
                </div>
            </div>
            <div className='w-full flex-1  min-h-24 p-4'>
              <OrderSummary />
            </div>
        </div>
    </div>
  );
};

export default CartPage;