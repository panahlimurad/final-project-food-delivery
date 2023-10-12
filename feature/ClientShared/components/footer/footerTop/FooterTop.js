import styles from "./footerTop.module.css";
import pizza from "../../../../../public/svg/pizza.svg";
import hamburger from "../../../../../public/svg/hamburger1.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const FooterTop = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`rounded-[50px] ${styles["footer-Top"]}`}>
      <Image
        src={pizza}
        alt="pizza"
        className={`${styles["footerTop-image"]}`}
      />
      <div className={styles.main}>
        <h6 className={styles.title}>
          {t("common:DiscoverRestaurantsNearFromyou")}
        </h6>
        <button
          className={`${styles["footer-btn"]} w-[220px] h-[60px] rounded-[30px] text-[#fff] bg-[#FB9300]`}>
          {t("common:Explorenow")}
        </button>
      </div>
      <Image
        src={hamburger}
        alt="hamburger"
        className={`${styles["footerTop-image"]}`}
      />
    </div>
  );
};
