"use client"

import { useTranslation } from "react-i18next";
import { Paragraph } from "@/shared/ui";
import Link from "next/link";

export const Copyright: React.FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer.legal"})

  return (
    <div className="flex items-center gap-16">
      <Paragraph className="text-white !font-normal max-w-md">
        {t("description")}
      </Paragraph>
      <div className="flex items-center gap-4">
        <Link href="/privacy-policy">
          <Paragraph as="span" className="text-white">{t("privacyPolicy")}</Paragraph>
        </Link>
        <Link href="/terms-of-service">
          <Paragraph as="span" className="text-white">{t("termsOfService")}</Paragraph>
        </Link>
      </div>
    </div>
  );
};