import { FaGithub } from 'react-icons/fa6';
import { buttonVariants } from './ui/button';
import { cn } from '~/lib/utils';
import { LockIcon } from 'lucide-react';

export const BrowserMockup = ({
  url = 'https://example.com',
  children,
}: {
  url?: string;
  children?: React.ReactNode;
}) => {
  function getDomain(url: string) {
    const domain = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (domain != null && domain.length > 2 && typeof domain[2] === 'string') {
      return domain[2];
    }
    return url;
  }
  return (
    <div className="mx-auto w-fit overflow-hidden rounded-lg shadow-xl md:w-full md:max-w-4xl">
      {/* Browser Header */}
      <div className="rounded-t-lg bg-secondary p-3">
        <div className="flex items-center justify-between space-x-2">
          {/* Navigation Buttons */}
          <div className="hidden space-x-1.5 md:flex">
            <button className="h-3 w-3 rounded-full bg-red-400" />
            <button className="h-3 w-3 rounded-full bg-yellow-400" />
            <button className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          {/* Address Bar */}
          <div className="flex w-full gap-1 md:w-fit">
            <a
              href={url}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-muted px-8 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/75 md:min-w-[300px]"
            >
              <LockIcon className="size-4" />
              <span>{getDomain(url)}</span>
            </a>
          </div>

          {/* Menu Buttons */}
          <div className="hidden md:inline">
            <a
              href="https://google.com"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'flex items-center gap-1.5',
              )}
            >
              <FaGithub className="size-5" />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="min-h-[400px] bg-background p-4">{children}</div>
    </div>
  );
};
