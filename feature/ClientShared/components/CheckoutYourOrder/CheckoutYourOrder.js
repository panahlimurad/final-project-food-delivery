import React from "react";
import { ScrollBarContainer } from "../../ScrollableTable/ScrollableTable";

const CheckoutYourOrder = () => {
  return (
    <div className=" flex justify-center ml-8 w-full ">
      <div className=" h-auto   md:bg-[#f2f5fb] bg-[#FFFFFF] text-[#828282]  pt-8 rounded md:shadow-lg shadow-none xl:p-5 lg:p-2  p-1">
        <h1 className="text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 text-left block md:hidden ">
          Checkout
        </h1>
        <h1 className="md:text-center text-lg font-medium ">Your Order</h1>
        <ScrollBarContainer>
          <div className="flex justify-center items-center gap-4 pr-5 w-full  ">
            <ul className="text-lg font-medium leading-5 items-center h-auto mx-8 ">
              <li className="mb-4">1</li>
              <li className="mb-4">2</li>
              <li className="mb-4">2</li>
              <li className="mb-4">2</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
              <li className="mb-4">1</li>
            </ul>
            <ul className="sm:text-sm text-xs font-normal  ">
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa Coffe </li>
              <li className="mb-4"> x Coca Cola </li>
              <li className="mb-4"> x Papa Coffe </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
              <li className="mb-4"> x Papa John’s </li>
            </ul>
            <ul className="sm:text-sm text-xs font-normal ml-16 my-6 ">
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$6.00</li>
              <li className="mb-4">$3.80</li>
              <li className="mb-4">$6.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
              <li className="mb-4">$8.00</li>
            </ul>
          </div>
        </ScrollBarContainer>

        <hr className="mx-3 h-[1px] border text-[#E0E0E0]" />
        <div className="flex justify-between mx-2 md:mx-5  items-center gap-4 mt-4">
          <ul className="text-lg font-medium">
            <li>Total</li>
          </ul>
          <ul className="text-sm font-normal">
            <li>$17.80</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckoutYourOrder;
