import { useWeb3React } from "@web3-react/core";
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/dropdown";
import { TbUserFilled, TbBriefcaseFilled, TbTransitionRightFilled   } from "react-icons/tb";
import { Heading, Label, Paragraph } from "@/shared/ui";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getConnection, tryDeactivateConnector } from "../connectors";
import { ConnectionType } from "../types";
import Link from "next/link";
import { useBalance } from "../hooks";

const shortenAddress = (address: string, length: number = 4): string  => {
  if (address.length <= length * 2 + 2) return address; // check if the address is already short
  return `${address.slice(0, length + 2)}...${address.slice(-length)}`;
}

export const WalletInfo = () => {
  const { t } = useTranslation("common")
  const { chainId, account, isActive, provider } = useWeb3React()
  const { amount, symbol } = useBalance()

  

  return isActive && account ? (
    <div className='flex-shrink-0 flex items-center justify-center'>
      <Dropdown placement="bottom-end" >
        <DropdownTrigger>
          <Avatar
            as="button"
            src={`https://www.gravatar.com/avatar/${account}?s=50&d=identicon`} 
            alt="ENS Avatar" 
            size="md" 
          />
        </DropdownTrigger>
        <DropdownMenu className="!p-4">
          <DropdownSection>
            <DropdownItem
              isReadOnly
              key="address"
              className="cursor-default"
            >
              <Heading level="5" as="h5" className="text-black-out mb-1.5">Unnamed</Heading>
              <Label className="text-blue">{shortenAddress(account, 4)}</Label>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              isReadOnly
              className="border border-black-out-10 px-4 pb-4"
            >
              <Paragraph className="text-black-out-60">
                {t("label.balance")}
              </Paragraph>
              <Heading level="4" as="h4" className="mt-1">
                {amount} {symbol}
              </Heading>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              href={`/user/${account}`}
              startContent={<TbUserFilled className="text-blue text-2xl" /> }
            >
              <Paragraph>{t("label.profile")}</Paragraph>
            </DropdownItem>
            {/* <DropdownItem
              href="/orders"
              startContent={<TbBriefcaseFilled className="text-blue text-2xl" /> }
            >
              <Paragraph>{t("label.orders")}</Paragraph>
            </DropdownItem> */}
            <DropdownItem
              startContent={<TbTransitionRightFilled className="text-blue text-2xl" />}
              onClick={() => {
                const connector = localStorage.getItem("connector")
                connector && tryDeactivateConnector(getConnection(connector as ConnectionType).connector)
              }}
            >
              <Paragraph>{t("label.logout")}</Paragraph>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  ) : (
    null
  )  
}
