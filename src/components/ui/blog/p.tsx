import { cn } from '~/lib/utils';

export function P({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn(className, 'py-3')} {...props}>
      {children}
    </p>
  );
}
