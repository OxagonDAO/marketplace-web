import { Label, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";

type Props = {
  label: ReactNode,
  loaded: boolean
  price: {
    amount: number;
    usdValue: number;
  };
}

export const NFTPriceInfo: FC<Props> = (props) => {
  const { label, loaded, price } = props

  return (
    <div className="mt-4 w-max border border-black-out-10 px-4 py-2 rounded-lg">
      <Skeleton isLoaded={loaded} className="rounded-md w-max">
        <Label>{label}:</Label>
      </Skeleton>
      <Skeleton isLoaded={loaded} className="rounded-md w-max mt-2">
        <Paragraph size="xl" className="flex items-center font-medium">
          {price.amount} ETH
          <Paragraph as="small" className="ml-2" size="base">({price.usdValue})</Paragraph>
        </Paragraph>
      </Skeleton>
    </div>
  );
};
