import { cn } from '~/lib/utils';

export function UL({ children, className, ...props }: React.HtmlHTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn(className, 'py-3')} {...props}>
      {children}
    </ul>
  );
}
