"use client"

import Link from "next/link";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Paragraph } from "@/shared/ui";
import { usePathname } from "next/navigation";

const links = [
  { name: 'home', href: '/home' },
  { name: 'marketplace', href: '/marketplace' },
  /* { name: 'community', href: '/community' },
  { name: 'activity', href: '/activity' },
  { name: 'blog', href: '/blog' }, */
];

export const NavLinks: FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "header"})
  const pathname = usePathname()
  
  return (
    <NavbarContent className="hidden sm:flex space-x-6" justify="center">
      {links.map((link) => {
        const regex = new RegExp(`${link.href}(\/.*)?`);
        const isActive = regex.test(pathname)

        return (
          <NavbarItem key={link.name}>
            <Link href={link.href}>
              <Paragraph 
                size="base"
                className={`text-sm font-medium ${isActive ? 'text-blue' : 'text-black-out'}`}
              >
                {t(link.name)}
              </Paragraph>
            </Link>
          </NavbarItem>
        )
      })}
    </NavbarContent>
  );
};