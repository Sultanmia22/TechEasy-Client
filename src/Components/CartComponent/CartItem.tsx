'use client';





interface CartItemProps {

    item: {

        _id: string;

        name: string;

        price: number;

        quantity: number;

        image: string;

    };

}



const CartItem: React.FC<CartItemProps> = ({ item }) => {

    return (

        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-2 shadow-md rounded-lg">

            <div className="flex flex-col md:flex-row gap-2">

                <div className="w-full h-40 md:w-30 md:h-30 ">

                    <img src={item?.image} alt="" className="w-full h-full object-cover rounded-xl" />

                </div>

                <div>

                    <h2 className=" md:text-sm text-primary font-bold">{item?.name}</h2>

                    <p><span className="font-medium text-sm text-neutral">Tk</span> <span className="text-neutral font-semibold">{item?.price}</span></p>

                    <p> <span className="text-sm text-neutral">Quantity:</span> <span className="text-sm font-semibold text-neutral">{item?.quantity}</span></p>

                </div>

            </div>

            <div className="flex items-center justify-center gap-3 ">
                <button className="btn btn-sm">-</button>
                <button className="btn btn-sm">+</button>
                <button className="btn btn-outline btn-accent">remove</button>
            </div>

        </div>

    );

};



export default CartItem;