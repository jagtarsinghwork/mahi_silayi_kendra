import React, { FC, ReactNode } from "react";
import { Roboto } from "next/font/google";
import Dashboard from "@/app/dashboard/page";
import { Inter } from 'next/font/google';
// import "quill/dist/quill.core.css";

type Props = {
  children: ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-roboto',
});
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const ParentLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} antialiased`}>{children}</body>
    </html>
  );
};

export default ParentLayout;