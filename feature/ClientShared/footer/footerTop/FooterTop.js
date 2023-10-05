import styles from "./footerTop.module.css"
import pizza from "../../../../public/svg/pizza.svg"
import hamburger from "../../../../public/svg/hamburger1.svg"
import { colors } from '@/styles/colors/colors'
import Image from "next/image";

 export const FooterTop = () => {
    return (
        <div className={`rounded-[50px] ${styles["footer-Top"]}`}>
            <Image src={pizza} alt="pizza" className={`${styles["footerTop-image"]}`}/>
            <div className={styles.main}>
                <h6 className={styles.title}>Discover Restaurants
                    Near From you</h6>
                <button className={`${styles["footer-btn"]} w-[220px] h-[60px] rounded-[30px] text-[#fff] bg-[#FB9300]`} style={{ background: colors.mainOrange }}>Explore now</button>
            </div>
            <Image src={hamburger} alt="hamburger" className={`${styles["footerTop-image"]}`}/>
        </div>
    )
}

