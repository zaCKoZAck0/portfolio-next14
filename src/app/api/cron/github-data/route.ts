import { NextResponse } from 'next/server';
import githubDataScript from '~/scripts/github-data-script';

export async function GET() {
  try {
    githubDataScript();
    return NextResponse.json({ data: 'Github data fetched successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(new Error('Failed to fetch Github data').message);
  }
}
