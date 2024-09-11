import { FaLinkedin, FaUser } from 'react-icons/fa6';
import { A, H3, H4 } from './typography';
import Image from 'next/image';

type RecommendationCardProps = {
  key: number;
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
  key,
  linkedinURL,
  name,
  designation,
  company,
  image,
  relation,
  recommendation,
}: RecommendationCardProps) {
  return (
    <div key={key} className="p-4">
      <div className="flex items-start gap-4 rounded-md bg-muted p-4">
        <div className="flex flex-shrink-0 flex-col items-center gap-4">
          {image.length ? (
            <Image src={image} alt={name} className="rounded-md" height={48} width={48} />
          ) : (
            <FaUser size={48} />
          )}
          <FaLinkedin size={24} />
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
