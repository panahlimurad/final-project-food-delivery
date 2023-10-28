import Image from "next/image";
import styles from "./Section3.module.css";

export const Section3 = ({ data }) => {
    const offers = data;
      console.log(offers)
    return (
        <div className="mb-44">
            <div className={`flex justify-around items-center mb-40 ${styles["section-3"]}`}>
                <div className={`w-2/5 ${styles["top-container"]}`}>
                    <h3 className={`${styles["section3-title"]}`}>{offers[0]?.name}</h3>
                    <p className={`${styles["section3-paragraf"]}`}>{offers[0]?.description}</p>
                </div>
                <div className={`w-1/3 relative mt-8 ${styles["bottom-container"]}`}>
                    <div className={`${styles["section3-container"]}`}></div>
                    <div className={`w-[626px] h-[441px] absolute z-10 top-6 -right-20 ${styles["section3-image1"]}`}>
                        <Image
                            src={offers[0]?.img_url}
                            alt="kfc"
                            width={498}
                            height={472}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
            <div className={`flex justify-around items-center mb-36 ${styles["section3-second"]}`}>
                <div className={`w-1/3 relative mt-10 ${styles["bottom-container"]}`}>
                    <div className={`${styles["section3-container1"]} ml-12`}></div>
                    <div className={`w-[468.362px] h-[472.84px] absolute z-10 top-6 -right-12 ${styles["section3-image2"]}`}>
                        <Image
                            src={offers[1]?.img_url}
                            alt="pizza"
                            width={468.362}
                            height={472.84}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div className={`w-2/5 mb-6 ${styles["top-container"]}`}>
                    <h3 className={`${styles["section3-title"]}`}>{offers[1]?.name}</h3>
                    <p className={`${styles["section3-paragraf"]}`}>{offers[1]?.description}</p>
                </div>
            </div>
            <div className={`flex justify-around items-center ${styles["section-3"]}`}>
                <div className={`w-2/5 ${styles["top-container"]}`}>
                    <h3 className={`${styles["section3-title"]}`}>{offers[2]?.name}</h3>
                    <p className={`${styles["section3-paragraf"]}`}>{offers[2]?.description}</p>
                </div>
                <div className={`w-1/3 relative mt-16 ${styles["bottom-container"]}`}>
                    <div className={`${styles["section3-container"]}`}></div>
                    <div className={`w-[637px] h-[461px] absolute z-10 top-6 -right-6 ${styles["section3-image3"]}`}>
                        <Image
                            src={offers[2]?.img_url}
                            alt="fryPoteto"
                            width={637}
                            height={461}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
