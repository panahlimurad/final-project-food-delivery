
import edit from "../../../assets/image/productCard/edit.svg";
import del from "../../../assets/image/productCard/delete.svg";
import Image from "next/image";
import Swal from "sweetalert2";
import { DeleteRestaurants } from "../../../../adminShared/services/dataApi";
import EditModal from "../../../../adminShared/components/EditModal/EditModal";
import { useState } from "react";
import { EditFORM } from "../../../utils/editForm";
import { useMutation } from "react-query";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";



const RestaurantCards = ({ name, img_url, category_id, delivery_min, delivery_price, cuisine, item_id, address,refetch,isLoading}) => {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };


  const deleteMutation = useMutation(
    async () => {
        await DeleteRestaurants(item_id);
        refetch();
    },
    {
      onSuccess: () => {
        Swal.fire("Deleted!", 'Your restaurant has been deleted.', "success");

      },
      onError: (error) => {
        Swal.fire(
          "Error",
          `An error occurred while deleting the restaurant. ${error.message}`,
          "error"
        );
      },
    }
  );


  const handleDeleteClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate();
      }
    });
  };
  return (
 <>
    <div className="bg-white flex items-center h-[83px] gap-4 rounded-md p-2 justify-between 
    xs:w-auto w-[247px] xs:m-0 mx-auto">
    <div className="w-[65px] h-[65px]">
      <Image
      src={img_url}
      width={100}
      height={100}
        alt="Res"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="">
      <div className="font-medium text-lg leading-[1.1] text-black_1 mb-1 xs:text-left text-center">
        {name} 
      </div>
      <div className="font-medium text-center text-sm text-gray-600">
       {cuisine}
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div onClick={handleDeleteClick} className="cursor-pointer ml-1">
        <Image src={del} alt="del" />
      </div>
      <div className="cursor-pointer" >
        <Image src={edit}  alt="edit" onClick={openEditModal}/>
        <EditModal form={EditFORM.RESTAURANT}
                isEditModalOpen={isEditModalOpen}
                openEditModal={openEditModal}
                closeEditModal={closeEditModal}
                dataFromCard={{ name, img_url, delivery_min, delivery_price, address, cuisine, category_id, item_id }}/>
      </div>
    </div>
  </div>
 </>
  );
};

export default RestaurantCards;
