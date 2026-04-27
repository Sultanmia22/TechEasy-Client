export interface stats {
    otalOrder: number;
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
    
}