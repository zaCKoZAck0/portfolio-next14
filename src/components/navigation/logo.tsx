import { cn } from '~/lib/utils';
import { P } from '../typography';

export function Logo({ className, short = false }: { className?: string; short?: boolean }) {
  return (
    <P className={cn('font-bold', className)}>
      Z
      {short ? null : (
        <span>
          <span>ACKOZACK</span>
        </span>
      )}
      <span className="text-orange-200">.</span>
    </P>
  );
}
