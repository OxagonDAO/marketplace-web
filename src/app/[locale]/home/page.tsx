"use client"

import { NFTExplorer } from "@/widgets/nft";
import { Button, Section, SectionHeader, Heading, Paragraph } from "@/shared/ui";
import { NFTSlider } from "./nfts-slider";
import { IoWallet, IoAlbums, IoBookmark,IoImage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { NFTRecommended } from "@/widgets/nft/recommended";

const createAndSellSteps = [{
  icon: IoWallet,
  intKey: "setupWallet",
}, {
  icon: IoAlbums,
  intKey: "createCollection",
}, {
  icon: IoImage,
  intKey: "addNFT",
}, {
  icon: IoBookmark,
  intKey: "saleNFT",
}]

const Page = () => {
  const { t } = useTranslation("home")

  return (
    <>
      <section className="container mx-auto flex justify-between px-4 h-[792px]">

        {/* Title */}
        <div className="flex flex-col w-1/2 mt-auto mb-[140px]">
          <Heading as="h1" level="1" className="" >
            {/* <Trans t={t} i18nKey="hero.title" components={{ colored: <span className="text-red-500" /> }} /> */}
            {t("hero.title")}
          </Heading>
          <Heading as="h4" level="4" className="text-black-out-50 mt-8" >
            {t("hero.subtitle")}
          </Heading>
          <div className="flex gap-6 mt-8">
            <Button size="lg">
              {t("hero.becomeACreator")}
            </Button>
            <Link href="/marketplace">
              <Button size="lg" variant="secondary">
                {t("hero.explore")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated Slider */}
        <NFTSlider />
      </section>

      <NFTExplorer />

      <section className="container mx-auto py-24 px-4">
        <div className="flex items-center justify-center gap-14 overflow-hidden h-[556px] w-full relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-branch-gradient after:rounded-[48px] after:opacity-20">
          {/* Text */}
          <div className="z-10">
            <Heading as="h2" level="2">{t("createSellNfts.title")}</Heading>
            <Paragraph className="text-black-out-60 my-6">{t("createSellNfts.description")}</Paragraph>
            <Button size="lg">{t("createSellNfts.action")}</Button>
          </div>
          {/* Images */}
          <div className="flex gap-8 items-center">
            <Image
              src="/images/nfts/1.png"
              className="object-cover rounded-2xl shrink-0 grow-0 self-end"
              width={150}
              height={150}
              alt="First demo"
             />

            <Image
              src="/images/nfts/5.png"
              className="object-cover rounded-2xl shrink-0 grow-0"
              width={160}
              height={190}
              alt="First demo"
             />

            <Image
              src="/images/nfts/8.png"
              className="object-cover rounded-2xl shrink-0 grow-0 mb-4 !h-[360px]"
              width={246}
              height={360}
              alt="First demo"
             />
          </div>
        </div>
      </section>

      <div className="bg-blue-10 py-20">
        <NFTRecommended title={t("recommendedArt.title")} description={t("recommendedArt.description")} />
      </div>
 
      <Section className="py-24">
        <SectionHeader
          centerHeader
          title={t("createAndSellGuide.title")}
          description={t("createAndSellGuide.description")}
        />
          <div className="flex justify-between gap-8 mt-16">
            {createAndSellSteps.map(({ icon: Icon, intKey }, i) => (
              <article key={i} className="flex gap-6 flex-col">
                <div className="p-6 bg-blue/10 rounded-full w-max h-max">
                  <Icon className="text-blue h-12 w-12" />
                </div>
                <Heading as="h4" level="4">{t(`createAndSellGuide.${intKey}.title`)}</Heading>
                <Paragraph className="text-black-out-50">{t(`createAndSellGuide.${intKey}.description`)}</Paragraph>
              </article>
            ))}
          </div>
      </Section>
    </>
  );
}

export default Page