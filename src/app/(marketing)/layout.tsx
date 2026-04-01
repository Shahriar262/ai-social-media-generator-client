import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      
      <main className="pt-20 flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}