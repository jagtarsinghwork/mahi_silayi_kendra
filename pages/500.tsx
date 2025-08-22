// pages/500.js (CORRECT)
import Head from 'next/head';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error</title>
      </Head>
      <div>
        <h1>500 - Server-side error occurred</h1>
      </div>
    </>
  );
}
