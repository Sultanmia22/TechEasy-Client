export interface IDashboardStats {
    totalOrder: number;
    totalRevenue: number;
    totalPendingOrder: number;
    totalDeliveredOrder: number;
  }

export interface IRecentOrder {
    _id: string;
    orderId: string
    customerName: string;
    customerEmail: string;
    products: {
      name: string,
      quantity: string,
      image: string
    }[]
    amount: number;
    status: 'paid' | 'pending' | 'delivered' | 'cancelled' | string;
    date: string
  }

  export interface IRecentUser {
    _id: string;
    name: string;
    email: string;
    image: string;
    createdAt: string; 
  }[]

  export interface ITopProduct {
    _id: string;
    productName: string;
    productImage: string;
    totalQty: number;
    totalAmount: number;
  }

  export interface IDashboardAdminData {
    stats: IDashboardStats;
    recentOrders: IRecentOrder[];
    topProducts: ITopProduct[];
    recentUsers: IRecentUser[];
  }

  export interface TopProduct {
  _id: string
  productName: string
  productImage: string
  totalQty: number
  totalAmount: number
}