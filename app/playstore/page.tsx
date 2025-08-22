import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delhi 365: Play Satta Matka Online & Win Real Cash | Official App',
  description:
    "India's No.1 Satta Matka App! Play Kalyan Matka, Milan Day/Night, Rajdhani and win ₹5 Lakh+ daily. Instant withdrawals via UPI/Paytm. 4.7★ Rated (50K+ Downloads).",
  keywords: [
    'satta matka',
    'delhi 365 app',
    'kalyan matka',
    'play matka online',
    'satta king',
    'matka gambling',
    'dpboss',
    'milan day night',
    'rajdhani day',
    'matka result',
    'satta matka app',
    'matka fantasy game',
    'matka betting app',
    'fastest matka app',
    'matka withdrawal app',
    'satta matka 2024',
    'matka cash game',
    'delhi matka',
    'matka online play',
    'satta matka king',
  ],
  openGraph: {
    title: 'Delhi 365 - Play Satta Matka & Win ₹50,000 Daily',
    description:
      'Official Matka Gaming App | Instant Withdrawals | 24/7 Live Results',
    url: 'https://yourdomain.com',
    images: ['https://yourdomain.com/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi 365 - #1 Satta Matka App in India',
    description: 'Download now & get ₹50 free bonus!',
    images: ['https://yourdomain.com/twitter-card.jpg'],
  },
};

export default function PlayStore() {
  const playStoreAppUrl =
    'https://play.google.com/store/apps/details?id=com.delhi365';

  const imageData = [
    '/screen1.png',
    '/screen2.png',
    '/screen3.png',
    '/screen4.png',
    '/screen5.png',
  ];

  const cities = [
    'Mumbai',
    'Delhi',
    'Kolkata',
    'Hyderabad',
    'Chennai',
    'Bangalore',
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#3c4043] font-sans">
      {/* ===== Header ===== */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <div className="flex items-center">
            <div className="mr-3">
              <img
                src="/logo_bg.png"
                alt="Delhi 365 Matka App Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-medium">Delhi 365 - Satta Matka</h1>
              <div className="flex items-center text-sm text-gray-600">
                <span>Delhi Games</span>
                <span className="mx-2">•</span>
                <span>Rated for 18+</span>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <a
              href={playStoreAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a73e8] hover:bg-[#1b66c9] text-white px-4 py-2 rounded-full text-sm font-medium"
              aria-label="Download Delhi 365 Matka App"
            >
              Install Now
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <section className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/4 flex justify-center">
            <img
              src="/logo_bg.png"
              alt="Delhi 365 Matka App Icon"
              width={200}
              height={200}
              className="rounded-lg object-contain border border-gray-200"
              loading="eager"
            />
          </div>
          <div className="md:w-3/4">
            <h1 className="text-2xl font-medium mb-2">
              Delhi 365 - Play Satta Matka & Win Real Cash
            </h1>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-gray-600">4.7</span>
              </div>
              <span className="text-gray-600 mr-4">50K+ downloads</span>
              <span className="text-gray-600">Rated for 18+</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Top Matka App
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Instant Withdrawal
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                24/7 Support
              </span>
            </div>

            <a
              href={playStoreAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1a73e8] hover:bg-[#1b66c9] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors"
              aria-label="Download Delhi 365 Matka App from Play Store"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              Download Now
            </a>
          </div>
        </section>

        {/* ===== Screenshots ===== */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">App Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {imageData.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-auto">
                <img
                  src={item}
                  alt={`Delhi 365 Matka App Screenshot ${
                    index + 1
                  } - Kalyan Matka, Milan Day, Rajdhani Night`}
                  className="w-full h-auto rounded-lg border border-gray-200"
                  loading="lazy"
                  width={320}
                  height={640}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ===== About Game ===== */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">About Delhi 365 Matka</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="mb-4">
              <strong>Delhi 365</strong> is India's most trusted{' '}
              <strong>Satta Matka fantasy gaming platform</strong>, offering{' '}
              <strong>daily cash prizes, instant withdrawals</strong>, and{' '}
              <strong>24/7 live results</strong>. Play authentic Matka games
              like{' '}
              <strong>
                Kalyan Matka, Milan Day/Night, Rajdhani Day/Night, Main Mumbai,
                DPBOSS
              </strong>{' '}
              with <strong>100% fair play</strong> and{' '}
              <strong>transparent results</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong>20+ Matka Games:</strong> Kalyan, Milan, Rajdhani,
                      DPBOSS
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong>Instant Withdrawals:</strong> UPI, Paytm, Bank
                      (Min ₹100)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong>Daily Bonus:</strong> Get ₹50 free on first
                      deposit
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Game Stats:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong>Daily Payouts:</strong> ₹5 Lakh+
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong>Withdrawal Time:</strong> Under 5 minutes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong>Customer Rating:</strong> 4.7/5 (10K+ Reviews)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Popular in Cities:</h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Features ===== */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">
            Why Delhi 365 is #1 Matka App
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Fastest Matka Results
                  </h3>
                  <p className="text-gray-600">
                    Live updates for Kalyan, Milan, Rajdhani with 99.9% accuracy
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Cloud-Based Security
                  </h3>
                  <p className="text-gray-600">
                    256-bit encryption & RNG certified fair play
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Highest Payouts</h3>
                  <p className="text-gray-600">
                    90% return rate - Best in industry
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">24/7 Expert Support</h3>
                  <p className="text-gray-600">
                    Chat with Matka veterans for strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ Schema ===== */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">FAQs</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  question: 'How to play Matka on Delhi 365?',
                  answer:
                    '1. Register with mobile number → 2. Deposit minimum ₹50 → 3. Choose Kalyan/Milan/Rajdhani game → 4. Predict numbers → 5. Win real cash!',
                },
                {
                  question: 'Is Delhi 365 legal in India?',
                  answer:
                    "Yes, we operate as a fantasy prediction platform complying with Indian gaming laws. We don't accept bets from prohibited states.",
                },
                {
                  question: 'How fast are withdrawals?',
                  answer:
                    'Most withdrawals complete in 2-5 minutes to UPI/Paytm. Bank transfers may take 1-2 hours.',
                },
                {
                  question: 'What is the minimum deposit?',
                  answer:
                    '₹50 for first deposit (get ₹50 bonus). Subsequent deposits can be ₹20 or more.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="mb-6 pb-6 border-b last:border-0"
                >
                  <h3 itemProp="name" className="font-semibold text-lg mb-2">
                    {faq.question}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Win Big?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join 50,000+ players winning ₹5 Lakh+ daily on India's fastest Matka
            app
          </p>
          <a
            href={playStoreAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Download Delhi 365 Matka App Now"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
            </svg>
            Download & Get ₹50 Free
          </a>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Trust Badges */}
          {/* <div className="flex flex-wrap justify-center gap-6 mb-6">
            <img
              src="/ssl-secure.png"
              alt="SSL Secure"
              width={120}
              height={50}
              loading="lazy"
            />
            <img
              src="/google-play-badge.png"
              alt="Google Play"
              width={120}
              height={50}
              loading="lazy"
            />
            <img
              src="/verified-app.png"
              alt="Verified App"
              width={120}
              height={50}
              loading="lazy"
            />
          </div> */}

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {/* SSL Secure Badge */}
            <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2d8b43"
                className="w-8 h-8 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-gray-800">SSL Secure</span>
            </div>

            {/* Google Play Badge */}
            <div className="bg-black p-2 rounded-lg flex items-center justify-center h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                className="w-6 h-6 mr-2"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zM14.982 11.25l2.3-2.302L5.346 2.315l8.636 8.935zM5.346 21.687l10.936-6.333-2.3-2.301-8.636 8.634z" />
              </svg>
              <span className="text-white font-medium">Google Play</span>
            </div>

            {/* Verified App Badge */}
            <div className="bg-blue-50 p-3 rounded-lg shadow-sm flex items-center justify-center h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1a73e8"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-blue-800">Verified App</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Games</h3>
              <ul className="space-y-2">
                {[
                  'Kalyan Matka',
                  'Milan Day',
                  'Rajdhani Night',
                  'DPBOSS',
                  'Main Mumbai',
                ].map((game) => (
                  <li key={game}>
                    <Link
                      href={`/games/${game.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {game}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/how-to-play"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    How to Play
                  </Link>
                </li>
                <li>
                  <Link
                    href="/withdrawal-guide"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Withdrawal Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/responsible-gaming"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Responsible Gaming
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <Link href="https://wa.me/919876543210" aria-label="WhatsApp">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </Link>
                <Link href="https://t.me/delhi365" aria-label="Telegram">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 border-t pt-6">
            <p>
              © {new Date().getFullYear()} Delhi Games. All rights reserved.
            </p>
            <p className="mt-1">
              For entertainment purposes only. Must be 18+ to play.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== JSON-LD Schema ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'Delhi 365 - Satta Matka Fantasy Game',
            description: 'Play Matka games online and win cash prizes daily.',
            applicationCategory: 'GameApplication',
            operatingSystem: 'Android',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'INR',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.7',
              ratingCount: '1240',
            },
          }),
        }}
      />
    </div>
  );
}
