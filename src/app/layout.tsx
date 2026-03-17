import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar/Navbar";



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

      <Navbar />

        {children}
      </body>
    </html>
  );
}
