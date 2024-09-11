import { MobileNav } from './mobile-nav';
import NavTabs from './nav-tabs';

export type NavItem = {
  label: string;
  pathname: string;
};

const NavItems: NavItem[] = [
  {
    label: 'About Me',
    pathname: '/about-me',
  },
  {
    label: 'Resume',
    pathname: '/resume',
  },
  {
    label: 'Projects',
    pathname: '/projects',
  },
  {
    label: 'Contact Me',
    pathname: '/contact',
  },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-background p-1 md:bg-transparent">
      <div className="hidden md:inline-block">
        <NavTabs tabs={NavItems} />
      </div>
      <MobileNav tabs={NavItems} />
    </nav>
  );
}
