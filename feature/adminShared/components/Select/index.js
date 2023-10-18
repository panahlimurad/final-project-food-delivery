import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Select = () => {
  return (
    <div className="flex relative">
      <select class="md:w-[200px] w-full h-9 text-[#F2F2F2] sm:rounded-2xl rounded-md tracking-wide appearance-none bg-[#5A5B70] bg-no-repeat bg-[96%] md:bg-[162px_4px] cursor-pointer px-3 bg-grayInput outline-none ">
        <option value="" className="bg-white text-black h-4">
          Category1
        </option>
        <option value="" className="bg-white text-black h-4">
          category2
        </option>
        <option value="" className="bg-white text-black h-4">
          category3
        </option>
        <option value="" className="bg-white text-black h-4">
          category4
        </option>
      </select>
      <BsChevronDown className="text-white absolute right-4 top-3 cursor-pointer" />
    </div>
  );
};

export default Select;
