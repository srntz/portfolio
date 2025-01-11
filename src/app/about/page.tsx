"use client";

import NavbarAlternate, { ILink } from "@/components/NavbarAlternate";

const aboutPageNavbarLinks: ILink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export default function About() {
  return (
    <div id="about" className="flex justify-center pt-5">
      <NavbarAlternate links={aboutPageNavbarLinks} />
    </div>
  );
}
