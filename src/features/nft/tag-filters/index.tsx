
import { Button, Paragraph } from "@/shared/ui";
import { Skeleton } from "@nextui-org/skeleton";
import { FC } from "react";

type Props = {
  tags?: string[]
  loading?: boolean
}

const _mockTags = ["this", "just is", "an example", "tag"]

export const NFTTagFilters: FC<Props> = (props) => {
  const { tags, loading = false } = props
  const list = loading ? _mockTags : tags?.length ? tags : null

  return (
    <nav aria-label="Filter categories" className="my-8">
      <ul className="flex gap-4">
        {list?.map((category) => (
          <li key={category} className="overflow-hidden">
            <Skeleton isLoaded={!loading} disableAnimation className="rounded-full">
              <Button 
                variant="secondary" 
                className="px-6 py-2 !font-normal text-sm h-max "
                shape="circle"
              >
                {category}
              </Button>
            </Skeleton>
          </li>
        )) || (
          <Paragraph size="sm">tags.empty</Paragraph>
        )}
      </ul>
    </nav>
  );
};