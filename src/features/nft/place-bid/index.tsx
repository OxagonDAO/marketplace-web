import { Button, Heading, Input, Label, Modal, Paragraph,  } from "@/shared/ui";
import { useBalance } from "@/web3/hooks";
import { Skeleton } from "@nextui-org/skeleton";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTimer } from "react-timer-hook";

type Props = {
  loaded: boolean,
}

export const NFTPlaceBid: FC<Props> = (props) => {
  const { loaded } = props
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation("marketplace", { keyPrefix: "place-bid" })
  const { amount, amountAsNum, symbol } = useBalance()

  const open = () => setIsOpen(true)



  return (
    <div className="overflow-hidden">
      <Skeleton isLoaded={loaded} className="rounded-md w-max">
        <Button 
          size='lg'  
          color="primary" 
          onClick={open}
        >
          {t("button")}
        </Button>
      </Skeleton>
      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        headerSlot={(
          <>
            <Heading as="h2" level="2" className="text-black-out text-center">
              {t("title")}
            </Heading>
            <Paragraph className="text-center mt-4">{t("description")}</Paragraph>
          </>
        )}
        bodySlot={(
          <form className="max-w-80 w-full mx-auto">
            <Input 
              label={t("input.label")} 
              description={t("input.description")}
            />
            <div className="flex flex-col gap-4 my-12">
              <div className="flex justify-between">
                <Label>
                  {t("label.bidding")}
                </Label>
                <Paragraph as="span">
                  1.56ETH
                </Paragraph>
              </div>
              <div className="flex justify-between">
                <Label>
                  {t("label.balance")}
                </Label>
                <Paragraph as="span">
                  1.56ETH
                </Paragraph>
              </div>
              <div className="flex justify-between">
                <Label>
                  {t("label.fee")}
                </Label>
                <Paragraph as="span">
                  1.56ETH
                </Paragraph>
              </div>
              <div className="flex justify-between">
                <Label>
                  {t("label.total")}
                </Label>
                <Paragraph as="span">
                  1.56ETH
                </Paragraph>
              </div>
            </div>
            <Button className="w-full">
              {t("button")}
            </Button>
          </form>
        )}
      />
    </div>
  );
};
