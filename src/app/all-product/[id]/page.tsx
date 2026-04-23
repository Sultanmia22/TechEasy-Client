import React from 'react'
import ProductDetails from '@/Components/AllProducts/ProductDetails'

const getProductById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`)

        const data = await res.json();
        return data.data;
    }
    catch (er: any) {
        console.log(er.message)
    }
}

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {

    const { id } = await params;

    const singleProduct = await getProductById(id)


    return (
        <div>
            <ProductDetails singleProduct={singleProduct} />
        </div>
    )
}

export default ProductDetailsPage