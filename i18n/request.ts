// i18n/request.ts
// import { notFound } from 'next/navigation';
import en from './messages/en.json';
import hi from './messages/hi.json';

const LANGS: Record<string, any> = {
  en,
  hi,
};

export default async function getRequestConfig(locale: string) {
  // if (!LANGS[locale]) notFound();
  if (!LANGS[locale]) {
    return {
      locale: 'en',
      messages: LANGS['en'],
    };
  }
}
