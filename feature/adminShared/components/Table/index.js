import { MdModeEditOutline } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import Image from "next/image";
import tableImage from "../../../adminFolders/assets/image/tableImage.svg";
import { ScrollBarContainer } from "../../../ClientShared/Scroll/Scroll";
import { shortText } from "../../helper/shortText";
import Swal from "sweetalert2";
import EditModal from "../EditModal/EditModal";
import { EditFORM } from "../../../adminFolders/utils/editForm";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { DeleteCategory, DeleteOffer, GetCategoryID } from "../../services/dataApi";


function Table({ data, headers }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCategoryId, setIsCategoryId] = useState()
  

  const dataArray = data ? Object.values(data) : [];

  // const selectedCategory = useSelector((state) => state.category);

  // console.log("what is this", selectedCategory);

  const filteredCategory = dataArray[1]?.data?.filter(
    (category) => category.id === isCategoryId
  ) || dataArray[1]?.data;

 

  //console.log('is id work', filteredCategory);

  console.log("id is changing", isCategoryId);

  
  
  
  // const dataArray = categoryByIdData ? Object.values(categoryByIdData) : [];

  // console.log("categorytable", dataArray[1].data);

  // const catArray = dataArray[1]?.data
  
  

  const router = useRouter();
    const routerPath = router.pathname;

  const openEditModal = () => {
    
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCategory = (id) => {
    setIsCategoryId((prevId) => {
      console.log('category_id', id);
      return id;
    });
  }
  

 

  const handleDeleteClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (routerPath === "/admin/category") {
            await DeleteCategory(isCategoryId);
            console.log("delete id", isCategoryId);
            Swal.fire("Deleted!", "Your category has been deleted.", "success");
          } else if (routerPath === "/admin/offers") {
            await DeleteOffer(isCategoryId)
            
            Swal.fire("Deleted!", "Your offer has been deleted.", "success");
          } else {
           
            Swal.fire("Error", "Unsupported route path.", "error");
          }
        } catch (error) {
          Swal.fire(
            "Error",
            `An error occurred while deleting the ${
              routerPath === "/admin/category" ? "category" : "offer"
            }.`,
            "error"
          );
        }
      }
    });
  };
  
  return (
    <ScrollBarContainer bg="#C74FEB">
      <div
        className="w-100 mb-10"
        style={{ maxHeight: "600px", overflowY: "auto" }}
      >
        <table className="table-fixed w-full text-center bg-white text-[#00072B]">
          <thead className="max-[420px]:text-sm">
            <tr>
              {headers.map((text, index) => (
                <th key={index} className="sticky top-0 bg-white">
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-[420px]:text-xs">
            {data[1]?.data?.map((item, index) => (
              <tr key={index} className="border-2">
                <td>
                  <span className="border-2 rounded-md p-1">
                    {shortText(5, item.id)}
                  </span>
                </td>
                <td className="flex justify-center">
                  <Image
                    className="text-center"
                    width={100}
                    height={100}
                    src={item.img_url}
                  />
                </td>
                <td>{shortText(15, item.name)}</td>
                <td>
                  {item.description
                    ? shortText(15, item.description)
                    : shortText(15, item.slug)}
                </td>
                <td>
                  <div className="flex">
                    {" "}
                    <div className="w-[64px] h-[36px] hover:bg-slate-100 flex items-center justify-center rounded-md" >
                    
                      <MdModeEditOutline
                      onClick={() => {
                        handleCategory(item?.id);
                        openEditModal();
                      }}
                        
                        size={24}
                        className="text-green-600 cursor-pointer"
                      />
                      
                      <EditModal
                        form={routerPath === "/admin/category" ? EditFORM.CATEGORY : routerPath === '/admin/offers' ? EditFORM.OFFER : null}
                        isEditModalOpen={isEditModalOpen}
                        openEditModal={openEditModal}
                        closeEditModal={closeEditModal}
                        dataFromCard={routerPath === "/admin/category"
                        ? {
                            item_id: filteredCategory[0]?.id,
                            name: filteredCategory[0]?.name,
                            img_url: filteredCategory[0]?.img_url,
                            slug: filteredCategory[0]?.slug
                          }
                        : routerPath === '/admin/offers'
                          ? {
                              name: filteredCategory[0]?.name,
                              img_url: filteredCategory[0]?.img_url,
                              description: filteredCategory[0]?.description,
                              item_id: filteredCategory[0]?.id,
                            }
                          : {}
                      }
                      />
                      
                    </div>
                    <div className="w-[64px] h-[36px] hover:bg-slate-100 flex items-center justify-center rounded-md">
                      {" "}
                      <SlTrash
                        size={24}
                        className="text-red-600 cursor-pointer  p-1"
                        onClick={() => {
                          handleCategory(item?.id)
                          handleDeleteClick()
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollBarContainer>
  );
}
export default Table;
