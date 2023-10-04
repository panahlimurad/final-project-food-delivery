
import style from "./BottomContent.module.css"

// import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";


// export const getStaticProps = async ({locale})=>({
//   props:{
//       ...(await serverSideTranslations(locale, ["common"]))
//   }
// })


const BottomContent = () => {
  const { t, i18n } = useTranslation("common");
    
    return (
        <div className="flex max-[668px]:flex-col">
            <div className={`${style.box3}  w-3/5 relative max-[668px]:w-full max-[668px]:mb-6 bg-[#27283C] text-[#C7C7C7]`}>
                <h3 className="text-[#C7C7C7]">{t("common:AssignedRisks")}</h3>
                <p className={`${style.paragraf3} text-[#C7C7C7]`}>{t("common:NoRisksAssigned")}</p>

            </div>
            <div className={`${style.box4}  w-2/5 relative max-[668px]:w-full bg-[#27283C] text-[#C7C7C7]`}>
                <h3 className="text-[#C7C7C7]">{t("common:AssignedActionItems")}</h3>
                <p className={`${style.paragraf4} text-[#8E8E93]`}>{t("common:NoActionItemsAssigned")}</p>

            </div>
        </div>
    )

}

export default BottomContent