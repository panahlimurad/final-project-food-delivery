import edit from "../../../../adminFolders/assets/image/productCard/edit.svg";
import del from "../../../../adminFolders/assets/image/productCard/delete.svg";
import Image from "next/image";
import { shortText } from "../../../../adminShared/helper/shortText";
import Swal from "sweetalert2";
import { DeleteProduct } from "../../../../adminShared/services/dataApi";
import EditModal from "../../../../adminShared/components/EditModal/EditModal";
import { useState } from "react";
import { EditFORM } from "../../../utils/editForm";
import { useMutation } from "react-query";

// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import "react-loading-skeleton/dist/skeleton.css";
const ProductCard = ({
  name,
  rest_id,
  img_url,
  price,
  description,
  item_id,
  refetch,
  isLoading,
}) => {
  // const { img_url, name, price } = product;
  // console.log("product img", img_url);
  // console.log("rest_id", rest_id);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const deleteMutation = useMutation(
    async () => {
        await DeleteProduct(item_id);
        refetch();
    },
    {
      onSuccess: () => {
        Swal.fire("Deleted!", 'Your product has been deleted.', "success");

      },
      onError: (error) => {
        Swal.fire(
          "Error",
          `An error occurred while deleting the product. ${error.message}`,
          "error"
        );
      },
    }
  );

  // delete product button modal
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
    <div className="bg-white rounded-[5px] flex flex-col gap-1 p-2  md:w-auto w-[236px] mx-auto">
      <div className="w-[140px] h-[140px] mx-auto">
        <Image
          src={img_url}
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-full"
          alt={name}
        />
      </div>

      <>
        <div className="font-medium font-lg leading-6 text-black_1 text-lg">
          {shortText(15, description)}
        </div>
        <div className="font-medium text-sm leading-6 text-gray_2">{name}</div>
        <div className="flex justify-between items-center">
          <div className="font-medium leading-6 text-green text-sm">
            {price} $
          </div>
          <div className=" flex gap-2">
            <button className="cursor-pointer">
              <Image src={edit} onClick={openEditModal}/>
              <EditModal
                form={EditFORM.PRODUCTS}
                isEditModalOpen={isEditModalOpen}
                openEditModal={openEditModal}
                closeEditModal={closeEditModal}
                dataFromCard={{ name, img_url,rest_id, price, description, item_id }}
              />
            </button>
            <button onClick={handleDeleteClick} className="cursor-pointer">
              <Image src={del} />
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
