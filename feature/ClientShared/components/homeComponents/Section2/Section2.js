import Image from "next/image";
import picture1 from "../../../../../public/svg/homePicture1.svg"
import picture2 from "../../../../../public/svg/homePicture2.svg"
import picture3 from "../../../../../public/svg/homePicture3.svg"
import styles from "./Section2.module.css"
 export const Section2 = () => {
    return (
        <div className="flex flex-col items-center  mb-72  max-[380px]:mb-8">
            <div className={`w-[780px] flex flex-col items-center mb-8 ${styles["top-content"]}`}>
                <h1 className={`text-[#181617] ${styles["section-title"]}`}>Features</h1>
                <p className={`${styles["section-paragraf"]}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className={`flex items-center ${styles["card-section"]}`}>
                <div className={`${styles["card"]}  mr-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 max-[1185px]:mr-8`}>
                    <Image src={picture1} className={`w-[241px] h-[223px] ${styles["card-image"]}`} alt="picture1"/>
                    <h2 className={`${styles["card-title"]}`}>Discount Boucher</h2>
                    <p className={`${styles["card-paragraf"]}`}>
                        Lorem ipsum is placeholder commonly used in the graphic
                    </p>
                </div>
                <div className={`${styles["card"]}  mr-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 max-[1185px]:mr-8`}>
                    <Image src={picture2} className={`w-[241px] h-[223px] ${styles["card-image"]}`} alt="picture2" />
                    <h2 className={`${styles["card-title"]}`}>Fresh healthy Food</h2>
                    <p className={`${styles["card-paragraf"]}`}>
                    Lorem ipsum is placeholder commonly used in the graphic
                    </p>
                </div>
                <div className={`${styles["card"]} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}>
                    <Image src={picture3} className={`w-[241px] h-[223px] ${styles["card-image"]}`}  alt="picture3"/>
                    <h2 className={`${styles["card-title"]}`}>Fast Home Delivery</h2>
                    <p className={`${styles["card-paragraf"]}`}>
                    Lorem ipsum is placeholder commonly used in the graphic                    </p>
                </div>
            </div>
        </div>
    )
}