import Link from "next/link";

interface LinkProps {
  title: string;
  link: string;
}

export default function Footer({ links }: { links: LinkProps[] }) {

  return (
    <footer className="footer">
      {links?.map((link, index) => (
        <Link key={index} href={link.link} className="footer__link">
          {link.title}
        </Link>
      ))}
    </footer>
  );
}