import axios from "axios"

export const uploadImage = async (imageFile:File): Promise<string | null> => {
    const formData = new FormData()
    formData.append('image',imageFile)

    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY

    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`,formData)

    return response.data.data.url
}