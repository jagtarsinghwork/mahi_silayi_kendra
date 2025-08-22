import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import './globals.css';
import '../sass/styles.scss';

export const metadata: Metadata = {
  title: 'Laddu Gopal Dresses - App Developer Platform | Test & Launch Apps',
  description:
    'Unlock your potential as an app developer with Laddu Gopal ji! The ultimate platform (platform - मंच) for developers, companies, and freelancers to test and launch apps on Play Store. Easily submit apps, connect with real-world testers, and grow your app business (business - व्यवसाय) with our all-in-one solution.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextIntlClientProvider locale="en">{children}</NextIntlClientProvider>
        {/* The children prop will be rendered inside the NextIntlClientProvider */}
        {/* This allows for internationalization support in the application */}
      </body>
    </html>
  );
}
