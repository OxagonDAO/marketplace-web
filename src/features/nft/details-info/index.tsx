import Image from "next/image";
import { Heading, Label, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";
import { NFTDetails } from "@/entities/nft/api/types";
import { useTranslation } from "react-i18next";

type Props = {
  data: NFTDetails,
  loaded?: boolean
}

export const NFTDetailsInfo: FC<Props> = (props) => {
  const { t } = useTranslation("nft")
  const { loaded = true, data } = props
  const { description, } = data

  return (
    <section aria-labelledby="nft-info">
      <Skeleton isLoaded={loaded} className="w-full rounded-md">
        <Heading as="h5" level="5" id="nft-info">{t("information")}</Heading>
      </Skeleton>
      <Skeleton isLoaded={loaded} className="rounded-md mt-6">
        <Paragraph size="sm" className="text-black-out-60 font-medium">{description}</Paragraph>
      </Skeleton>
      <ul className="w-full mt-6">
        <Skeleton isLoaded={loaded} className="rounded-md w-full">
          <li className="flex justify-between px-4 py-2 bg-black-out-10 rounded-lg">
            <Paragraph as="span">{t("contractAddress")}</Paragraph>
            <Paragraph as="span">Address</Paragraph>
          </li>
        </Skeleton>
      </ul>
    </section>
  );
};
