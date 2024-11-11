import Image from "next/image";
import { Heading, Label, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";
import { NFT } from "@/entities/nft/api/types";
import { useTranslation } from "react-i18next";

type Props = {
  data: NFT,
  loaded?: boolean
}

export const NFTDetailsInfo: FC<Props> = (props) => {
  const { t } = useTranslation("common")
  const { loaded = true, data } = props
  const { description, contract_address, token_id } = data

  return (
    <section aria-labelledby="nft-info">
      <Skeleton isLoaded={loaded} className="w-full rounded-md">
        <Heading as="h5" level="5" id="nft-info">{t("information")}</Heading>
      </Skeleton>
      <Skeleton isLoaded={loaded} className="rounded-md mt-6">
        <Paragraph size="sm" className="text-black-out-60 font-medium">{description}</Paragraph>
      </Skeleton>
      <ul className="w-full mt-6 flex flex-col gap-2">
        <Skeleton isLoaded={loaded} className="rounded-md w-full">
          <li className="flex justify-between px-4 py-2 bg-black-out-10 rounded-lg">
            <Paragraph as="span">{t("label.address")}</Paragraph>
            <Paragraph as="span" className="text-blue">{contract_address}</Paragraph>
          </li>
        </Skeleton>
        <Skeleton isLoaded={loaded} className="rounded-md w-full">
          <li className="flex justify-between px-4 py-2 bg-black-out-10 rounded-lg">
            <Paragraph as="span">{t("label.token-id")}</Paragraph>
            <Paragraph as="span">{token_id}</Paragraph>
          </li>
        </Skeleton>
        <Skeleton isLoaded={loaded} className="rounded-md w-full">
          <li className="flex justify-between px-4 py-2 bg-black-out-10 rounded-lg">
            <Paragraph as="span">{t("label.chain")}</Paragraph>
            <Paragraph as="span">ETH</Paragraph>
          </li>
        </Skeleton>
      </ul>
    </section>
  );
};
