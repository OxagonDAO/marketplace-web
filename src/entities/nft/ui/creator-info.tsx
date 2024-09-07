import { Label, Paragraph } from "@/shared/ui";
import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
  avatar: string;
}

export const NFTCreatorInfo: FC<Props> = ({ name, avatar }) => {
  const { t } = useTranslation("common")

  return (
    <div className="flex items-center mt-2">
      <Image src={avatar} alt={name} className="rounded-full mr-2" width={56} height={56} />
      <div className="flex flex-col">
        <Label size="sm" className="text-black-out">
          {t("label.creator")}
        </Label>
        <Paragraph as="span" className="text-black-out">{name}</Paragraph>
      </div>
    </div>
  );
};