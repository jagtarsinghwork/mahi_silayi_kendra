import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Home from '@/app/home/page';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Mahi silayi Kendra',
  description: '',
  keywords: [
    'Mahi silayi Kendra',
    'laddu',
    'gopal ji',
    'beautifull',
    'dresses',
  ],
};

export default function Page() {
  const playStoreAppUrl =
    'https://play.google.com/store/apps/details?id=com.laddu.gopalji';

  const imageData = [
    '/laddu_gopal_ji_1.jpeg',
    '/laddu_gopal_ji_2.jpeg',
    '/laddu_gopal_ji_3.jpeg',
    '/laddu_gopal_ji_4.jpeg',
    '/laddu_gopal_ji_5.jpeg',
    '/laddu_gopal_ji_6.jpeg',
    '/laddu_gopal_ji_7.jpeg',
    '/laddu_gopal_ji_8.jpeg',
    '/laddu_gopal_ji_9.jpeg',
    '/laddu_gopal_ji_10.jpeg',
    '/laddu_gopal_ji_11.jpeg',
    '/laddu_gopal_ji_12.jpeg',
    '/laddu_gopal_ji_13.jpeg',
    '/laddu_gopal_ji_14.jpeg',
    '/laddu_gopal_ji_15.jpeg',
    '/laddu_gopal_ji_16.jpeg',
    '/laddu_gopal_ji_17.jpeg',
    '/laddu_gopal_ji_18.jpeg',
    '/laddu_gopal_ji_19.jpeg',
    '/laddu_gopal_ji_20.jpeg',
    '/laddu_gopal_ji_21.jpeg',
    '/laddu_gopal_ji_22.jpeg',
    '/laddu_gopal_ji_23.jpeg',
    '/laddu_gopal_ji_24.jpeg',
    '/laddu_gopal_ji_25.jpeg',
    '/laddu_gopal_ji_26.jpeg',
    '/laddu_gopal_ji_27.jpeg',
    '/laddu_gopal_ji_28.jpeg',
    '/laddu_gopal_ji_29.jpeg',
    '/laddu_gopal_ji_30.jpeg',
    '/laddu_gopal_ji_31.jpeg',
    '/laddu_gopal_ji_32.jpeg',
    '/laddu_gopal_ji_33.jpeg',
    '/laddu_gopal_ji_34.jpeg',
    '/laddu_gopal_ji_35.jpeg',
    '/laddu_gopal_ji_36.jpeg',
    '/laddu_gopal_ji_37.jpeg',
    '/laddu_gopal_ji_38.jpeg',
    '/laddu_gopal_ji_39.jpeg',
    '/laddu_gopal_ji_40.jpeg',
    '/laddu_gopal_ji_41.jpeg',
    '/laddu_gopal_ji_42.jpeg',
    '/laddu_gopal_ji_43.jpeg',
    '/laddu_gopal_ji_44.jpeg',
    '/laddu_gopal_ji_45.jpeg',
    '/laddu_gopal_ji_46.jpeg',
    '/laddu_gopal_ji_47.jpeg',
    '/laddu_gopal_ji_48.jpeg',
    '/laddu_gopal_ji_49.jpeg',
  ];

  const cities = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Patna',
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Vadodara',
  ];
  // app/page.tsx

  redirect('/en'); // Redirect to default locale

  // return <></>;
}
