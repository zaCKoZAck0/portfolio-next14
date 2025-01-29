import { cn } from '~/lib/utils';
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export function BlurryBlob({ className, firstBlobColor, secondBlobColor }: BlobProps) {
  return (
    <div className="min-h-52 min-w-52 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            'absolute -right-10 -top-14 h-36 w-36 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-75 mix-blend-multiply blur-3xl filter',
            className,
            firstBlobColor,
          )}
        ></div>
        <div
          className={cn(
            'absolute -left-14 -top-32 h-36 w-36 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-75 mix-blend-multiply blur-3xl filter',
            className,
            secondBlobColor,
          )}
        ></div>
      </div>
    </div>
  );
}
