"use client"

import { Section, SectionHeader } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { WalletProviderList, WalletProviderConnectedModal } from "@/features/wallet-provider";

const Page = () => {
  const { t } = useTranslation("connect-wallet")

  return (
    <Section className="py-24">
      <SectionHeader
        centerHeader
        title={t("title")}
        description={t("description")}
      />
        <WalletProviderList /* onError={() => {}} onSuccess={() => {}} */ />
        <WalletProviderConnectedModal open={false} />
    </Section>
  );
}

export default Page