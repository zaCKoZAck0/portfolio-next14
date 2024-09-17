import { BlogNavigation } from '~/components/navigation/blog';
import './blog.css';

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
