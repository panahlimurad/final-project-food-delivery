import React, { useEffect, useState } from "react";
import { ScrollBarContainer } from "../../ScrollableTable/ScrollableTable";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { GetBasket } from "../../../adminShared/services/dataApi";

const CheckoutYourOrder = () => {
  const {
    data: basketData,
    isLoading: isBasketLoading,
    isError: isBasketError,
    error: basketError,
  } = useQuery("basket", GetBasket, {
    // onSuccess: (res) => {
    //   console.log("basket", res);
    // },
    // onError: (err) => {
    //   console.log(err);
    // },
  });

  const totalAmmount = basketData?.result?.data?.total_amount;

  return (
    <div className=" flex justify-center ml-8 w-full">
      <div className=" h-auto md:bg-[#f2f5fb] bg-[#FFFFFF] text-[#828282]  pt-8 rounded md:shadow-lg shadow-none xl:p-5 lg:p-2  p-1">
        <h1 className="text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 text-left block md:hidden ">
          Checkout
        </h1>
        <h1 className="md:text-center text-lg font-medium ">Your Order</h1>
        <ScrollBarContainer>
          <div className="flex flex-col mt-4 justify-center items-center gap-4 pr-5 w-full  ">
            {basketData?.result?.data?.items.map((data, index) => (
              <ul
                key={index}
                className="text-lg flex mb-4 gap-6 justify-between font-medium items-center w-[90%] h-auto mx-8">
                <li className="mb-2">
                  {data.count} <span className="text-sm">x</span> {data.name}
                </li>

                <li className="mb-2">{data.amount} $</li>
              </ul>
            ))}
          </div>
        </ScrollBarContainer>

        <hr className="mx-3 h-[1px] border text-[#E0E0E0]" />
        <div className="flex justify-between mx-2 md:mx-5  items-center gap-4 mt-4">
          <ul className="text-lg font-medium">
            <li>Total</li>
          </ul>
          <ul className="text-sm font-normal">
            <li>{totalAmmount} $</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckoutYourOrder;
