import Image from "next/image";
import Link from "next/link";

export default function Footer({ link, showIcons }: FooterProps) {
  const footerJustify = showIcons ? "justify-between" : "justify-start";
  return (
    <>
      <footer className="w-full">
        <div
          className={`w-full h-24 flex flex-row items-center px-8 lg:px-16 ${footerJustify}`}
        >
          <JomlehaIcon href={link} />
          {showIcons && <JomlehaExternalLinks />}
        </div>
      </footer>
    </>
  );
}

function JomlehaIcon({ href }: { href: FooterLink }) {
  const titleTag = href === "/about" ? "About Jomleha" : "Home page";
  return (
    <Link href={href} title={titleTag}>
      <div className="grid grid-cols-4 gap-1">
        {[...Array(8)].map((_, index) => (
          <Image
            key={index}
            src="/jomleha.svg"
            alt="logo"
            width={12}
            height={12}
            priority={true}
          />
        ))}
      </div>
    </Link>
  );
}

function JomlehaExternalLinks() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Link href="https://github.com/PHELAT/jomleha.social">
        <Image
          src="/github.svg"
          alt="Github repository"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://twitter.com/jomleha_social">
        <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
      </Link>
    </div>
  );
}

export type FooterLink = "/" | "/about";

export type FooterProps = {
  link: FooterLink;
  showIcons: boolean;
};
