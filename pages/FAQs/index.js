"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import LayoutClient from "../../layoutClient/LayoutClient";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";
import {NextUIProvider} from "@nextui-org/react";

export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})


const Fags = () => {

  const { t } = useTranslation();

  const defaultContent =
    `${t("common:answerFirst")}`

  return (
    <LayoutClient>
       <NextUIProvider>

      <div className="mt-20">
        <h1 className="text-center text-[#000000] text-5xl  font-medium leading-8">
        {t("common:FAQs")}
        </h1>
        <div className=" font-medium  lg:mx-32 mx-8 shadow-lg mt-10 m-auto p-6 lg:text-2xl  text-base">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label={t("common:faqFirst")}
              title={t("common:faqFirst")}
              className="p-6 text-[#828282] text-lg font-medium">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label={t("common:faqSecond")}
              title={t("common:faqSecond")}
              className="p-6 text-[#828282] text-lg font-medium">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label={t("common:faqThirst")}
              title={t("common:faqThirst")}
              className="p-6 text-[#828282] text-lg font-medium">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
       </NextUIProvider>
    </LayoutClient>
  );
};
export default Fags;
