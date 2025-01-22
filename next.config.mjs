/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer2';
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default withContentlayer({ ...nextConfig });
