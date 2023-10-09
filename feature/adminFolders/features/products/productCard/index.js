import edit from "../../../../adminFolders/assets/image/productCard/edit.svg";
import del from "../../../../adminFolders/assets/image/productCard/delete.svg";
import pizza from "../../../../adminFolders/assets/image/productCard/product.svg";
import Image from "next/image";
import { shortText } from "../../../../adminShared/helper/shortText";
// import Swal from "sweetalert2";
// import Image from "next/image";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import { shortText } from "shared/helper/shortText";
// import "react-loading-skeleton/dist/skeleton.css";
const ProductCard = ({ name, img, price, description, isLoading }) => {
  // const { img_url, name, price } = product;

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-white rounded-[5px] flex flex-col gap-1 p-3 md:w-auto w-[236px] mx-auto">
      <div className="w-[160px] h-[160px] mx-auto">
        <Image
          src={img}
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
            {price}
          </div>
          <div className=" flex gap-2">
            <button className="cursor-pointer">
              <Image src={edit} />
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
