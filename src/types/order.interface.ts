export interface ShippingInfo {
  firstName: string;
  lastName: string;
  address: string;
  upazila: string;
  district: string;
  mobile: string;
  email: string;
  comment?: string; // Optional thakte pare
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface IOrder {
  _id: string;
  orderDate: string | Date;
  shippingInfo: ShippingInfo;
  items: OrderItem[];
  totalPrice: number;
  paymentStatus: 'paid' | 'pending' | 'failed'; 
  stripeSessionId: string;
}