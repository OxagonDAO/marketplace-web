import { collection } from "@/contracts/collection";
import { localApi } from "@/shared/api";
import { Button, Heading, Input, Label, Modal, Paragraph,  } from "@/shared/ui";
import { useBalance } from "@/web3/hooks";
import { Skeleton } from "@nextui-org/skeleton";
import { useWeb3React } from "@web3-react/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTimer } from "react-timer-hook";
import Web3 from "web3";

type Props = {
  data?: FormData | null
}

type Status = {
  message?: string,
  type: "deploying" | "error" | "success" | "rejected"
}

export const NFTDeployCollectionPopup: FC<Props> = (props) => {
  const { data } = props
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation("nft", { keyPrefix: "deploy-collection" })
  const { chainId, account, isActive, provider, accounts   } = useWeb3React()
  const [upload, uploadResult] = localApi.useUploadFilesMutation()
  const [status, setStatus] = useState<Status>({ type: "deploying" })


  const open = () => setIsOpen(true)

  const deploy = async (ipfsUrl: string) => {
    try {
      if(!isActive || !provider || !account || !data) return;
      const web3 = new Web3(provider?.provider as any)
      
      const contract = new web3.eth.Contract(collection.abi)
      const deploy = contract.deploy({
        data: collection.bytecode,
        arguments: [data.get("name"), data.get("symbol"), "", ipfsUrl]
      })
      const deployed = await  deploy.send({
        from: account,
        gas: "5000000",
        gasPrice: (await web3.eth.getGasPrice()).toString()
      })
      /* const gasLimit = await contract.methods.setD("TestFirst").estimateGas({ from: account }); */
  
      // Send the transaction with gasPrice (old format)
    /*  const tx = await contract.methods.getD().call({
        from: account,
        gas: "5000000"
      });
  */
      console.log('Transaction successful:', deployed.options.address);
      setStatus({
        type: "success",
        message: deployed.options.address
      })
    } catch (error) {
      console.error('Transaction error:', error);
      setStatus({
        type: "error",
        message: "Some error"
      })
    }
  }

  useEffect(() => {
    setIsOpen(data ? true : false)
    if(data) upload(data).unwrap().then(deploy).catch(console.error)
  }, [data])

  return (
    <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        headerSlot={(
          <>
            <Heading as="h2" level="2" className="text-black-out text-center">
              {t(`title.${status.type}`)}
            </Heading>
            {/* <Paragraph className="text-center mt-4">{t("description")}</Paragraph> */}
          </>
        )}
        bodySlot={(
          <form className="max-w-80 w-full mx-auto">
            {/* <Input 
              label={t("input.label")} 
              description={t("input.description")}
            /> */}
            <div className="flex flex-col gap-4 my-12">
              
            </div>
            {/* <Button className="w-full">
              {t("button")}
            </Button> */}
          </form>
        )}
      />
  );
};
