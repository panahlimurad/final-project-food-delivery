import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { GetRestaurantsById } from "../../../adminShared/services/dataApi";


const CardRestaurant = ({item_id}) => {
  // console.log("name", name);


  const { data, isLoading, isError, error } = useQuery(
    ['restaurant', item_id],
    async () => {
      try {
        return await GetRestaurantsById(item_id);
      } catch (error) {
        throw error;
      }
    }
  );

  // console.log("rest id", item_id);

  const dataArray = data ? Object.values(data) : [];

  // console.log("checkin client data", dataArray);

  return (
    <div

      className="w-[235px] h-[345px] flex flex-col gap-4 justify-center items-center p-3 cursor-pointer"
      style={{
        boxShadow: "2px 4px 4px 4px rgba(0, 0, 0, 0.25)",

      }}>
      <div className=" w-[80%] h-[80%]">
       <Image
       className="w-[100%] h-[100%]"
       src={dataArray[1]?.data?.img_url}
       width={100}
       height={100}
       alt="Res"/>
      </div>
      <div className="font-bold text-xl text-[#4F4F4F]">{dataArray[1]?.data?.name}</div>
      <div className="text-base font-normal text-[#828282]">
        <p>{dataArray[1]?.data?.cuisine}</p>
      </div>
      <div className="flex justify-between w-[200px]">
        <div className="font-bold text-base text-[#4F4F4F]">{dataArray[1]?.data?.delivery_price} Delivery</div>
        <div className="w-[78px] h-[30px] flex items-center justify-center rounded-3xl font-medium text-base text-white bg-[#D63626]">
        {dataArray[1]?.data?.delivery_min} Min
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
