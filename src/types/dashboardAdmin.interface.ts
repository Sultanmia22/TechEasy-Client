export interface IDashboardStats {
    totalOrder: number;
    totalRevenue: number;
    totalPendingOrder: number;
    totalDeliveredOrder: number;
  }

export interface IRecentOrder {
    _id: string;
    customerName: string;
    productName: string;
    productImage: string;
    amount: number;
    status: 'paid' | 'pending' | 'delivered' | 'cancelled' | string;
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