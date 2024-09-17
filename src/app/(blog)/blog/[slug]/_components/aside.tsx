import React from 'react'; // Add this line

import { InfoIcon, LightbulbIcon, LucideProps, TriangleAlertIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface AsideProps extends React.HTMLAttributes<HTMLBaseElement> {
  type: 'info' | 'warning' | 'tip';
}

const iconColor = {
  info: 'bg-blue-500',
  warning: 'bg-yellow-700',
  tip: 'bg-green-500',
};

const bgColors = {
  info: 'bg-blue-950/50',
  warning: 'bg-yellow-950/50',
  tip: 'bg-green-950/50',
};

const Icon = (props: LucideProps) => {
  switch (props.type) {
    case 'info':
      return <InfoIcon {...props} />;
    case 'warning':
      return <TriangleAlertIcon {...props} />;
    case 'tip':
      return <LightbulbIcon {...props} />;
    default:
      return null;
  }
};

export function Aside({ type, children, ...props }: AsideProps) {
  return (
    <aside {...props}>
      <div className={cn('font-base relative rounded-xl p-4 text-white/75', bgColors[type])}>
        <div
          className={cn(
            `absolute right-1 top-1 flex -translate-y-[50%] translate-x-[50%] items-center justify-center rounded-full p-2`,
            iconColor[type],
          )}
        >
          <Icon size={20} type={type} />
        </div>
        <div className="ml-2">{children}</div>
      </div>
    </aside>
  );
}
