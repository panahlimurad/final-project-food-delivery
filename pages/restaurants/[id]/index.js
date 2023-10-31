"use client"
import Image from 'next/image'
import PapaJohns from "../../../public/svg/restorant.png"
import styles from "./AboutRestaurants.module.css"
import { ButtonStyle } from '../../../feature/ClientShared/Button/Button'
import { Table } from '../../../feature/ClientShared/RestaurantTable/Table'
import { Basket } from '../../../feature/ClientShared/RestaurantTable/Basket'
import LayoutClient from "../../../layoutClient/LayoutClient"
import BasketModal from '../../../feature/ClientShared/components/BasketModal'
import { useState } from 'react'
import { getProducts } from '../../../feature/adminFolders/services/dataApi'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { GetProducts } from '../../../feature/adminShared/services/dataApi'
const AboutRestaurants = ({restDaurantData}) => {
  console.log("aaaaaaaaaaaa", restDaurantData.result.data);
  // const { data, isLoading, isError, error } = useQuery(
  //   "products",
  //   GetProducts,
  //   {
  //     onSuccess: (res) => {
  //       console.log(res);
  //     },
  //   }
  // );
  // const restDaurantData = data ? Object.values(data) : [];

  // console.log("data Arrays?", restDaurantData);
  // console.log("bbbbbbbbbbbbbbbbbbbbbbb" , restDaurantData.result.data);
  const [activeModal, setActiveModal] = useState(false)
  const {back} = useRouter()
  return (


    <LayoutClient>
      <div className={`${styles["top-content"]} mt-6 pl-6 pr-6 mb-10 bg-[#FFF]`}>
        <div className={`${styles["content-image"]}`}>
          <Image src={restDaurantData.img_url} alt='restaurant' />
        </div>
        <div className='mt-4 flex items-center  justify-between max-[873px]:flex-col'>
          <div className='w-[366px] max-[873px]:mb-8 max-[485px]:w-[320px] max-[380px]:text-center'>
            <h4 className={`${styles.restaurantName}`}>{restDaurantData.name}</h4>
            <p className={`${styles["restaurant-paragraf"]}`}>{restDaurantData.address}</p>
          </div>
          <div className='flex items-center '>
            <div className='w-[246px] mr-10 max-[485px]:w-[160px] max-[485px]:mr-6 max-[380px]:w-[200px]'>
              <h4 className={`${styles.restaurantName}`}>{restDaurantData.cuisine}</h4>
              <p className={`${styles["restaurant-paragraf"]}`}>{restDaurantData.category_id}</p>

            </div>
            <div className='flex items-center gap-9  max-[380px]:flex-col max-[380px]:gap-2'>
              {/* <ButtonStyle size="sm" color="#D63626" bg="fff">$ {restDaurantData.delivery_min} Delivery</ButtonStyle> */}
              <ButtonStyle size="sm" color="#FFF" bg="#D63626" onClick={back}>Go Back</ButtonStyle>

            </div>
          </div>
        </div>
        <div className={`${styles.line}`}></div>
        <div className='mt-12 pl-4 pr-4 flex  max-[487px]:pl-0 max-[487px]:pr-0'>
          <Table setActiveModal={setActiveModal} />
          <Basket />
        </div>
        <BasketModal setActiveModal={setActiveModal} activeModal={activeModal} />
      </div>
    </LayoutClient>
  )
}

export default AboutRestaurants



export async function getServerSideProps({ query }) {
  const restaurantId = query.id;
  try {
    const data = await GetProducts(restaurantId);
    return {
      props: {
        restDaurantData:data,
      },
    };
  } catch (err) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  
}