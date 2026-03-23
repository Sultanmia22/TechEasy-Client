import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import NextAuthProviders from "@/Providers/NextAuthProviders";



export const metadata: Metadata = {
  title: "TechEasy",
  description: "A Tech Product E-Commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      
      <body
        className={`antialiased`}
      >

        <NextAuthProviders>
          <Navbar />
          
        {children}

        <ToastContainer />
        
        </NextAuthProviders>

      </body>
    </html>
  );
}
