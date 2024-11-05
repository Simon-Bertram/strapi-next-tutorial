import Link from "next/link";
import NavLink from "./nav-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-team", label: "Our Team" },
  { href: "/about-us", label: "About Us" },
];

const Header = () => {
  return (
    <header className="bg-gray-200">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">Strapi & Nextjs Project</Link>
        <ul className="flex gap-4">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
