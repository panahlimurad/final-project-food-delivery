import React  from "react";
import { BsChevronDown } from "react-icons/bs";
import { useQuery } from "react-query";
import { GetCategory } from "../../services/dataApi";



const Select = () => {

  const { data, isLoading, isError, error } = useQuery(
    "category",
    GetCategory,
    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );
  const dataArray = data ? Object.values(data) : [];

  return (
    <div className="flex relative">
      <select class="md:w-[200px] w-full h-9 text-[#F2F2F2] sm:rounded-2xl rounded-md tracking-wide appearance-none bg-[#5A5B70] bg-no-repeat bg-[96%] md:bg-[162px_4px] cursor-pointer px-3 bg-grayInput outline-none ">
        {dataArray[1]?.data?.map((item, index) => (
          <option value={item.id} className="bg-white text-black h-4">
          {item.name}
        </option>
        ))}
      
      </select>
      <BsChevronDown className="text-white absolute right-4 top-3 cursor-pointer" />
    </div>
  );
};

export default Select;
