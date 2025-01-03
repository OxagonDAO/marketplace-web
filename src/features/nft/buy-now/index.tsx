import { Button, Label, Modal, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  loaded: boolean,
}

export const NFTBuyNow: FC<Props> = (props) => {
  const { t } = useTranslation("marketplace", { keyPrefix: "details" })
  const { loaded } = props

  return (
    <div className="overflow-hidden">
      <Skeleton isLoaded={loaded} className="rounded-md w-max">
        <Button size='lg' variant="secondary" href="#" /* variant="flat" */>
          {t("buyNow")}
        </Button>
      </Skeleton>
      {/* <Modal >

      </Modal> */}
    </div>
  );
};
