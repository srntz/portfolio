"use client";

import { ReactNode, useState } from "react";
import NavbarAlternate from "@/components/NavbarAlternate";
import { usePathname } from "next/navigation";

export default function NavbarLayout({ children }: { children: ReactNode }) {
  const [navbarRendered, setNavbarRendered] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <header className="sticky z-[100] mt-5 top-5 flex justify-center">
        <NavbarAlternate
          callback={() => setNavbarRendered(true)}
          styleChangeScrollPosition={115}
          pathname={pathname}
        />
      </header>
      {navbarRendered && children}
    </div>
  );
}
