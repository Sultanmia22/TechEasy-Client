'use client';
import OrderReceiptDownloadBtn from '@/Components/Button/OrderReceiptDownloadBtn';
import Logo from '@/Components/Logo/Logo';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';

const PaymentSuccessPage = () => {
  const receiptRef = useRef<HTMLDivElement>(null);

   const searchParams = useSearchParams();

   const orderId = searchParams.get('order_id')
   const customerEmail = searchParams.get('email')

   const order = {
  _id: "66169c3a2f8d4b2a1c9e8d7f", 
  orderDate: new Date("2026-04-10T14:30:00.000Z"),
  paymentStatus: "paid", 
  totalPrice: 2580, 
  stripeSessionId: "cs_test_a1b2c3d4e5f6g7h8i9j0",
  shippingInfo: {
    firstName: "Md Sultan",
    lastName: "Mia",
    address: "House 12, Road 5, Block-C",
    upazila: "Khilkhet",
    district: "Dhaka-City",
    mobile: "017XXXXXXXX",
    email: "sultan@example.com",
    comment: "Please deliver after 5 PM",
  },
  items: [
    {
      productId: "prod_001",
      name: "Wireless Mechanical Keyboard",
      price: 850,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop",
    },
    {
      productId: "prod_002",
      name: "Ergonomic Optical Mouse",
      price: 800,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2070&auto=format&fit=crop",
    }
  ]
};

  return (
<div className="max-w-2xl mx-auto p-6 bg-base-100 border border-base-300 shadow-xl rounded-2xl my-10 transition-colors duration-300">
  {/* Header Section */}
  <div className='p-6' ref={receiptRef}>
  
  <div className="text-center mb-8">
   
    <div className="mb-3">
      <Logo />
      <p className="text-xs text-neutral ">Your E-Commerce Partner</p>
    </div>
   

    <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h1 className="text-3xl font-bold text-base-content">Thank You!</h1>
    <p className="text-neutral font-medium">Your payment has been successfully processed.</p>
  </div>

  
  <div className="bg-base-200 p-4 rounded-xl mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <p className="text-xs text-neutral uppercase tracking-wider font-bold">Order ID</p>
      <p className="font-mono text-base-content break-all">{order._id}</p>
    </div>
    <div className="md:text-right">
      <p className="text-xs text-neutral uppercase tracking-wider font-bold">Status</p>
      <span className="badge badge-primary font-bold uppercase">{order.paymentStatus}</span>
    </div>
  </div>

  {/* Shipping Details */}
  <div className="grid md:grid-cols-2 gap-6 mb-8 border-b border-base-300 pb-6">
    <div>
      <h2 className="text-lg font-bold text-primary mb-2">Shipping Information</h2>
      <div className="text-base-content space-y-1">
        <p className="font-semibold">{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
        <p className="text-sm opacity-80">{order.shippingInfo.address}, {order.shippingInfo.upazila}</p>
        <p className="text-sm opacity-80">{order.shippingInfo.district}</p>
        <p className="text-sm font-medium mt-2">📞 {order.shippingInfo.mobile}</p>
      </div>
    </div>
    <div className="md:text-right">
      <h2 className="text-lg font-bold text-primary mb-2">Date</h2>
      <p className="text-base-content">
        {new Date(order.orderDate).toLocaleDateString('en-US', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        })}
      </p>
    </div>
  </div>

  {/* Items List */}
  <div className="mb-8">
    <h2 className="text-lg font-bold text-primary mb-4">Order Items</h2>
    <div className="space-y-3">
      {order.items.map((item: any) => (
        <div key={item.productId} className="flex justify-between items-center text-base-content">
          <div className="flex flex-col">
            <span className="font-medium">{item.name}</span>
            <span className="text-xs text-neutral">Quantity: {item.quantity}</span>
          </div>
          <span className="font-semibold">{(item.price * item.quantity).toLocaleString()} BDT</span>
        </div>
      ))}
    </div>
  </div>

  {/* Total Price */}
  <div className="border-t-2 border-dashed border-base-300 pt-4 flex justify-between items-center">
    <span className="text-xl font-bold text-base-content">Total Paid:</span>
    <span className="text-2xl font-black text-accent">
      {order.totalPrice.toLocaleString()} BDT
    </span>
  </div>
</div>

  {/* Footer Button */}
  <div className="mt-10">
    <OrderReceiptDownloadBtn targetRef={receiptRef} orderId={order._id} />
  </div>
</div>
  );
};

export default PaymentSuccessPage;