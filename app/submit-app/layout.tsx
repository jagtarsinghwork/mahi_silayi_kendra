import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Your App | TestFire',
  description:
    'Submit your mobile app for AI-driven testing with TestFire. Follow our process to test and create your profile.',
  openGraph: {
    title: 'Submit Your App | TestFire',
    description: 'Test your app with TestFire’s professional testers and AI tools.',
    url: 'https://testfire.ai/submit-app',
  },
};

export default function SubmitAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}