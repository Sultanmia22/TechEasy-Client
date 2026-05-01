import OrdersDetails from '@/Components/Dashborad/OrderDetails/OrdersDetails'
import { ArrowLeft, } from 'lucide-react'
import React from 'react'


const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {

  const { orderId } = await params;

  return (
    <div>
      <div className='py-5'>
        <OrdersDetails orderId={orderId} />
      </div>
    </div>
  )
}

export default OrderDetailsPage  