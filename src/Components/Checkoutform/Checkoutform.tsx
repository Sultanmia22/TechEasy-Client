"use client";
import useAuth from "@/hook/useAuth";
import useAxiosSecure from "@/hook/useAxiosSecure";
import type { ICartItem } from "@/types/cart.interface";
import { useQuery } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  upazila: string;
  district: string;
  mobile: string;
  email: string;
  comment?: string;
};

const Checkoutform = () => {
  const {register,handleSubmit,watch,formState: { errors },} = useForm<FormData>();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch Cart Data 
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !!user?.email, // User thaklei kebol fetch hobe
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart/getCart/${user?.email}`);
      return res.data;
    },
  });

   const cartItems: ICartItem[] = data?.data?.cart[0]?.items || [];


  // Preview Delivery Charge 
  const district = watch("district");
  let deliveryCharge = 0;
  if (district === "dhaka-city") deliveryCharge = 80;
  else if (district) deliveryCharge = 120;

  const SubTotal = data?.data?.subTotal
  const totalPrice = SubTotal + deliveryCharge;

  // Hadle Payment 
  const onSubmit: SubmitHandler<FormData> = async (data) => {

      const formData = {
          firstName : data?.firstName,
          lastName : data.lastName,
          address: data?.address,
          upazila: data.upazila,
          district : data.district,
          mobile: data.mobile,
          email: data?.email,
          comment: data.comment
        }

        const itemPayload = cartItems.map((item:any) => ({
          productId: item.productId._id,
            name: item.productId.name,
            price: item.productId.price,
            quantity: item.quantity,
            image: item.productId.image
        }))

       const orderPayload = {
        customerEmail : user?.email,
        shippingInfo : formData,
        items : itemPayload,
        totalPrice: totalPrice
       }

    try{
      console.log('Hello Bnagladesh')
        const res = await axiosSecure.post(`${process.env.NEXT_PUBLIC_API_URL}/order/create-checkout-session`,orderPayload)

        if(res.status === 200){
          window.location.href = res.data.url;
        }
    }
    catch(er:any){
      console.log(er.response.data?.message)
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 p-6 rounded-xl shadow-md bg-base-100">
      {/* Form */}
      <form
        id="checkout-form"
        onSubmit={handleSubmit(onSubmit)}
        className="basis-3/5 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-red-500">📦</span> Shipping & Billing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label>First Name*</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              className={`input input-bordered w-full border-gray-300 focus:border-blue-500 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            <label>Last Name*</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              className={`input input-bordered w-full border-gray-300 focus:border-blue-500 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
          </div>

          <div className="sm:col-span-2">
            <label>Address*</label>
            <input
              {...register("address", { required: "Address is required" })}
              placeholder="House no, Road, Area"
              className={`input input-bordered w-full border-gray-300 focus:border-blue-500 ${
                errors.address ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            <label>Upazila/Thana*</label>
            <input
              {...register("upazila", { required: "Upazila is required" })}
              placeholder="e.g. Mirpur"
              className={`input input-bordered w-full border-gray-300 focus:border-blue-500 ${
                errors.upazila ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            <label>District</label>
            <select
              {...register("district")}
              className="input input-bordered w-full border-gray-300 focus:border-blue-500"
            >
              <option value="dhaka-city">Dhaka - City</option>
              <option value="chattogram">Chattogram</option>
              <option value="khulna">Khulna</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="mymensingh">Mymensingh</option>
              <option value="rangpur">Rangpur</option>
              <option value="shylet">Shylet</option>
              <option value="barishal">Barishal</option>
            </select>
          </div>

          <div>
            <label>Mobile*</label>
            <input
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^01[3-9]\d{8}$/,
                  message: "Valid BD number required",
                },
              })}
              placeholder="01XXXXXXXXX"
              className={`input input-bordered w-full border-gray-300 focus:border-blue-500 ${
                errors.mobile ? "border-red-500" : ""
              }`}
            />
          </div>

          <div>
            <label>Email*</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email",
                },
              })}
              placeholder="example@email.com"
              className={`input input-bordered w-full border-gray-300 focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
          </div>

          <div className="sm:col-span-2">
            <label>Comment</label>
            <textarea
              {...register("comment")}
              placeholder="Any special requirement/instruction for us?"
              rows={4}
              className="input input-bordered w-full border-gray-300 focus:border-blue-500"
            />
          </div>
        </div>
      </form>

      {/* Order Summary */}
      <div className="basis-2/5 border border-base-300 rounded-xl bg-base-100 p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold">Order Summary</h3>

        {/* Divider */}
        <div className="border-t border-base-300"></div>

        <div className="flex justify-between text-base-content/70">
          <span>Subtotal</span>
          <span>Tk {SubTotal}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300"></div>

        <div className="flex justify-between text-base-content/70">
          <span>Delivery Charge</span>
          <span>Tk {deliveryCharge}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300"></div>

        <div className="flex justify-between font-bold text-lg text-accent">
          <span>Total</span>
          <span>Tk {totalPrice}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300"></div>

        <div className="sm:col-span-2 flex justify-center pt-2">
          <button
            type="submit"
            form="checkout-form"
            className="btn btn-accent w-full sm:w-auto rounded-xl px-6 py-3"
          >
            Continue to Payment
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300"></div>

        <p className="text-sm text-gray-500 text-center">
          ⚡ We currently accept payments <strong>only via Stripe</strong>.
          Please ensure your card details are ready for a smooth checkout.
        </p>
      </div>
    </div>
  );
};

export default Checkoutform;
