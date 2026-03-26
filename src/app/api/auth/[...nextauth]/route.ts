import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {

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

          const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/login`, {
            email: credentials.email,
            password: credentials.password,
          });

          const result = res.data


          if (res.status === 200) {
            return result.data
          }

          return null;
        } catch (error: any) {
          // Axios এর এরর মেসেজ হ্যান্ডেল করা
          const errorMessage = error.response?.data?.message || "Something is wrong!";
          throw new Error(errorMessage);
        }
      },

    }),

    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    })
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      if (account?.provider === "google") {
        try {

          const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/socialLogin`, {
            name: user.name,
            email: user.email,
            image: user.image,
          })

          console.log("Backend Response Status:", response.status);

          if (response.status === 200 && response.data.data) {
            console.log(response.data.data)
          }

        }
        catch (er: any) {

        }
      }

      return true
    },

    async redirect({ url, baseUrl }) {
      return baseUrl
    },

    async session({ session, user, token }) {

      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }

      return session
    },

    async jwt({ token, user, account, profile, isNewUser }) {

      if (user) {
        token.id = (user as any)._id || (user as any).id;
        token.role = (user as any).role || 'customer'
      }

      return token
    }

  }
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }