import { FaLink, FaLinkedin, FaUser } from "react-icons/fa6";
import { A, H3, H4, P } from "./typography";
import Image from "next/image";

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
}

export function RecommendationCard({key, linkedinURL, name, designation, company, image, relation, recommendation}: RecommendationCardProps){
    return <div key={key} className="p-4">
    <div className="flex items-start gap-4 p-4 bg-muted rounded-md">
        <div className="flex flex-col items-center gap-4 flex-shrink-0">
            {(image.length)?<Image src={image} alt={name} className="rounded-full" height={48} width={48}  />:<FaUser size={48} />}
            <FaLinkedin size={24} />
        </div>
        <div className="flex flex-col">
            <A href={linkedinURL}>
            <H3 className="text-xl">{name}</H3>
            </A>
            <div className="flex items-center gap-2 text-muted-foreground">
            <H4 className="text-lg">{designation}</H4> at <H4 className="text-lg">{company}</H4>
            </div>
            <H4 className="text-sm font-light text-muted-foreground">{relation}</H4>
            <p className="text-xs pt-2 text-justify text-secondary-foreground">{recommendation}</p>
        </div>
     </div>   
    </div>
}