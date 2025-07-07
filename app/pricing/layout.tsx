//pricing layout
import React from 'react';
// import ParentLayout from '@/components/common/ParentLayout';
import APILayout from '@/components/Layouts/APILayout';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/common/Header';  




export default function PricingLayout({
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