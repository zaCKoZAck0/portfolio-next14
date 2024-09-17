import { BlogNavigation } from '~/components/navigation/blog';

export default function BlogsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogNavigation />
      {children}
    </>
  );
}
