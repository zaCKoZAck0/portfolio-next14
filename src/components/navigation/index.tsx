import { MobileNav } from "./mobile-nav";
import NavTabs from "./nav-tabs";

export type NavItem = {
  label: string;
  pathname: string;
}

const NavItems: NavItem[] = [
  {
      label: 'About Me',
      pathname: '/about-me'
  },
  {
      label: 'Resume',
      pathname: '/resume'
  },
  {
      label: 'Projects',
      pathname: '/projects'
  },
  {
      label: 'Contact Me',
      pathname: '/contact'
  },
];

export function Navbar() {
  return (
    <nav
    className="flex items-center justify-center w-full p-1 fixed top-0 z-50 bg-background md:bg-transparent"
    >
        <NavTabs tabs={NavItems} />
        <MobileNav tabs={NavItems} />
    </nav>
  );
}