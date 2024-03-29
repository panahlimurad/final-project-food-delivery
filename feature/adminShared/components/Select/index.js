import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useQuery } from "react-query";
import { GetCategory, GetRestaurants } from "../../services/dataApi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategory } from "../../../../redux/features/productDetails/productSlice";
import { useRouter } from "next/router";

const Select = () => {

  const router = useRouter();
  const routerPath = router.pathname;

  const { data, isLoading, isError, error } =
    routerPath === "/admin/products" ? useQuery("restaurant", GetRestaurants) : useQuery("category", GetCategory);
  


  const dataArray = data ? Object.values(data) : [];

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category);

  // console.log("reduxdan gelen s=category", selectedCategory);

  const handleCategoryChange = (event) => {
    const selectedCategoryName = event.target.value;
    const selectedCategory = dataArray[1]?.data?.find(item => item.name === selectedCategoryName);
  
    if (selectedCategory) {
      const selectedCategoryId = selectedCategory.id;
      dispatch(setCategory(selectedCategory));
       console.log("Selected category ID:", selectedCategoryId);
    }
  };
  
  

  console.log("kateqori datadir?", dataArray);

  return (
    <div className="flex relative">
      <select onChange={handleCategoryChange} value={selectedCategory ? selectedCategory.name : ''} class="md:w-[170px]  h-9  text-[#F2F2F2] sm:rounded-2xl rounded-md tracking-wide appearance-none bg-[#5A5B70] bg-no-repeat bg-[96%] md:bg-[162px_4px] cursor-pointer sm:px-3 mt-1 font-bold bg-grayInput outline-none ">
        {dataArray[1]?.data?.map((item, index) => (
          <option  className=" text-white h-4 bg-[#5A5B70] cursor-pointer">
            {item.name}
          </option>
        ))}
      </select>
      <BsChevronDown className="text-white absolute right-4 top-3 cursor-pointer " />
    </div>
  );
};

export default Select;
