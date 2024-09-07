"use client"

import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Logo, Paragraph } from "@/shared/ui";

export const Branch: FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer"})
  
  return (
    <section className="max-w-sm">
      <Logo />
      <Paragraph className="text-black-out-60">
        {t("description")}
      </Paragraph>
    </section>
  );
};