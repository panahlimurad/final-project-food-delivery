
import style from "./TopContent.module.css";

import  Diagram1 from "../../../../feature/adminFolders/assets/image/dashboard/diagram1.svg";
import  Diagram2 from "../../../../feature/adminFolders/assets/image/dashboard/diagram2.svg";
import Image from "next/image";
import { t } from "i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });


const TopContent = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="flex mb-6 max-[668px]:flex-col">
      <div
        className={`${style.box1} relative w-2/5 max-[668px]:w-full max-[668px]:mb-6 bg-[#27283C] text-[#C7C7C7]`}>
        <h2 className="mb-4">{t("common:Orders")}</h2>
        <div className="flex justify-center items-center">
          <Image className={style.picture1} src={Diagram1}/>
        </div>
        <p className={`${style.paragraf1} text-center absolute top-40`}>
          {t("common:Projects")}<span className="block ml-1.5">{t("common:account")}</span>
        </p>

        <div className="mt-8 flex gap-4 ml-2 max-[1230px]:ml-0 max-[1230px]:flex-col max-[830px]:text-xs max-[668px]:text-base max-[668px]:flex-row max-[668px]:ml-4 max-[410px]:ml-0">
          <div className="flex items-center gap-3 ">
            <span className="w-4 h-4 rounded-full bg-[#EB5757]"></span>
            <p>KFC</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#A84069]"></span>
            <p>KLM</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#BB6BD9]"></span>
            <p>American Express</p>
          </div>
        </div>
      </div>
      <div className={`${style.box2}  w-3/5 max-[668px]:w-full bg-[#27283C]`}>
        <h2 className="mb-2 text-[#C7C7C7]">TotalSalary</h2>
        <p className="mb-6 text-[#4F4F4F]">{t("common:Years")}</p>
        <div className="flex justify-center items-center">
          <Image className={style.picture2} src={Diagram2}/>
        </div>
        <div className="text-[#C7C7C7] mt-8 flex  gap-4 ml-28 max-[1220px]:ml-16 max-[950px]:ml-8 max-[880px]:ml-2 max-[830px]:text-xs max-[668px]:text-base max-[668px]:ml-8">
          <div className="flex items-center  gap-3">
            <span className="w-4 h-4 rounded-full bg-[#F4A26C]"></span>
            <p>{t("common:February")}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#3FAEA3]"></span>
            <p>{t("common:March")}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#914DF0]"></span>
            <p>{t("common:April")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent