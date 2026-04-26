
import ClientProviders from "@/Providers/LayoutProvider";
import "./globals.css"; 
import type { Metadata } from "next";
import ConditionalLayout from "@/Components/Layouts/ConditionalLayout";

// মেটাডেটা এখানেই থাকবে
export const metadata: Metadata = {
  title: "TechEasy - E-Commerce Platform",
  description:
    "TechEasy is your go-to online store for tech products in Bangladesh.",
  keywords: [
    "TechEasy",
    "E-Commerce",
    "Tech Products",
    "Bangladesh",
    "Online Shopping",
  ],
  authors: [{ name: "TechEasy Team", url: "https://techeasy.com.bd" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "TechEasy - E-Commerce Platform",
    description: "Shop tech products online easily and securely with TechEasy.",
    url: "https://techeasy.com.bd",
    siteName: "TechEasy",
    images: [
      {
        url: "https://techeasy.com.bd/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechEasy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechEasy - E-Commerce Platform",
    description: "Shop tech products online easily and securely with TechEasy.",
    images: ["https://techeasy.com.bd/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body className="antialiased">
       <ClientProviders>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
