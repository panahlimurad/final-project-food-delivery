import styles from "../Section2/Section2.module.css"
import kfc from "../../../../../public/svg/kfc.svg"
import hamburger from "../../../../../public/svg/hamburger2.svg"
import pizza from "../../../../../public/svg/pizza1.svg"
import Image from "next/image"
 export const Section4 = () => {
    return (
        <div className={`flex flex-col items-center h-[800px] ${styles["section-4"]}`}>
            <div className={`w-[780px] flex flex-col items-center mb-8 ${styles["top-content"]}`}>
                <h1 className={`text-[#181617] ${styles["section-title"]}`}>Our Popular Update New Foods</h1>
                <p className={`${styles["section-paragraf"]}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className={`flex items-center ${styles["card-section"]}`}>
                <div className={`${styles["card"]}  mr-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}>
                    <Image src={hamburger} alt="hamburger" className="w-[241px] h-[223px]" />
                    <h2 className={`${styles["card-title"]}`}>Dubble Chees</h2>
                    <p className={`${styles["card-paragraf"]}`}>
                        Lorem ipsum is placeholder commonly used in the graphic
                    </p>
                </div>
                <div className={`${styles["card"]} mr-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}>
                    <Image src={pizza} className="w-[241px] h-[223px]" alt="pizza" />
                    <h2 className={`${styles["card-title"]}`}>Margarita</h2>
                    <p className={`${styles["card-paragraf"]}`}>
                        Lorem ipsum is placeholder commonly used in the graphic
                    </p>
                </div>
                <div className={`${styles["card"]} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}>
                    <Image src={kfc} className="w-[241px] h-[223px]" alt="kfc"/>
                    <h2 className={`${styles["card-title"]}`}>Twister Menu</h2>
                    <p className={`${styles["card-paragraf"]}`}>
                        Lorem ipsum is placeholder commonly used in the graphic  </p>
                </div>
            </div>
        </div>
    )
}