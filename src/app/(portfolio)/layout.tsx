// import { ResumeDownloadButton } from '~/components/download-resume-button';
import type { Metadata } from 'next';
import { Navbar } from '~/components/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zackozack.xyz'),
};
export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      {/* <ResumeDownloadButton /> */}
    </>
  );
}
