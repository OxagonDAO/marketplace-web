import { Button, Input, Select } from "@/shared/ui";
import { Textarea } from "@nextui-org/input";
import { SelectItem } from "@nextui-org/select";
import { TbPlus } from "react-icons/tb";
/* import { useAddress, useSDK } from "@thirdweb-dev/react"; */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { localApi } from "@/shared/api";

type Form = {
  file: FileList,
  name: string,
  description: string,
  supply: string,
}


export const NFTCreateForm: React.FC = () => {
  /* const sdk = useSDK()
  const address = useAddress() */
  const { register, handleSubmit, formState: { errors } } = useForm<Form>()
  const [collections, setCollections] = useState([])
  const [upload, uploadResult] = localApi.useUploadFilesMutation()

  /* const getCollections = async () => {
    console.log(sdk)
    try {
      if (!sdk && !address) throw new Error();
      
      const deployedContracts = await sdk.getContractList(address);
      console.log(deployedContracts)
      
      // Filter the contracts to get only NFT collections
      const nftCollections = deployedContracts.filter(contract => contract.contractType === "nft-collection");
      console.log(nftCollections)
      
      setCollections(nftCollections);
    } catch (error) {
      console.error("Failed to fetch collections", error);
    }
  }; */
/* 

  useEffect(() => {
    if (sdk && address) getCollections()
  }, [sdk, address]) */

  const onSubmit = handleSubmit((data) => {
    const form = new FormData()
    form.append("file", data.file[0] )
    form.append("name", data.name)
    form.append("description", data.description)
    form.append("supply", data.supply)
    upload(form)
  })


  return (
    <form className="space-y-4 max-w-96" onSubmit={onSubmit}>
        <div>
          <label htmlFor="title" className="text-sm font-semibold">File upload</label>
          <Input 
            type="file" 
            placeholder="Item name" 
            classNames={{
              inputWrapper: "!border-dotted !bg-black-out-100/10"
            }}
            {...register("file")}
          />
        </div>
        <div>
          <label htmlFor="title" className="text-sm font-semibold ">Name</label>
          <Input 
            type="text" 
            placeholder="Item name"
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor="startDate" className="text-sm font-semibold">Supply</label>
          <Input 
            type="number" 
            {...register("supply")}
          />
        </div>
      

      <div>
        <label htmlFor="description" className="text-sm font-semibold">Description</label>
        <Textarea 
          variant="bordered" 
          type="date" 
          {...register("description")}
        />

        {/* <Test
          id="description"
          placeholder="e.g. This is a very limited item?"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          rows={3}
        ></Test> */}
      </div>

     {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="minimumBid" className="text-sm font-semibold">Minimum Bid</label>
          <Input id="minimumBid" type="number" placeholder="0.001 ETH" />
        </div>
        <div>
          <label htmlFor="royalties" className="text-sm font-semibold">Royalties</label>
          <Input id="royalties" type="number" placeholder="0%" />
        </div>
      </div> */}

      <div>
        <label htmlFor="collection" className="text-sm font-semibold">Choose Collection</label>
        <Select>
          <SelectItem key={1}> 
            <div className="flex items-center">
              <div className="p-2 bg-black-out-10 rounded-md mr-2">
                <TbPlus className="text-base" />
              </div>
              Create a new Collection
            </div>
          </SelectItem>
        </Select>
        {/* <select
          id="collection"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option>Select collection</option>
        </select> */}
      </div>

      <Button type="submit" variant="primary" className="w-full">Create item</Button>
    </form>
  );
};