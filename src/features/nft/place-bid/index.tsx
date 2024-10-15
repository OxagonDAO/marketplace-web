import { Button, Label, Modal, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useTimer } from "react-timer-hook";

type Props = {
  loaded: boolean,
}

export const NFTPlaceBid: FC<Props> = (props) => {
  const { t } = useTranslation("marketplace", { keyPrefix: "details" })
  const { loaded } = props

  return (
    <>
      <Skeleton isLoaded={loaded} className="rounded-md w-max">
        <Button size='lg' color="primary" href="#" /* variant="flat" */>
          {t("placeBid")}
        </Button>
      </Skeleton>
      {/* <Modal >

      </Modal> */}
    </>
  );
};
