const order = {
  email: "rahim@example.com",
  orders: [
    {
      orderDate: new Date("2025-03-15"),
      shippingInfo: {
        fullName: "রহিম মিয়া",
        address: "৩৫/ক, মতিঝিল",
        city: "ঢাকা",
        postalCode: "1200",
        country: "বাংলাদেশ",
        phone: "01712345678"
      },
      items: [
        {
          productName: "সাদা শার্ট",
          quantity: 2,
          price: 850
        },
        {
          productName: "জিন্স প্যান্ট",
          quantity: 1,
          price: 1200
        }
      ],
      totalPrice: 2900,
      paymentStatus: "paid",
      stripeSessionId: "sess_abc123"
    },
    {
      orderDate: new Date("2025-03-20"),
      shippingInfo: {
        fullName: "রহিম মিয়া",
        address: "৩৫/ক, মতিঝিল",
        city: "ঢাকা",
        postalCode: "1200",
        country: "বাংলাদেশ",
        phone: "01712345678"
      },
      items: [
        {
          productName: "জুতো",
          quantity: 1,
          price: 1800
        }
      ],
      totalPrice: 1800,
      paymentStatus: "pending",
      stripeSessionId: "sess_def456"
    }
  ]
}

const creatOrder = (order) => {
    const pendingOrder = order.orders.filter((order) => order.paymentStatus == 'pending')
    return pendingOrder 
}

const result = creatOrder(order)
console.log(JSON.stringify(result))