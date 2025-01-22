import { cn } from '~/lib/utils';

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export function Callout({ children, icon, type = 'default', ...props }: CalloutProps) {
  return (
    <div
      className={cn('callout relative my-6 flex border-2 items-start rounded-lg p-2 pb-4 px-6 text-justify text-sm', {
        'border-red-700/50 text-card-foreground': type === 'danger',
        'border-yellow-700 bg-yellow-500/95': type === 'warning',
      })}
      {...props}
    >
      {icon && <span className={cn("absolute bg-gradient-to-br from-primary to-secondary -top-5 -left-5 rounded-full p-3 text-white shadow", {
      'from-red-500 to-red-900': type === 'danger',
      '': type === 'warning',
})}>{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
