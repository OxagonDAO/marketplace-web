"use client"

import { useTranslation } from "react-i18next";
import { Button, Heading, Input, Paragraph } from "@/shared/ui";
import Link from "next/link";

const links = {
  support: [{
    name: 'community',
    href: "/community"
  }, {
    name: 'guideline',
    href: "/guideline"
  }, {
    name: 'chatWithUs',
    href: '/chat-with-us'
  }],
  company: [{
    name: 'about',
    href: '/about'
  }, {
    name: 'faq',
    href: '/faq'
  }, {
    name: 'marketplace',
    href: '/marketplace'
  }, {
    name: 'blog',
    href: '/blog'
  }],
  explore: [{
    name: 'art',
    href: '/art'
  }, {
    name: 'collection',
    href: '/collection'
  }, {
    name: 'creator',
    href: '/creator'
  }, {
    name: 'contactUs',
    href: '/contact-us'
  }],
};

export const Links: React.FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer"})

  return (
    <nav className="flex flex-1 justify-between max-w-3xl">
      {Object.entries(links).map(([key, linkList], i) => (
        <div key={i}>
          <Heading as="h4" level="4" className="text-white">{t(`${key}.title`)}</Heading>
          <ul className="mt-6 space-y-4">
            {linkList.map((link,i) => (
              <li key={i}>
                <Link href={link.href}>
                  <Paragraph size="lg" as="span" className="text-black-out-60">{t(`${key}.${link.name}`)}</Paragraph>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}    </nav>
  );
};