import React from "react";
import { useTranslation } from "next-i18next";

const AboutText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 p-3">
      <h1 className="text-center lg:text-left font-semibold text-2xl sm:text-3xl">
        {t("common:AboutUs")}
      </h1>
      <p className="mt-8 font-semibold text-center lg:text-left leading-10 text-[#828282] text-base md:text-lg">
      {t("common:aboutUSText")}
      </p>
    </div>
  );
};

export default AboutText;
