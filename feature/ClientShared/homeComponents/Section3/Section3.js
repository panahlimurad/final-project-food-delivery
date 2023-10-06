import Image from "next/image";
import kfc from "../../../../public/svg/kfc.svg"
import fryPoteto from "../../../../public/svg/frypoteto.svg"
import pizza from "../../../../public/svg/pizza3.svg"
import styles from "./Section3.module.css"
export const Section3 = () => {
    return (
        <div className="mb-44">
            <div className={`flex justify-around items-center mb-40 ${styles["section-3"]}`}>
                <div className={`w-2/5 ${styles["top-container"]}`}>
                    <h3 className={`${styles["section3-title"]}`}>Menu That Always Make You Fall In Love</h3>
                    <p className={`${styles["section3-paragraf"]}`}>Lorem ipsum is placeholder text commonly used
                        in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.Lorem ipsum is
                        placeholder text commonly
                        used in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.</p>
                </div>
                <div className={`w-1/3 relative mt-8 ${styles["bottom-container"]}`} >
                    <div className={`${styles["section3-container"]}`}></div>
                    <div className={`w-[626px] h-[441px] absolute z-10 top-6 -right-20 ${styles["section3-image1"]}`}>
                        <Image src={kfc} alt="kfc" className="" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </div>
            <div className={`flex justify-around items-center mb-36 ${styles["section3-second"]}`}>
                <div className={`w-1/3 relative mt-10 ${styles["bottom-container"]}`} >
                    <div className={`${styles["section3-container1"]} ml-12`}></div>
                    <div className={`w-[468.362px] h-[472.84px] absolute z-10 top-6 -right-12 ${styles["section3-image2"]}`}>
                        <Image src={pizza} alt="pizza" className="" style={{ objectFit: "cover" }} />
                    </div>
                </div>
                <div className={`w-2/5 mb-6 ${styles["top-container"]}`}>
                    <h3 className={`${styles["section3-title"]}`}>Yummy Always Papa John’s Pizza.Agree?</h3>
                    <p className={`${styles["section3-paragraf"]}`}>Lorem ipsum is placeholder text commonly used
                        in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.Lorem ipsum is
                        placeholder text commonly
                        used in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.</p>
                </div>

            </div>
            <div className={`flex justify-around items-center ${styles["section-3"]}`}>
                <div className={`w-2/5 ${styles["top-container"]}`}>
                    <h3 className={`${styles["section3-title"]}`}>Do You Like French Fries? Mmm...</h3>
                    <p className={`${styles["section3-paragraf"]}`}>Lorem ipsum is placeholder text commonly used
                        in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.Lorem ipsum is
                        placeholder text commonly
                        used in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups.</p>
                </div>
                <div className={`w-1/3 relative mt-16 ${styles["bottom-container"]}`} >
                    <div className={`${styles["section3-container"]}`}></div>
                    <div className={`w-[637px] h-[461px] absolute z-10 top-6 -right-6 ${styles["section3-image3"]}`}>
                        <Image src={fryPoteto} alt="fryPoteto" className=" w-full h-full"  />
                    </div>
                </div>
            </div>
        </div>)
}