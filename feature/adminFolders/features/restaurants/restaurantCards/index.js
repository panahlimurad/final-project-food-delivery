
import edit from "../../../assets/image/productCard/edit.svg";
import del from "../../../assets/image/productCard/delete.svg";
import restoran from "../../../assets/image/productCard/restIcon.svg";
import Image from "next/image";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
const RestaurantCards = ({ name, img_url ,isLoading}) => {
  return (
 <>
    <div className=" bg-white flex items-center h-[83px] gap-4 rounded-md p-2 justify-between 
    xs:w-auto w-[247px] xs:m-0 mx-auto">
    <div className="w-[65px] h-[65px]">
      <Image
        src={restoran}
        alt="restoran"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="">
      <div className="font-medium text-lg leading-[1.1] text-black_1 mb-1 xs:text-left text-center">
        {name}
      </div>
      <div className="font-medium text-sm text-gray_2 xs:block hidden">
        {/* bura category gelecek */}Fast food
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="cursor-pointer ml-1">
        <Image src={del} alt="del" />
      </div>
      <div className="cursor-pointer">
        <Image src={edit}  alt="edit"/>
      </div>
    </div>
  </div>
 </>
  );
};

export default RestaurantCards;
