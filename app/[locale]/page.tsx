// app/[locale]/page.tsx
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import ClientHome from '../home/page';

// Note: We need to make this an async function to use await
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // This is important for static generation
  setRequestLocale(locale);

  // Since we can't use hooks in async functions, we need to pass data to a client component
  return <MainPageContent />;
}

// Create a client component that uses the translation hook
function MainPageContent() {
  const t = useTranslations();

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold">{t('welcome')}</h1>
      {/* Your main page content here */}
      <ClientHome locale="en" />
    </div>
  );
}
