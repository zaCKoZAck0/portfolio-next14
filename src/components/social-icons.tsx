import { Link } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

interface SocialIconProp {
  platform: string;
  className: string;
}
export function SocialIcon({ platform, className }: SocialIconProp) {
  switch (platform) {
    case 'github':
      return <FaGithub className={className} />;
    case 'x':
      return <FaXTwitter className={className} />;
    case 'leetcode':
      return <SiLeetcode className={className} />;
    case 'linkedin':
      return <FaLinkedin className={className} />;
    default:
      return <Link className={className} />;
  }
}
