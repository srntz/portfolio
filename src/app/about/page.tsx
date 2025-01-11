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
    <div id="about">
      <header className="flex justify-center pt-5">
        <NavbarAlternate links={aboutPageNavbarLinks} />
      </header>
      <div id="main-content" className="px-40">
        <h1 className="text-[5rem] font-nohemi my-12 font-bold">
          Hi, I'm Denis.
        </h1>
      </div>
    </div>
  );
}
