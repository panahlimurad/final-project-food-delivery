import Image from "next/image";
import twiter from "../../../../../public/svg/twiter.svg"
import instagram from "../../../../../public/svg/instagram.svg"
import facebook from "../../../../../public/svg/facebook.svg"
import styles from "./FooterBottom.module.css"
import Link from "next/link";
import { useTranslation } from "next-i18next";


 export const FooterBottom = () => {

  const { t } = useTranslation("common");

    return (
        <div className={`${styles["footer-bottom"]}   pt-20`}>
            <div className={`${styles["section-left"]}`}>
                <div className={`${styles["section-title"]} text-[#F5F5F5] mb-2`}>
                    Foody<span className="text-[#EAAB00]">.</span>
                </div>
                <p className={` text-[#828282] ${styles["title"]}`}>Lorem ipsum is placeholder text commonly used in the graphic</p>
                <div className="flex gap-4 mt-2">
                    <Link className=" w-[50px] h-[50px] border-[#C4C4C4] border-solid border-2  rounded-full p-1 " href="./facebook"><Image src={facebook} /></Link>
                    <Link className="w-[50px] h-[50px] bg-[#FB9300] rounded-full p-2"  href="./facebook"><Image src={instagram} /></Link>
                    <Link className="w-[50px] h-[50px] border-[#C4C4C4]  border-solid border-2  p-2  rounded-full " href="./facebook"><Image src={twiter} /></Link>

                </div>
            </div>

            <div className={`${styles["section-right"]}`}>
                <div className={`${styles["section-2"]} mr-24`}>
                    <div className={`${styles["section-title"]} text-[#F5F5F5] mb-2`}>{t("common:Popular")} </div>
                    <Link className={`${styles.link}`} href="/programming">{t("common:Programming")} </Link>
                    <Link className={`${styles.link}`} href="/programming"> {t("common:Booksforchildren")} </Link>
                    <Link className={`${styles.link}`}href="/programming">{t("common:Psychology")} </Link>
                    <Link className={`${styles.link}`} href="/programming"> {t("common:Business")} </Link>

                </div>
                <div className={`${styles["section-3"]} mr-24`}>
                    <div className={`${styles["section-title"]} text-[#F5F5F5] mb-2`}>{t("common:Cash")}  </div>
                    <Link className={`${styles.link}`} href="/programming">{t("common:Delivery")} </Link>
                    <Link className={`${styles.link}`} href="/programming">  {t("common:Payment")} </Link>
                    <Link className={`${styles.link}`} href="/programming"> {t("common:Aboutthestore")} </Link>

                </div>
                 <div className={`${styles["section-4"]}`}>
                    <div className={`${styles["section-title"]} text-[#F5F5F5] mb-2`}>{t("common:Help")}  </div>
                    <Link className={`${styles.link}`} href="/programming">{t("common:Contacts")} </Link>
                    <Link className={`${styles.link}`} href="/programming"> {t("common:Purchasereturns")}</Link>
                    <Link className={`${styles.link}`} href="/programming">  {t("common:Buyerhelp")}</Link>

                </div>
            </div>


        </div>
    )

}
