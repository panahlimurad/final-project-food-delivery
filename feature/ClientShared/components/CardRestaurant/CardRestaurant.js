import React from "react";
import Image from "next/image";

const CardRestaurant = ({name, img, cuisine, delivery_min,category_id , delivery_price, item_id,isLoading}) => {
  console.log("name", name);
  
  return (
    <div

      className="w-[235px] h-[345px] flex flex-col gap-4 justify-center items-center p-3 cursor-pointer"
      style={{
        boxShadow: "2px 4px 4px 4px rgba(0, 0, 0, 0.25)",
        
      }}>
      <div className=" w-[80%] h-[80%]">
       <Image 
       className="w-[100%] h-[100%]"
       src={img}
       width={100}
       height={100}
       alt="Res"/>
      </div>
      <div className="font-bold text-xl text-[#4F4F4F]">{name}</div>
      <div className="text-base font-normal text-[#828282]">
        <p>{cuisine}</p>
      </div>
      <div className="flex justify-between w-[200px]">
        <div className="font-bold text-base text-[#4F4F4F]">{delivery_price} Delivery</div>
        <div className="w-[78px] h-[30px] flex items-center justify-center rounded-3xl font-medium text-base text-white bg-[#D63626]">
        {delivery_min} Min
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
