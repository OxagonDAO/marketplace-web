"use client"

import { Paragraph, Section, SectionHeader } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { WalletProviderList, WalletProviderConnectedModal } from "@/features/wallet-provider";
import { AuthSignInForm } from "@/features/auth";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation("auth")

  return (
    <Section className="!p-12 my-24 shadow-lg max-w-xl">
      <SectionHeader
        centerHeader
        title={t("sign-in.title")}
        description={t("sign-in.description")}
      />
        <AuthSignInForm />
        <Paragraph size="base" className="text-sm !font-normal mt-8 text-center">
          {t("sign-in.no-account")}{" "}
          <Link href="/auth/sign-up" className="text-blue">
            {t("label.sign-up", { ns: "common"})}
          </Link>
        </Paragraph>
    </Section>
  );
}

export default Page