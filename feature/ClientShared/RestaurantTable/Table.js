import React from 'react';
import ScrollableTable, { Td, Th } from '../ScrollableTable/ScrollableTable';
import Image from 'next/image';
import styles from "../../../pages/restaurants/[id]/AboutRestaurants.module.css";
import add from "../../../public/svg/basket.svg";
export const Table = ({setActiveModal, datas}) => {
  const handleAddToCart = () => {
    // Sepete ekleme işlemi burada yapılabilir
    // Sepete eklendikten sonra modalı açın
    setActiveModal(true);
  };
  return (

    <div className={`w-[846px] h-[961px] ${styles["scrollbar-container"]} mr-12 `}>
      {datas?.map((data,index)=>(
      <ScrollableTable >
        <thead className='text-center w-full border-b-[1px] border-[#E0E0E0]  p-12'>
          <tr >
            <Th colSpan="4">Products</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td><div className='w-[57px] h-[53px] max-[380px]:w-[46px] max-[380px]:h-[42px]' ><Image src={data.img_url} width={100} height={100} alt='pizza' /></div></Td>
            <Td><div>
              <h3 className={`${styles.restaurantName}`}>{data.name}</h3>
              <p className={`${styles["restaurant-paragraf"]}`}>{data.description}</p>
            </div></Td>
            <Td> <span className={`${styles["span"]}`}>From</span> <span className={styles["product-price"]}>${data.price}</span> </Td>
            <Td><button className={`w-[40px] h-[40px] ${styles["table-btn"]}`}>+</button></Td>
          </tr>
        </tbody>
      </ScrollableTable>
      ))}
      <div className={`flex items-center justify-center mt-20 relative mb-6 ${styles["btn-content"]}`}>
        <div className='flex items-center gap-4 ' onClick={handleAddToCart}><Image src={add} alt='add' />
          <div className='flex gap-1 pt-2'><span>3</span>
            <p> items</p>
          </div>
        </div>
        <button className={`${styles["basket-totalAmount"]}`}>$37.40</button>
      </div>
    </div>

    
  );
}
