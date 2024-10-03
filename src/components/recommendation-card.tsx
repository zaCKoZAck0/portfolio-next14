import { FaUser } from 'react-icons/fa6';
import { H3, H4 } from './typography';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

type RecommendationCardProps = {
  linkedinURL: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  relation: string;
  recommendation: string;
  isPinned: boolean;
};

export function RecommendationCard({
  linkedinURL,
  name,
  designation,
  company,
  image,
  relation,
  recommendation,
}: RecommendationCardProps) {
  return (
    <div className="p-4">
      <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-md bg-muted/50 p-4">
        <Linkedin className="absolute -right-3 -top-3 size-36 opacity-5 shadow md:-right-2.5 md:-top-2.5" />
        <div className="absolute h-24 w-20 bg-primary/50 blur-3xl" />
        <div className="relative z-10 flex flex-shrink-0 items-start gap-4">
          {image.length ? (
            <Image src={image} alt={name} className="rounded-md shadow" height={48} width={48} />
          ) : (
            <FaUser size={48} />
          )}
          <div className="flex flex-col justify-between gap-1">
            <a
              className="text-secondary-foreground transition-colors hover:text-primary"
              href={linkedinURL}
            >
              <H3 className="text-xl">{name}</H3>
            </a>
            <div className="flex items-center gap-1 text-xs md:gap-2">
              <H4 className="overflow-hidden text-nowrap text-xs">{designation}</H4> at{' '}
              <H4 className="overflow-hidden text-nowrap text-xs">{company}</H4>
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-col">
          <H4 className="mt-1 text-xs font-light text-muted-foreground md:text-sm">{relation}</H4>
          <p className="pt-2 text-justify text-xs text-secondary-foreground">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}
