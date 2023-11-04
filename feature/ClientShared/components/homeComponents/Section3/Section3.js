import React from "react";
import Image from "next/image";
import styles from "./Section3.module.css";
import { GetOffer } from "../../../../adminShared/services/dataApi";
import { useQuery } from "react-query";

export const Section3 = () => {
    const { data } = useQuery(
        "offer",
        GetOffer,
        {
            onSuccess: (res) => {
             
            },
        }
    );
    const newoffers = data?.result?.data;


    return (
        <div className="mb-44">
            {newoffers?.map((offer, index) => (
                <div className={`flex justify-around items-center mb-10 ${styles["section-3"]}`} key={index}>
                    <div className={`w-2/5 ${styles["top-container"]}`}>
                        <h3 className={`${styles["section3-title"]}`}>{offer?.name}</h3>
                        <p className={`${styles["section3-paragraf"]}`}>{offer?.description}</p>
                    </div>
                    <div className={`w-1/3 relative mt-8 ${styles["bottom-container"]}`}>
                        <div className={`${styles["section3-container"]}`}></div>
                        <div className={`w-[626px] h-[441px] absolute z-10 top-6 -right-20 ${styles["section3-image1"]}`}>
                            <Image
                                src={offer.img_url}
                                alt={offer.name} 
                                width={498}
                                height={472}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
