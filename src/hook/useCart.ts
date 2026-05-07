import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface AddToCartParams {
  userEmail: string | null | undefined;
  productId: string;
  quantity: number;
}

export const useCart = () => {

    const router = useRouter()

    const addToCart = async ({userEmail,productId,quantity}:AddToCartParams) => {
        try {

            const cartData = {
                userEmail,
                productId: productId,
                quantity: quantity
            };

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cart/addToCart`, cartData)

            if(res.data.success){
                    toast.success(res.data.message)
                    router.push('/cart')
                  }
        }
        catch (er) {
           console.error("Cart Error:", er);
      toast.error("Something went wrong!");
        }
    }

    return { addToCart };
}

export default useCart