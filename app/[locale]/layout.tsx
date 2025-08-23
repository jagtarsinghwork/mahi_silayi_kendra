// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import RootLayout from '../layout';

// Add this function to generate static params for all locales
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'hi' },
    // Add more locales if you have them
  ];
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <RootLayout>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </RootLayout>
  );
}
