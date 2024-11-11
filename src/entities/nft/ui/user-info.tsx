import { Label, Paragraph } from "@/shared/ui";
import { Avatar } from "@nextui-org/avatar";
import { Skeleton } from "@nextui-org/skeleton";
import { FC } from "react";
import clsx from "clsx";

type Props = {
  name?: string | null;
  avatar?: string | null;
  label: string,
  address: string;
  loaded?: boolean;
  size?: "base" | "lg"
}

const _styles = {
  base: {
    label: "text-black-out",
    value: "text-black-out",
  },
  size: {
    base: {
      label: "",
      value: "",
    },
    lg: {
      label: "font-medium",
      value: "font-medium"
    },
  }
}

export const NFTUserInfo: FC<Props> = (props) => {
  const { 
    name, 
    label,
    avatar, 
    address, 
    loaded = true, 
    size = "base"
  } = props

  return (
    <div className="flex items-center mt-2">
      {/* {avatar && <Image src={avatar} alt={name || "Unnamed"} className="rounded-full mr-2" width={56} height={56} />} */}
      <Skeleton isLoaded={loaded} className="w-max h-max rounded-full mr-2">
        <Avatar
          src={`https://www.gravatar.com/avatar/${avatar || address}?s=50&d=identicon`} 
          alt="ENS Avatar" 
          size={size ? size === "base" ? "md" : size : "md"} 
        />
      </Skeleton>
      <div className="flex flex-col">
      <Skeleton isLoaded={loaded} className="rounded-md w-max">
        <Label 
          size="sm" 
          className={clsx(_styles.base.label, size && _styles.size[size].label)}
        >
          {label}
        </Label>
        </Skeleton>
        <Skeleton isLoaded={loaded} className="rounded-md w-max mt-2">
          <Paragraph 
            as="span" 
            className={clsx(_styles.base.label, size && _styles.size[size].value)}
          >
            {name || "Unnamed"}
          </Paragraph>
        </Skeleton>
      </div>
    </div>
  );
};