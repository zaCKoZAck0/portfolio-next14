import React from 'react';
import { BlogNavigation } from '~/components/navigation/blog';
import { BlogFooter } from '~/components/navigation/blog/footer';

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
