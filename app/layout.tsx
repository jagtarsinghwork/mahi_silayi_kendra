import type { Metadata } from "next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import APILayout from "@/components/Layouts/APILayout";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "./ReactQueryProvider";
import "./globals.css";
import "../sass/styles.scss";

export const metadata: Metadata = {
  title: "DELHI-365",
  description:
    "Unlock your potential as an app developer with delhi 365! The ultimate platform (platform - मंच) for developers, companies, and freelancers to test and launch apps on Play Store. Easily submit apps, connect with real-world testers, and grow your app business (business - व्यवसाय) with our all-in-one solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <APILayout>{children}</APILayout>
            {process.env.NODE_ENV === "development" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
