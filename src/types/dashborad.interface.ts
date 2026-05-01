export interface Istats {
    totalOrder: number;
    totalPendingOrder: number;
    totalDeliveredOrder: number;
    totalWishList: number;
}

export interface IWishlist {
    productId: {
        brand: string,
        category: string,
        description: string,
        id: string,
        image: string,
        name: string,
        price: number,
        rating: number,
        specs: {
            display: string,
            processor: string,
            ram: string,
            storage: string
        },
        stock: number
        _id: string
    }

}

export interface IRecentOrder {
  _id: string;
  orderDate: string;
  totalPrice: number;
  paymentStatus: string;
  orderStatus: [string];
  stripeSessionId: string;
  shippingInfo: {
    firstName: string;
    lastName: string;
    address: string;
    upazila: string;
    district: string;
    mobile: string;
    email: string;
    comment: string;
  };
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

export interface IDashboradData {
    stats : Istats,
    wishListItems : IWishlist[],
    recentOrders : IRecentOrder[]
}