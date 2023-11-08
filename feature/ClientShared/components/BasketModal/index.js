import Image from "next/image";
import deleteItem from "../../../../public/svg/delete.svg"
import styles from "./BasketModal.module.css"
import { ScrollBarContainer } from "../../ScrollableTable/ScrollableTable";
function BasketModal({ setActiveModal, activeModal,datas }) {
  const handleClose = () => {
    setActiveModal(false)
  }
  const modalClasses = activeModal ? `${styles.basketModal} ${styles.showModal} ` : `${styles.basketModal} ${styles.hideModal}`;
  return (

      <div className={`${activeModal && styles.overlay}`}>

        <div className={modalClasses}>
          <div className=" flex  justify-end mb-6 pr-2 ">
            <button onClick={handleClose} className={`${styles.closeModal}`}>x</button>
          </div>
          <ScrollBarContainer>
{datas.map((data,index)=>{

          <table className="w-full h-full">
            <tbody>
             <tr className={`${styles.tableRow} relative  border-b-[1px] border-[#E0E0E0]`}>
                <td className="w-[68px] pr-8 max-[981px]:pr-4 max-[380px]:pr-2 max-[380px]:w-[40px]"><div className="w-[68px] h-[68px] max-[683px]:w-[48px] max-[683px]:h-[48px] max-[380px]:w-[38px] max-[380px]:h-[38px] "><Image src={data.img_url} alt="pizza" width={45} height={45} /></div></td>
                <td className="w-3/5  max-[981px]:w-8/12  max-[922px]:w-3/5 max-[380px]:w-7/12 max-[328px]:w-3/5"><div><h3 className={`${styles.restaurantName}`}>{data.name}</h3> <p className={`${styles["restaurant-paragraf"]}`}>${data.price}</p></div></td>
                <td className="w-[80px] p-2"> <button className={styles["basket-btn"]}>
                  <span>+</span>2<span>-</span>
                </button></td>
                <td><span className='w-[25px] h-[25px] absolute right-2 top-6'><Image src={deleteItem} alt='delete' /></span></td>
              </tr> 
              
            </tbody>
          </table>
})}
          </ScrollBarContainer>
          <div className='flex items-center justify-center mt-8 relative mb-6'>
                <button className={`${styles["basket-btn1"]}`}>Checkout</button>
                <button className={`${styles["basket-totalAmount"]}`}>$37.40</button>
            </div>
        </div>

      </div>

  );
}

export default BasketModal;