import { FaLinkedin, FaUser } from 'react-icons/fa6';
import { A, H3, H4 } from './typography';
import Image from 'next/image';

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
      <div className="relative flex items-start gap-4 overflow-hidden rounded-md bg-muted/50 p-4">
        <div className="absolute h-24 w-10 bg-[#0072b1]/75 blur-3xl" />
        <div className="z-10 flex flex-shrink-0 flex-col items-center gap-4">
          {image.length ? (
            <Image src={image} alt={name} className="rounded-md shadow" height={48} width={48} />
          ) : (
            <FaUser size={48} />
          )}
          <FaLinkedin className="text-[#0072b1] shadow" size={24} />
        </div>
        <div className="flex flex-col">
          <A href={linkedinURL}>
            <H3 className="text-xl">{name}</H3>
          </A>
          <div className="flex items-center gap-1 text-xs text-muted-foreground md:gap-2">
            <H4 className="overflow-hidden text-nowrap text-xs">{designation}</H4> at{' '}
            <H4 className="overflow-hidden text-nowrap text-xs">{company}</H4>
          </div>
          <H4 className="mt-1 text-xs font-light text-muted-foreground md:text-sm">{relation}</H4>
          <p className="pt-2 text-justify text-xs text-secondary-foreground">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}
