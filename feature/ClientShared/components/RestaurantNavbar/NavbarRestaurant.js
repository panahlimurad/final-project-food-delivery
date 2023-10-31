"use client";
import React, { useCallback, useEffect, useState } from "react";
import restIcon from "../../../../public/svg/resticon.svg";
import Image from "next/image";
import { ScrollBarContainer } from "../../Scroll/Scroll";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { GetCategory } from "../../../adminShared/services/dataApi";
import { SORT_CATEGORY } from "../../../../redux/features/productDetails/filterSlice";
import { selectProducts } from "../../../../redux/features/productDetails/CategorySlice";
import { setCategory } from "../../../../redux/features/productDetails/productSlice";


const NavbarRestaurant = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);







  const { data, isLoading, isError, error } = useQuery(
    "category",
    GetCategory,
    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );


  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category);

  const handleCategoryChange = (index) => {
    const selectedCategory = dataArray[1]?.data[index]
    const SelectName=selectedCategory.name
    dispatch(setCategory(SelectName));
    console.log("SelectName", SelectName);
    // console.log("seletecedCategory", selectedCategory);
  };
  const dataArray = data ? Object.values(data) : [];

  console.log("data Arrays?", dataArray);

  const handleClick = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <div className="mt-4">
      <ScrollBarContainer bg="#C74FEB">
        <div className="w-[250px] bg-[#F3F4F6] p-6 flex-none hidden sm:block">
          <div className="font-semibold text-lg text-[#333333] flex flex-col gap-5" 
          
          >
            {dataArray[1]?.data?.map((link, index) => (
              <button 
              onClick={()=>handleCategoryChange(index)}
              // onClick={handleCategoryChange}
              // onClick={() => handleCategoryChange(link.name)}
              key={index}
              values={selectedCategory}
                className={`flex p-1 gap-3 items-center cursor-pointer 
                
                ${
                  index === activeLinkIndex ? "text-[#D63626] bg-[#cfc3c2]" : ""
                }
                
                `}
                >
                <Image src={link.img_url}
                width={25} 
                height={28}/>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </ScrollBarContainer>
    </div>
  );
};

export default NavbarRestaurant;
