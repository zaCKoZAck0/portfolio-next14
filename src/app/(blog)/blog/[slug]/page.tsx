import { FC } from 'react';
import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '~/components/mdx-components';
import { BlogPage } from '~/components/blog-page';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((it) => it.slugAsParams === slug);
  if (!doc) return notFound();
  return doc;
}

const Page: FC<PageProps> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);
  return (
    <BlogPage blog={doc}>
      {' '}
      <Mdx code={doc.body.code} />
    </BlogPage>
  );
};

export default Page;
