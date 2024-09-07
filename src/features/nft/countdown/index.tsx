import { Label, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";
import { useTimer } from "react-timer-hook";

type Props = {
  label: ReactNode,
  loaded: boolean,
  endDate: string,
  onExpire?: () => void
}

export const NFTCountdown: FC<Props> = (props) => {
  const { label, loaded, endDate, onExpire } = props
  const { days, hours, minutes, seconds} = useTimer({
    expiryTimestamp: new Date(endDate),
    autoStart: true,
    onExpire
  })

  return (
    <div className="mt-4 w-max border border-black-out-10 px-4 py-2 rounded-lg">
      <Skeleton isLoaded={loaded} className="rounded-md w-max">
        <Label>{label}:</Label>
      </Skeleton>
      <Skeleton isLoaded={loaded} className="rounded-md w-max mt-2">
        <Paragraph size="xl" className="font-medium">
          {days} : {hours} : {minutes} : {seconds}
        </Paragraph>
      </Skeleton>
    </div>
  );
};
