
import { Button, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC } from "react";

type Props = {
  tags?: string[]
  loading?: boolean
}

const _mockTags = ["this", "just is", "an example", "tag"]

export const NFTFilters: FC<Props> = (props) => {
  const { tags, loading = false } = props
  const list = loading ? _mockTags : tags?.length ? tags : null

  return (
    <aside className="w-64 bg-white p-4 shadow-md shrink-0 mt-16">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price Range</label>
        <input type="range" min="0" max="20" step="0.1" className="w-full mt-2" />
         <div className="flex justify-between text-sm text-gray-500">
          <span>0.00 ETH</span>
          <span>20 ETH</span>
        </div>
      </div>
      <div className="mb-4">
        {/* <Select></Select> */}
        <label className="block text-sm font-medium text-gray-700">Currency</label>
        <select className="mt-2 block w-full border-gray-300 rounded-md">
          <option>Select currency</option>
          {/* Add currency options here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Collection</label>
        <select className="mt-2 block w-full border-gray-300 rounded-md">
          <option>Select collection</option>
          {/* Add collection options here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select className="mt-2 block w-full border-gray-300 rounded-md">
          <option>Select type</option>
          {/* Add type options here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select className="mt-2 block w-full border-gray-300 rounded-md">
          <option>Select status</option>
          {/* Add status options here */}
        </select>
      </div>
    </aside>
  );
};