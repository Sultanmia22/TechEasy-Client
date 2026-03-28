import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import NextAuthProviders from "@/Providers/NextAuthProviders";
import Footer from "@/Components/Layouts/Footer/Footer";



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
          
        <main className="flex flex-col gap-20 w-11/12 md:w-10/12 mx-5 md:mx-auto pt-5 md:pt-24">
          {children}
        </main>

        <Footer />

        <ToastContainer />
        
        </NextAuthProviders>

      </body>
    </html>
  );
}
