import styles from "./Section1.module.css";
import Image from "next/image";
import rightImage from "../../../../../public/svg/Section1.svg";
import hamburger from "../../../../../public/svg/hamburger1.svg";
import fryPoteto from "../../../../../public/svg/frypoteto.svg";
import pizza from "../../../../../public/svg/pizza.svg";


export const Section1 = () => {
 

  return (
    <div
      className={`flex items-center justify-around bg-[#F3F4F6] rounded h-[740px] pb-28 mb-20 ${styles["section-1"]}`}>
      <div
        className={`w-[643px] flex flex-col  ml-6 ${styles["left-container"]}`}>
        <h1 className={`${styles.title}`}>
          Our Food site makes it easy to find local food
        </h1>
        <p className={`${styles.paragraf} w-[510px]`}>
          {" "}
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className={`flex gap-9 ${styles["btn-areas"]}`}>
          <button
          
            className={`w-[220px] h-[70px] rounded-[30px] bg-[#D63626] text-[#FFF] text-center hover:bg-[#C43626] ${styles["section-btn"]}`}>
            Register
          </button>
          <button
            className={`w-[220px] h-[70px] border-solid border-2 border-[#828282] rounded-[30px] bg-[#F2F2F2] text-[#828282] text-center hover:bg-[#bcc8e2b7] ${styles["section-btn"]}`}>
            Order now
          </button>
        </div>
      </div>
      <div
        className={`${styles["right-container"]} w-[529px] bg-[#181617] h-[486px] rounded-[80px]  relative max-[1280px]:w-[500px]`}>
        <div
          className={`z-10 absolute  -right-9  -top-12  w-[627px] h-[559px] ${styles["right-image"]}`}>
          <Image src={rightImage} alt="hamburger" />
        </div>
        <div
          className={` ${styles.boxShadow} w-[278px] h-[91px] bg-[#FFF] gap-4 absolute -top-8 z-30 -right-6`}>
          <Image src={pizza} className="w-[80px] h-[60px] max-[380px]:w-[40px]" alt="Pizza" />
          <p className={`${styles.paragraf1}`}>Pizza Hut Yummy ...</p>
        </div>
        <div
          className={` ${styles.boxShadow} ${styles.secondClass} w-[278px] h-[91px] bg-[#FFF] gap-4 absolute bottom-28 z-30 -left-20`}>
          <Image
            src={fryPoteto}
            className="w-[80px] h-[60px]"
            alt="Fry Poteto"
          />
          <p className={`${styles.paragraf1}`}>French Fries Yummy ...</p>
        </div>
        <div
          className={` ${styles.boxShadow} ${styles.secondClass} w-[278px] h-[91px] bg-[#FFF] gap-4 absolute bottom-0 z-30 -right-6`}>
          <Image
            src={hamburger}
            className="w-[80px] h-[60px]"
            alt="Hamburger"
          />
          <p className={`${styles.paragraf1}`}>Cheesburger Yummy ...</p>
        </div>
      </div>
    </div>
  );
};
