// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer2/hooks';

import { cn } from '~/lib/utils';
import { Callout } from '../callout';
import { MdxCard } from './mdx-card';
import * as Icons from 'lucide-react';

const components = {
  h1: ({ className, ...props }) => <h1 className={className} {...props} />,
  h2: ({ className, ...props }) => <h2 className={className} {...props} />,
  h3: ({ className, ...props }) => <h3 className={className} {...props} />,
  h4: ({ className, ...props }) => <h4 className={className} {...props} />,
  h5: ({ className, ...props }) => <h5 className={className} {...props} />,
  h6: ({ className, ...props }) => <h6 className={className} {...props} />,
  a: ({ className, ...props }) => <a className={className} {...props} />,
  p: ({ className, ...props }) => <p className={className} {...props} />,
  ul: ({ className, ...props }) => <ul className={className} {...props} />,
  ol: ({ className, ...props }) => <ol className={className} {...props} />,
  li: ({ className, ...props }) => <li className={className} {...props} />,
  blockquote: ({ className, ...props }) => <blockquote className={className} {...props} />,
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn('my-4 overflow-x-auto rounded-lg', className)} {...props} />
  ),
  figcaption: ({ className, ...props }) => (
    <figcaption
      className={cn('mt-4 border py-0.5 text-center font-mono text-sm text-orange-200', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        'relative rounded-lg border bg-card px-[1rem] py-2 font-mono text-base font-thin text-orange-200',
        className,
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
  Icons,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
