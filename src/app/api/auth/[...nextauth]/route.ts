import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
     CredentialsProvider({
    
    name: 'Credentials',
    
    credentials: {
      email: { label: "email", type: "email", placeholder: "" },
      password: { label: "Password", type: "password" }
    },
    
    async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Provide Email and Password");
        }

        try {
          // ব্যাকএন্ডে রিকোয়েস্ট পাঠানো হচ্ছে
          const res = await axios.post(`http://localhost:5000/api/v1/users/login`, {
            email: credentials.email,
            password: credentials.password,
          });

          const result = res.data

          
          if (res.status === 200) {
            return result.data
          }
          
          return null;
        } catch (error:any) {
          // Axios এর এরর মেসেজ হ্যান্ডেল করা
          const errorMessage = error.response?.data?.message || "Something is wrong!";
          throw new Error(errorMessage);
        }
      },

  })
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }