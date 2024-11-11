import { Button, Input, Label, Select } from "@/shared/ui";
import { SelectItem } from "@nextui-org/select";
import { TbPlus, TbFileUpload, TbPhoto } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next";

type Form = {
  image: FileList,
  name: string,
  symbol: string,
}

type Props = {
  onSubmitted: (form: FormData) => void
}

export const NFTCreateCollectionForm: React.FC<Props> = ({ onSubmitted }) => {
  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm<Form>()
  const [image, setImage] = useState<string | null>(null)
  const { t } = useTranslation("nft")

  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData()
    form.append("image", data.image[0] )
    form.append("name", data.name)
    form.append("symbol", data.symbol)
    form.append("type", "collection")

    onSubmitted(form)
  })

  useEffect(() => {
    const file = getValues("image")
    if(file && file.length) {
      new Promise<string>((res, rej) => {
        const reader = new FileReader()
        reader.onload = () => reader.result ? res(reader.result.toString()) : rej(reader.result)
        reader.onerror = rej
        reader.readAsDataURL(file[0])
      }).then(setImage).catch(console.error)
    }
  }, [watch("image")])

  return (
    <form className="flex gap-6" onSubmit={onSubmit}>
      <div className="w-52">
        <label htmlFor="title" className="text-sm font-semibold">{t("label.logo")}</label>
        <div className="w-full rounded-lg bg-black-out-10/20 h-52 overflow-hidden">
          {image ? (
            <img src={image} className="object-cover" width={324} height={324} />
          ) : (
            <div className='flex items-center justify-center bg-black-out-10 w-full h-full' >
              <TbPhoto  className='w-6 h-6 text-black-out-50'/>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 w-80 max-w-96">
        <div>
          <label htmlFor="file" className="text-sm font-semibold">{t("label.file")}</label>
          <label htmlFor="file" className="flex items-center justify-center w-full rounded-md border border-dotted dot border-black-out-20 h-16 cursor-pointer">
            <div className="flex gap-4 items-center">
              <TbFileUpload className="text-black-out-30 text-2xl" />
              <Label htmlFor="file" size="sm" className="text-black-out-50 cursor-pointer">{t("label.select-or-drag-file")}</Label>
            </div>
          </label>
          <Input 
            type="file"
            id="file"
            placeholder="Item name" 
            classNames={{
              inputWrapper: "!hidden"
            }}
            {...register("image")}
          />
        </div>
        <div>
          <label htmlFor="title" className="text-sm font-semibold ">{t("label.name")}</label>
          <Input 
            type="text" 
            placeholder={t("label.name")}
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor="symbol" className="text-sm font-semibold">{t("label.symbol")}</label>
          <Input 
            type="text" 
            {...register("symbol")}
          />
        </div>
        <div>
          <label htmlFor="collection" className="text-sm font-semibold">{t("label.chain")}</label>
          <Select>
            <SelectItem key={1}> 
              <div className="flex items-center">
                <div className="p-2 bg-black-out-10 rounded-md mr-2">
                  <TbPlus className="text-base" />
                </div>
                {t("action.continue")}
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
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
        >
          Create item
        </Button>
      </div>
    </form>
  );
};