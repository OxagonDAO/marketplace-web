"use client"

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Button, Paragraph } from "@/shared/ui";
import { usePathname } from "next/navigation";

export const ConnectWalletButton: FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "header"})
  const pathname = usePathname()
  
  return (
    <Link 
      href={`/connect-wallet${pathname && "?cb=" + encodeURIComponent(pathname)}`}
    >
      <Button size='lg' as={Link} color="primary" href="#" /* variant="flat" */>
        {t("connectWallet")}
      </Button>
    </Link>
  );
};