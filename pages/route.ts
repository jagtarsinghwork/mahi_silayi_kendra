// pages/api/users.js or app/api/users/route.js (Next.js 13+)
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  try {
    // Fetch data from an external API or database
    const res = await fetch('http://192.168.31.25:4000/api/users');
    const users = await res.json();

    // Check if users were fetched successfully
    if (!users || users.length === 0) {
      response.status(404).json({ error: 'No users found' });
      return;
    }

    // Set custom headers for the response
    response.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59',
    );
    response.setHeader('Access-Control-Allow-Origin', '*'); // Be cautious with CORS settings in production

    // Respond with the fetched data
    response.status(200).json(users);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    // Log the error or send it to a monitoring service
    // e.g., Sentry.log(error);

    // Respond with a server error
    response.status(500).json({ error: 'Internal server error' });
  }
}
