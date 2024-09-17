import '../../blog.css';

import { notFound } from 'next/navigation';
import { blogs } from '../_blogs';
import { BlogPage } from './_components/blog';

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug];
  if (!blog) return notFound();
  return <BlogPage blog={blog} />;
}
