import { cn } from '~/lib/utils';
import { P } from '../typography';

export function Logo({ className }: { className?: string }) {
  return (
    <P className={cn('font-bold', className)}>
      ZACKOZACK
      <span className="text-orange-200">.</span>
    </P>
  );
}
