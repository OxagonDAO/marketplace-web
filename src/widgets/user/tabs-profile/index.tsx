"use client"

import { Tab, Tabs } from "@nextui-org/tabs"
import { FC, ReactNode, useState } from "react"
import { useTranslation } from "react-i18next"

type Props = {
  onSale: ReactNode,
  creations: ReactNode,
  likes: ReactNode,
  following: ReactNode,
  followers: ReactNode,
}

export const UserTabsProfile: FC<Props> = (props) => {
  const { 
    creations,
    followers,
    following,
    likes,
    onSale
  } = props
  const { t } = useTranslation("user", { keyPrefix: "label"})
  const [tab, setTab] = useState("on-sale");

  return (
    <Tabs
      variant='underlined' 
      classNames={{
        tab: "p-0",
        tabList: "p-0 before:block before:absolute before:bottom-0 before:container before:h-[1px] before:bg-black-out-10 container mx-auto",
        base: "mt-8 relative w-full",
        panel: "p-0 mt-6 pb-24",
      }}
      selectedKey={tab} 
      color='primary'
      onSelectionChange={(key) => setTab(key as string)}
    >
      <Tab
        key="on-sale" 
        title={t("on-sale")}
      >
        {onSale}
      </Tab>
      <Tab 
        key="created" 
        title={t("created")}
      >
       {creations}
      </Tab>
      <Tab 
        key="likes" 
        title={t("likes")}
      >
        {likes}
      </Tab>
      <Tab 
        key="following" 
        title={t("following")}
      >
        {following}
      </Tab>
      <Tab 
        key="followers" 
        title={t("followers")}
      >
        {followers}
      </Tab>
    </Tabs>
  )
}
