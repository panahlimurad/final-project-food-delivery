"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import LayoutClient from "../../layoutClient/LayoutClient";

const Fags = () => {
  const defaultContent =
    "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.";

  return (
    <LayoutClient>
      <div className="mt-20">
        <h1 className="text-center text-[#000000] text-5xl  font-medium leading-8">
          F.A.Q
        </h1>
        <div className=" font-medium  lg:mx-32 mx-8 shadow-lg mt-10 m-auto p-6 lg:text-2xl  text-base">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="How to contact with Customer Service?"
              title="How to contact with Customer Service? "
              className="p-6 ">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="App installation failed, how to update system information?"
              title="App installation failed, how to update system information?"
              className="p-6">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Website reponse taking time, how to improve?"
              title="Website reponse taking time, how to improve?"
              className="p-6">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </LayoutClient>
  );
};
export default Fags;
