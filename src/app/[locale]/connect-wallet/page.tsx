"use client"

import { Web3 } from 'web3';
import { Section, SectionHeader } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { WalletProviderList, WalletProviderConnectedModal } from "@/features/wallet-provider";
import { useEffect, useState } from "react";
import { ConnectionOptions } from "@/web3/options";
import { useWeb3React } from "@web3-react/core";
import { ConnectionType } from "@/web3/types";
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const { t } = useTranslation("connect-wallet")
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isActive} = useWeb3React()

  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)

  return (
    <Section className="py-24">
      <SectionHeader
        centerHeader
        title={t("title")}
        description={t("description")}
      />
        {/* <WalletProviderList />
        <WalletProviderConnectedModal open={false} /> */}
        <ConnectionOptions
          activeConnectionType={connectionType}
          isConnectionActive={isActive}
          onActivate={(connectionType) => {
            setConnectionType(connectionType)
            const cb = searchParams.get("cb")
            router.push(cb ? decodeURIComponent(cb) : "/")
          }}
          onDeactivate={setConnectionType}
        />
    </Section>
  );
}

export default Page