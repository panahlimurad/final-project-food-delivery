import LayoutUser from "../../../feature/ClientShared/components/LayoutUser/LayoutUser"
import LayoutClient from "../../../layoutClient/LayoutClient"
import styles from "../../../feature/ClientShared/components/BasketModal/BasketModal.module.css"
import pizza from "../../../public/svg/pizza.svg";
import Image from 'next/image';
import add from "../../../public/svg/basket1.svg";
import deleteItem from "../../../public/svg/delete.svg"
import { ScrollBarContainer } from "../../../feature/ClientShared/ScrollableTable/ScrollableTable";

const Basket = () => {
    return (
        <LayoutClient>
            <LayoutUser>
                <div className={`w-full h-full ${styles["basket-container"]} bg-[#F3F4F6]`}>
                    <ScrollBarContainer>
                        <table className="w-full h-full">
                            <thead>
                                <tr>
                                    <th colSpan={3} className={`${styles.tableRow} relative  border-b-[1px] border-[#E0E0E0]`} > <h5 className="pt-4 text-3xl max-[420px]:text-lg">Your Basket</h5> <div className=" flex  items-center ml-4 max-[420px]:hidden"><Image src={add} /><span className="flex gap-4 ml-4">1</span>items</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={`${styles.tableRow} relative  border-b-[1px] border-[#E0E0E0]`}>
                                    <td className="w-[68px] pr-8  pl-8 max-[981px]:pr-4 max-[380px]:pr-2 max-[380px]:w-[40px] max-[380px]:pl-2 "><div className="w-[68px] h-[68px] max-[683px]:w-[48px] max-[683px]:h-[48px] max-[380px]:w-[38px] max-[380px]:h-[38px] "><Image src={pizza} alt="pizza" /></div></td>
                                    <td className="w-9/12  max-[981px]:w-8/12  max-[922px]:w-3/5 max-[380px]:w-7/12 max-[328px]:w-3/5"><div><h3 className={`${styles.restaurantName}`}>Papa John’s Pizza Restaurant</h3> <p className={`${styles["restaurant-paragraf"]}`}>$15.80</p></div></td>
                                    <td className="w-[40px] p-2"> <button className={`${styles["basket-btn"]} `}>
                                        <span >+</span>2<span>-</span>
                                    </button></td>
                                    <td><span className='w-[25px] h-[25px] absolute right-2 top-6'><Image src={deleteItem} alt='delete' /></span></td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </ScrollBarContainer>
                    <div className='flex items-center justify-center mt-8 relative bottom-1 mb-2'>
                        <button className={`${styles["basket-btn1"]}`}>Checkout</button>
                        <button className={`${styles["basket-totalAmount"]}`}>$37.40</button>
                    </div>
                </div>
            </LayoutUser>
        </LayoutClient>

    )
}
export default Basket