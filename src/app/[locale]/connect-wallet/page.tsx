"use client"

import { Web3 } from 'web3';
import { Section, SectionHeader } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { WalletProviderList, WalletProviderConnectedModal } from "@/features/wallet-provider";
import { useEffect, useState } from "react";
import { ConnectionOptions } from "@/web3/options";
import { useWeb3React } from "@web3-react/core";
import { ConnectionType } from "@/web3/types";

const Page = () => {
  const { t } = useTranslation("connect-wallet")
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const { chainId, account, isActive, ...rest   } = useWeb3React()

  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)
  console.log(chainId,isActive, account, rest)
  
  
  useEffect(() => {
    if(isActive) {
      const w3 = new Web3(rest.provider as any)
      const contractInstance = new w3.eth.Contract([
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_data",
              "type": "string"
            }
          ],
          "name": "setD",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getD",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],"0x3e3e8d26e69f4e13866d0fe5199e8b56a39b60b1")
      console.log(w3, contractInstance)

      contractInstance.methods.getD().call()
    }

  }, [isActive])

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
          onActivate={setConnectionType}
          onDeactivate={setConnectionType}
        />
    </Section>
  );
}

export default Page