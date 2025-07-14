import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
