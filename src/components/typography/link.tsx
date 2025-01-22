import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '~/lib/utils';

type AProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function A({ children, className, href }: AProps) {
  if (href.startsWith('/'))
    return (
      <Link href={href}>
        <p className={cn('link group', className)}>
          {children}{' '}
          <ArrowUpRight className="ml-1 inline-block size-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </p>
      </Link>
    );
  else
    return (
      <a href={href} className={cn(className)} target="_blank" rel="noopener noreferrer">
        <p className={cn('link group overflow-hidden text-nowrap', className)}>
          {children}{' '}
          <ArrowUpRight className="ml-1 inline-block size-5 flex-shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </p>
      </a>
    );
}
