import { NextRequest, NextResponse } from 'next/server';
import githubDataScript from '~/scripts/github-data-script';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.NODE_ENV === 'production') {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  try {
    await githubDataScript();
    return NextResponse.json({ data: 'Github data fetched successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(new Error('Failed to fetch Github data').message);
  }
}
