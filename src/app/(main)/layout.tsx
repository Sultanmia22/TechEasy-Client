import Navbar from "@/Components/Layouts/Navbar/Navbar";
import Footer from "@/Components/Layouts/Footer/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-11/12 md:w-10/12 mx-5 md:mx-auto py-5">
        {children}
      </main>
      <Footer />
    </>
  );
}