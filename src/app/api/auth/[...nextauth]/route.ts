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

          // result.data.data theke user info ar token nibo
          if (res.status === 200 && res.data.success) {
            const { user, accessToken } = res.data.data;
            
            return {
              ...user,
              id: user._id, 
              accessToken
            };
          }

          return null;
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || "Something is wrong!";
          throw new Error(errorMessage);
        }
      },
    }),

    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    })
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/socialLogin`, {
            name: user.name,
            email: user.email,
            image: user.image,
          });

          if (response.status === 200 && response.data.data) {
            const backendUser = response.data.data.user;
            user.id = backendUser._id;
            user.role = backendUser.role;
            user.accessToken = response.data.data.accessToken;
          }
        } catch (er) {
          console.error("Social Login Error:", er);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || 'customer';
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };