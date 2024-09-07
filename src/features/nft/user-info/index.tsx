import Image from "next/image";
import { Label, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";

type Props = {
  label: ReactNode,
  loaded?: boolean,
  name: string,
  avatar: string,
}

export const NFTUserInfo: FC<Props> = (props) => {
  const { label, loaded = true, avatar, name } = props

  return (
    <div className="flex gap-4 w-max rounded-lg">
      <Skeleton isLoaded={loaded} className="w-max h-max rounded-full">
        <Image width={56} height={56} src={avatar} alt="avatar" className="rounded-full" />
      </Skeleton>
      <div>
        <Skeleton isLoaded={loaded} className="rounded-md w-max">
          <Label size="sm" className="font-medium">{label}</Label>
        </Skeleton>
        <Skeleton isLoaded={loaded} className="rounded-md w-max mt-2">
          <Paragraph className="font-medium">
            {name}
          </Paragraph>
        </Skeleton>
      </div>
    </div>
  );
};
