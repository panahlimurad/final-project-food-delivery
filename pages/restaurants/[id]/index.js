"use client";
import Image from "next/image";
import styles from "./AboutRestaurants.module.css";
import { ButtonStyle } from "../../../feature/ClientShared/Button/Button";
import { Table } from "../../../feature/ClientShared/RestaurantTable/Table";
import { Basket } from "../../../feature/ClientShared/RestaurantTable/Basket";
import LayoutClient from "../../../layoutClient/LayoutClient";
import BasketModal from "../../../feature/ClientShared/components/BasketModal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { GetRestaurantsById } from "../../../feature/adminShared/services/dataApi";


const AboutRestaurants = () => {

  const router = useRouter();
  const { id } = router.query;
  const { back } = useRouter();
  const [activeModal, setActiveModal] = useState(false);

  // console.log("id", id);
  const { data, isLoading, isError, error } = useQuery(
    ["restaurant", id],
    () => GetRestaurantsById(id),
    {
      // onSuccess: (res) => {
      //   console.log("query", res);
      // },
    }
  );
  const dataArray = data ? Object.values(data.result) : [];

  // console.log("kakkak", dataArray);

  return (
    <LayoutClient>
      {dataArray?.map((restaurant, index) => (
        <div
          key={index}
          className={`${styles["top-content"]} mt-6 pl-6 pr-6 mb-10 bg-[#FFF]`}>
          <div className={`${styles["content-image"]} flex justify-center`}>
            <Image
              src={restaurant.img_url}
              alt="restaurant"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex items-center  justify-between max-[873px]:flex-col">
            <div className="w-[366px] max-[873px]:mb-8 max-[485px]:w-[320px] max-[380px]:text-center">
              <h4 className={`${styles.restaurantName}`}>{restaurant.name}</h4>

              <p className={`${styles["restaurant-paragraf"]}`}>
                {restaurant?.address}
              </p>
            </div>
            <div className="flex items-center ">
              <div className="w-[246px] mr-10 max-[485px]:w-[160px] max-[485px]:mr-6 max-[380px]:w-[200px]">
                <h4 className={`${styles.restaurantName}`}>
                  {restaurant.cuisine}
                </h4>
                <p className={`${styles["restaurant-paragraf"]}`}>
                  {restaurant?.category_id}
                </p>
              </div>
              <div className="flex items-center gap-9  max-[380px]:flex-col max-[380px]:gap-2">
                <ButtonStyle size="sm" color="#D63626" bg="fff">
                  $ {restaurant.delivery_min} Delivery
                </ButtonStyle>
                <ButtonStyle size="sm" color="#FFF" bg="#D63626" onClick={back}>
                  Go Back
                </ButtonStyle>
              </div>
            </div>
          </div>
          <div className={`${styles.line}`}></div>
          <div className="mt-12 pl-4 pr-4 flex  max-[487px]:pl-0 max-[487px]:pr-0">
            <Table
              setActiveModal={setActiveModal}
              datas={dataArray[0].products}
            />
            <Basket datas={dataArray[0].products} />
          </div>
          <BasketModal
            setActiveModal={setActiveModal}
            activeModal={activeModal}
            datas={dataArray[0].products}
          />
        </div>
      ))}
    </LayoutClient>
  );
};
export default AboutRestaurants;
