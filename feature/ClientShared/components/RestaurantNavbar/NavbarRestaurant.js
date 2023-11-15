"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ScrollBarContainer } from "../../Scroll/Scroll";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import restHam from "../../../../public/svg/resHam.svg";
import { useSelector } from "react-redux";
import { GetCategory } from "../../../adminShared/services/dataApi";
import { setCategory } from "../../../../redux/features/productDetails/productSlice";
import spinners from '../../../../public/svg/spinner.gif'
const NavbarRestaurant = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError, error } = useQuery("category", GetCategory);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (index) => {
    const selectedCategory = dataArray[1]?.data[index];
    const SelectName = selectedCategory.id;
    setIsModalOpen(false);

    dispatch(setCategory(SelectName));
    // console.log("SelectName", SelectName);
    setActiveLinkIndex(index);
    // console.log("seletecedCategory", selectedCategory);
  };
  const dataArray = data ? Object.values(data) : [];
  return (
    <div className="mt-4">
      <div
        className="w-full h-[40px] flex justify-center md:hidden absolute top-100px"
        style={{ boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }}
      >
        <button
          onClick={openModal}
          className="flex gap-6 items-center text-xl font-bold text-[#4F4F4F]"
        >
          <Image src={restHam} />
          <p>Filters</p>
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-t-xl p-6 w-[90%] h-[60%] fixed bottom-0 flex flex-col justify-center items-center">
            <button
              onClick={closeModal}
              className="border-2 fixed top-[45%] rounded-full p-4 w-14 h-14 text-xl flex items-center justify-center "
            >
              x
            </button>

            <div className="w-full mt-20">
              {dataArray[1]?.data?.map((link, index) => (
                <div className=" gap-6 flex flex-col text-xl font-bold ">
                    <button
                      onClick={() => handleCategoryChange(index)}
                      key={index}
                      values={selectedCategory}
                      className={`flex p-1 gap-3 items-center cursor-pointer  border-b-2
                
                ${
                  index === activeLinkIndex
                    ? "text-[#D63626] w-full bg-[#cfc3c2]"
                    : ""
                }
                
                `}
                    >
                      {link.name}
                    </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <ScrollBarContainer bg="#C74FEB">
        <div className="w-[250px] bg-[#F3F4F6] p-6 flex-none hidden md:block">
          <div className="font-semibold text-lg text-[#333333] flex flex-col gap-5">

{dataArray[1]?.data ? (  

<>

{dataArray[1]?.data?.map((link, index) => (
  <button
    onClick={() => handleCategoryChange(index)}
    key={index}
    values={selectedCategory}
    className={`flex p-1 gap-3 items-center cursor-pointer 
    
    ${
      index === activeLinkIndex ? "text-[#D63626] bg-[#cfc3c2]" : ""
    }
    
    `}
  >
    <Image src={link.img_url} width={25} height={28} />
    {link.name}
  </button>
))}

</>

): (
  <div className="w-[250px] h-[800px] flex items-start justify-center">


<Image src={spinners} alt="spinner " />
  </div>


)}

           
          </div>
        </div>
      </ScrollBarContainer>
    </div>
  );
};

export default NavbarRestaurant;
