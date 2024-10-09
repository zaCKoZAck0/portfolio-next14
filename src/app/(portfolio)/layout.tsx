// import { ResumeDownloadButton } from '~/components/download-resume-button';
import { Navbar } from '~/components/navigation';

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      {/* <ResumeDownloadButton /> */}
    </>
  );
}
