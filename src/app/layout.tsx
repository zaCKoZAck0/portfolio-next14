import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './blog.css';
import { cn } from '~/lib/utils';
import { Providers } from './providers';

const mono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About Me | zackozack (Ayush Kumar Yadav)',
  description: 'Fullstack developer skilled in React, Spring Boot and AWS.',
  metadataBase: new URL('https://www.zackozack.xyz'),
  openGraph: {
    title: 'About Acme',
    description: 'Learn more about Acme Corporation',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mono.className, 'mt-12')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
