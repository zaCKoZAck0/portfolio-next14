import NavTabs from "./nav-tabs";

export function Navbar() {
  return (
    <div
    className="flex items-center justify-center w-full p-1 fixed top-0 z-50"
    >
        <NavTabs tabs={["About Me", "Resume", "Blogs", "Contact Me"]} />
    </div>
  );
}