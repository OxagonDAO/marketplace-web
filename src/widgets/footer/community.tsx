"use client"

import { useTranslation } from "react-i18next";
import { Button, Heading, Input, Paragraph } from "@/shared/ui";

export const Community: React.FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer.community"})

  return (
    <section className="flex items-center justify-between">
      <Heading as="h3" level="3" className="text-like-and-kiss">{t("title")}</Heading>
      <Paragraph className="text-black-out-60 !font-normal max-w-md">
        {t("description")}
      </Paragraph>
      <form className="flex items-center">
        <Input
          type="email"
          placeholder="Email"
          className=""
        />
        <Button variant="primary" className="rounded-r-md px-6 py-2">
          {t("subscribe")}
        </Button>
      </form>
    </section>
  );
};