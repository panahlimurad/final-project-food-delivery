import React from "react";
import restLogo from "../../../../public/svg/restLogo.svg";
import Image from "next/image";

const CardRestaurant = () => {
  return (
    <div
      className="w-[235px] h-[345px] flex flex-col gap-4 justify-center items-center p-3 cursor-pointer"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}>
      <div>
        <Image width={174} height={160} src={restLogo} />
      </div>
      <div className="font-bold text-xl text-[#4F4F4F]">Cofee Mania</div>
      <div className="text-base font-normal text-[#828282]">
        <p>chinese, sea-food, thai, lebanese, caribbean</p>
      </div>
      <div className="flex justify-between w-[200px]">
        <div className="font-bold text-base text-[#4F4F4F]">$5 Delivery</div>
        <div className="w-[78px] h-[30px] flex items-center justify-center rounded-3xl font-medium text-base text-white bg-[#D63626]">
          10 Min
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
