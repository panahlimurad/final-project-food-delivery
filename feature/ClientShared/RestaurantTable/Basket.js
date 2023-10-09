import React from 'react';
import ScrollableTable, { Td, Th } from '../ScrollableTable/ScrollableTable';
import pizza from "../../../public/svg/pizza.svg";
import Image from 'next/image';
import styles from "../../../pages/restaurants/[id]/AboutRestaurants.module.css";
import add from "../../../public/svg/basket1.svg";
import deleteItem from "../../../public/svg/delete.svg"
export const Basket = () => {
    return (
        <div className={`w-[467px] h-full ${styles["basket-container"]} bg-[#F3F4F6]`}>
            <ScrollableTable >
                <thead className='text-center w-full border-b-[1px] border-[#E0E0E0]'>
                    <tr>
                        <Th colSpan="3">
                            <div className='flex  text-[#D63626]'>
                                <div className="w-[45px] h-[45px]" style={{ color: "#D63626" }}>
                                    <Image src={add} alt='basket' />

                                </div>
                                <p >3 items</p>

                            </div>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=' relative'>
                        <Td size="sm">
                            <div className='w-[45px] h-[45px]'>
                                <Image src={pizza} alt='pizza' />

                            </div>
                        </Td>
                        <Td size="sm" width={250}>
                            <h3 className={styles.basketTitle}>Papa John’s Pizza Restaurant</h3>
                            <p className={styles["restaurant-paragraf"]}>$15.80</p>
                        </Td>
                        <Td size="sm">
                            <button className={styles["basket-btn"]}>
                                <span>+</span>2<span>-</span>
                            </button>
                        </Td>
                        <Td><span className='w-[25px] h-[25px] absolute right-2 top-6'><Image src={deleteItem} alt='delete' /></span></Td>
                    </tr>
                    <tr className=' relative'>
                        <Td size="sm">
                            <div className='w-[45px] h-[45px]'>
                                <Image src={pizza} alt='pizza' />

                            </div>
                        </Td>
                        <Td size="sm" width={250}>
                            <h3 className={styles.basketTitle}>Papa John’s Pizza Restaurant</h3>
                            <p className={styles["restaurant-paragraf"]}>$15.80</p>
                        </Td>
                        <Td size="sm">
                            <button className={styles["basket-btn"]}>
                                <span>+</span>2<span>-</span>
                            </button>
                        </Td>
                        <Td><span className='w-[25px] h-[25px] absolute right-2 top-6'><Image src={deleteItem} alt='delete' /></span></Td>
                    </tr>
                    <tr className=' relative'>
                        <Td size="sm">
                            <div className='w-[45px] h-[45px]'>
                                <Image src={pizza} alt='pizza' />

                            </div>
                        </Td>
                        <Td size="sm" width={250}>
                            <h3 className={styles.basketTitle}>Papa John’s Pizza Restaurant</h3>
                            <p className={styles["restaurant-paragraf"]}>$15.80</p>
                        </Td>
                        <Td size="sm">
                            <button className={styles["basket-btn"]}>
                                <span>+</span>2<span>-</span>
                            </button>
                        </Td>
                        <Td><span className='w-[25px] h-[25px] absolute right-2 top-6'><Image src={deleteItem} alt='delete' /></span></Td>
                    </tr>

                </tbody>

            </ScrollableTable>
            <div className='flex items-center justify-center mt-20 relative mb-6'>
                <button className={`${styles["basket-btn1"]}`}>Checkout</button>
                <button className={`${styles["basket-totalAmount"]}`}>$37.40</button>
            </div>
        </div>
    );
}
