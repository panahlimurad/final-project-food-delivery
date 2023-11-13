import React, { useRef, useState } from "react";
import UploadImage from "../AddModal/UploadImage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../../../../server/configs/firebase";
import {
  GetCategory,
  GetProducts,
  GetRestaurants,
  PutProducts,
  PutRestaurants,
} from "../../services/dataApi";
import { useMutation, useQuery } from "react-query";
import Image from "next/image";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";



const EditModal = ({
  isEditModalOpen,
  openEditModal,
  closeEditModal,
  form,
  dataFromCard,
}) => {
  const { title, infoImg, description, initialValues, inputs, buttonTitle } =
    form;

    
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [lastProductImage, setLastProductImage] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(null)
    const [initialImage, setInitialImage] = useState(dataFromCard.img_url)
    const router = useRouter();
    const routerPath = router.pathname;

  const [editedData, setEditedData] = useState(dataFromCard)

  const { item_id, ...dataToUpdate } = editedData

// console.log("edited data rest_id", dataFromCard);

//   console.log("edit olunmus data", dataToUpdate);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditedData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  // console.log("id-miz gelirmi?", editedData.item_id);

  const mutationProduct = useMutation((data) => PutProducts(editedData.item_id, dataToUpdate), {
    onError: (error) => {
      console.log("Error", error);
    },
    onSuccess: (data, variables) => {
      console.log("Product Updated:", data); 
      console.log("Variables passed:", variables); 
      
    },
  });

  const mutationRestaurant = useMutation((data) => PutRestaurants(editedData.item_id, dataToUpdate), {
    onError: (error) => {
      console.log("Error", error);
    },
    onSuccess: (data, variables) => {
      console.log("Product Updated:", data); 
      console.log("Variables passed:", variables); 
      
    },
  });
  // console.log("reouter nedir?", routerPath);
  const handleProductUpdate = (e) => {
    e.preventDefault()
   
    // console.log("yeni datalarimiz gelirmi?",dataToUpdate);
    

    {
      routerPath === "/admin/products" && mutationProduct.mutate(dataToUpdate);
    }

    {
      routerPath === "/admin/restaurants" && mutationRestaurant.mutate(dataToUpdate)
      
    }

    
    closeEditModal()
  };
  

  const handleNewProductImage = (e) => {
    const selectedFile = e.target.files[0];
    const newUUID = nanoid();
    const imageRef = ref(fileStorage, `images/${selectedFile.name + newUUID}`);

    uploadBytes(imageRef, selectedFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((downloadURL) => {
            console.log("New image URL:", downloadURL);
            setUpdatedImage(downloadURL); 
            console.log("Image successfully uploaded:", downloadURL);
          })
          .catch((error) => {
            console.log("Error getting the image URL:", error);
          });
      })
      .catch((error) => {
        console.log("Error uploading the image:", error);
      });
  };

  const {
    data: restaurantData,
    isLoading: restaurantIsLoading,
    isError: restaurantIsError,
    error: restaurantError,
  } = useQuery("restaurant", GetRestaurants);

  const {
    data: categoryListData,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    error: categoryError,
  } = useQuery("category", GetCategory);

  const {
    data: productListData,
    isLoading: productIsLoading,
    isError: productIsError,
    error: productError,
  } = useQuery("products", GetProducts);

  const restaurantList = restaurantData ? Object.values(restaurantData) : [];
  const categoryList = categoryListData ? Object.values(categoryListData) : [];
  const productList = productListData ? Object.values(productListData) : [];
  // console.log("productList in edit", productList);

  // console.log("list in edit", restaurantList);

  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  return (
    <div>
      <div
        onClick={closeEditModal}
        className={`menu-overlay w-full h-full fixed top-0 left-0 backdrop-brightness-50 z-10 ${
          isEditModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>

      <div
        className={
          isEditModalOpen
            ? `bg-[#38394E] text-white fixed top-0 right-0 lg:px-10 px-2 py-4 h-full z-20  block overflow-y-auto lg:w-[948px] w-full`
            : ` hidden`
        }
      >
        {isEditModalOpen && (
          <div
            className="absolute  z-20 top-3 lg:hidden right-3 rounded-full bg-pink w-7 h-7 flex items-center 
            justify-center text-3xl cursor-pointer hover:opacity-60"
            onClick={closeEditModal}
          >
            &times;
          </div>
        )}
        <form >
          <div className="title font-medium text-2xl mb-2"> {title}</div>
          <div className="lg:flex justify-between gap-24">
            <div className="mb-4">
              {" "}
              <div className="text-lg mb-4">{infoImg}</div>
              {updatedImage ? ( 
        <div className="w-40 h-20 ">
          <Image
            src={updatedImage} 
            value={updatedImage}
            alt="Selected"
            width={80}
            height={40}
            className="w-full h-full"
          />
        </div>
      ) : initialImage ? (
        <div className="w-40 h-20">
          <Image
            src={initialImage}
            alt="Selected"
            width={80}
            height={40}
            className="w-full h-full"
          />
        </div>
      ) : (
        
        <div className="w-40 h-20">
          <p>No image available</p>
        </div>
      )}
            </div>
            <div className="flex-1">
              <UploadImage
                handleNewProductImage={handleNewProductImage}
                selectedImage={selectedImage}
                fileInputRef={fileInputRef}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="lg:flex justify-between ">
            <div className="text-lg lg:mt-20 my-4">{description}</div>
            <div className="bg-[#43445A]  rounded-lg p-4 shadow lg:w-[526px] w-full">
              {inputs?.map((field, id) => {
                // console.log('bura haradir',);
                switch (field.type) {
                  case "text":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium"
                        >
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          value={editedData[field.name]}
                          onChange={handleInputChange}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        />
                      </div>
                    );
                  case "textarea":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium"
                        >
                          {field.label}
                        </label>
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={editedData[field.name]}
                          onChange={handleInputChange}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg p-4 mt-3 h-[133px] resize-none focus:border"
                        ></textarea>
                      </div>
                    );
                  case "number":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium"
                        >
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          value={editedData[field.name]}
                          onChange={handleInputChange}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        />
                      </div>
                    );
                  case "select":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium"
                        >
                          {field.label}
                        </label>
                        <select
                          type="text"
                          name={field.name}
                          value={editedData[field.name]}
                          onChange={handleInputChange}
                          id={field.name}
                          autoComplete={field.name}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        >
                          {title === "Edit restaurant" &&
                            categoryList[1]?.data?.map((product, index) => (
                              <option value={product.id} key={index}>
                                {product.name}
                              </option>
                            ))}
                          {title === "Edit product" &&
                          
                            restaurantList[1]?.data?.map(
                              (restaurant, index) => (
                                <option value={restaurant.id} key={index} selected={restaurant.id === editedData.rest_id}>
                                  {restaurant.name}
                                </option>
                              )
                            )}
                        </select>
                      </div>
                    );
                }
              })}
            </div>
          </div>
          <div
            className="flex gap-10 p-4 justify-center mt-10"
            style={{ borderTop: "1px solid #43445A" }}
          >
            <button
              className="lg:min-w-[400px] w-auto min-w-auto px-5 h-12 rounded-xl bg-[#38394E] shadow-lg hover:bg-purple"
              onClick={closeEditModal}
            >
              {"Cancel"}
            </button>
            <button
              onClick={handleProductUpdate}
              className="lg:min-w-[400px] min-w-auto px-5 w-auto h-12 rounded-xl bg-[#C035A2] text-white shadow-md hover:bg-purple"
            >
              {buttonTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
