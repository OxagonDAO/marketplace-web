"use client"

import { Section, SectionHeader } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { WalletProviderList, WalletProviderConnectedModal } from "@/features/wallet-provider";
import { useState } from "react";

const Page = () => {
  const { t } = useTranslation("connect-wallet")
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  

  return (
    <Section className="py-24">
      <SectionHeader
        centerHeader
        title={t("title")}
        description={t("description")}
      />
        <WalletProviderList onError={setError} onSuccess={setSuccess} />
        <WalletProviderConnectedModal open={false} />
    </Section>
  );
}

export default Page