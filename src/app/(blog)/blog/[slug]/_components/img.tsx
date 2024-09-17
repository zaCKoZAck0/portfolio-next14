import Image from 'next/image';
export function BlogImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full py-3">
      <Image src={src} alt={alt} height={450} width={800} className="rounded-xl border" />
      <div className="py-1 text-center text-xs text-muted-foreground/75">{alt}</div>
    </div>
  );
}
