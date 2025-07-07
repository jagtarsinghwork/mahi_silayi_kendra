import { Layout } from "lucide-react";
// add here home and footer 
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// import ParentLayout from "@/components/common/ParentLayout";
import APILayout from "@/components/Layouts/APILayout";
import { Toaster } from "@/components/ui/sonner";





export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      <Header />
        <APILayout>{children}</APILayout>
        <Toaster />

    </>
  );
}

