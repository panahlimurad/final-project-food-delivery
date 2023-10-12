import React from "react";
import { useTranslation } from "next-i18next";


const WorkText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-center font-semibold text-2xl sm:text-3xl">{t("common:HowItworks")}</h1>
      <p className="text-center leading-9 font-medium text-base sm:text-lg">
      {t("common:howItWorksText")}
      </p>
    </div>
  );
};

export default WorkText;
