import { useTranslation } from "react-i18next";
import UploadImage from "./UploadImage/index";
import React, { useState, useRef, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  GetCategory,
  PostCategory,
  PostImg,
  PostProduct,
  PostRestaurants,
} from "../../services/dataApi";
import { PostOffer } from "../../services/dataApi";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../../../../server/configs/firebase";
import Image from "next/image";

export default function AddModal({
  isAddModalOpen,
  closeAddModal,
  form: { title, infoImg, description, initialValues, inputs, buttonTitle },
}) {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();
  const routerPath = router.pathname;
  const [addProductImage, setAddProductImage] = useState(null);
  const [lastProductImage, setlastProductImage] = useState(null)

  const handleNewProductImage = (e) => {
    const selectedFile = e.target.files[0];
    setAddProductImage(URL.createObjectURL(selectedFile));
    const newUUID = nanoid();
    const imageRef = ref(fileStorage, `images/${selectedFile.name + newUUID}`);
    uploadBytes(imageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref)
      .then((downloadURL)=>{
        setlastProductImage(downloadURL)
        console.log("succes", downloadURL);
      })
      .catch((error)=>{
        console.log("error", error);
      })
    })
    .catch((error)=>{
      console.log("error", error);
    })
  };

  // const dataJ = {
  //   name: "",
  //   slug: "",
  //   img_url: '',
  // };
  const [categoryData, setCategoryData] = useState(initialValues);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setCategoryData({
  //     ...categoryData,
  //     [name]: value,
  //   });
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
     
      const selectedCategory = categoryList[1]?.data.find(
        (category) => category.name === value
      );
  
      
      const selectedName = selectedCategory ? selectedCategory.name : "";

      console.log("category_id nedir", selectedCategory);
  
      setCategoryData({
        ...categoryData,
        category_id: selectedName,
      });
    } else {
      setCategoryData({
        ...categoryData,
        [name]: value,
      });
    }
  };
  
  

  const uploadData = { ...categoryData, img_url: lastProductImage };

  const mutation = useMutation((data) => PostCategory(data), {
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const mutationProduct = useMutation((data) => PostProduct(data), {
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const mutationRestaurant = useMutation((data) => PostRestaurants(data), {
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const mutationOffer = useMutation((data) => PostOffer(data), {
    onError: (error) => {
      console.log("Error", error);
    },
  });

  // console.log('data',data);

  function handleSubmit(event) {
    event.preventDefault();
    
    mutationProduct.mutate(uploadData);
    {
      routerPath === "/admin/category" && mutation.mutate(uploadData);
    }

    {
      routerPath === "/admin/offers" && mutationOffer.mutate(uploadData);
    }
    {
      routerPath === "/admin/restaurants" &&
        mutationRestaurant.mutate(uploadData);
    }

    closeAddModal();
  }

  const { data, isLoading, isError, error } = useQuery(
    "category",
    GetCategory,
    {
      onSuccess: (res) => {
        console.log("categoryList", res);
      },
    }
  );
  const categoryList = data ? Object.values(data) : [];

  // console.log("category data", categoryList[1].data);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setSelectedImage(URL.createObjectURL(file))

  //     const formData = new FormData()
  //     formData.append('file', file)

  //     // mutationImg.mutate(formData)

  //     console.log('data img', formData);

  //   }
  // };

  const mutationImg = useMutation((data) => PostImg(data), {
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  return (
    <div>
      <div
        onClick={closeAddModal}
        className={`menu-overlay w-full h-full fixed top-0 left-0 backdrop-brightness-50 z-10 ${
          isAddModalOpen ? "translate-x-0" : "translate-x-full"
        }`}></div>

      <div
        className={
          isAddModalOpen
            ? `bg-[#38394E] text-white fixed top-0 right-0 lg:px-10 px-2 py-4 h-full z-20  block overflow-y-auto lg:w-[948px] w-full`
            : ` hidden`
        }>
        {isAddModalOpen && (
          <div
            className="absolute  z-20 top-3 lg:hidden right-3 rounded-full bg-pink w-7 h-7 flex items-center 
            justify-center text-3xl cursor-pointer hover:opacity-60"
            onClick={closeAddModal}>
            &times;
          </div>
        )}
        <form>
          <div className="title font-medium text-2xl mb-2"> {t(title)}</div>
          <div className="lg:flex justify-between gap-24">
            <div className="mb-4">
              {" "}
              <div className="text-lg mb-4">{t(infoImg)}</div>
              {addProductImage && (
                <div className="w-40 h-20 ">
                  <Image
                    src={addProductImage}
                    alt="Selected"
                    width={80}
                    height={40}
                    className="w-full h-full"
                  />
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
            <div className="text-lg lg:mt-20 my-4">{t(description)}</div>
            <div className="bg-[#43445A]  rounded-lg p-4 shadow lg:w-[526px] w-full">
              {inputs?.map((field, id) => {
                // console.log('bura haradir',);
                switch (field.type) {
                  case "text":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium">
                          {t(field.label)}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          onChange={handleInputChange}
                          value={categoryData[field.name]}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        />
                      </div>
                    );
                  case "textarea":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium">
                          {t(field.label)}
                        </label>
                        <textarea
                          id={field.name}
                          name={field.name}
                          onChange={handleInputChange}
                          value={categoryData[field.name]}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg p-4 mt-3 h-[133px] resize-none focus:border"></textarea>
                      </div>
                    );
                  case "number":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium">
                          {t(field.label)}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          value={categoryData[field.name]}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        />
                      </div>
                    );
                  case "select":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium">
                          {t(field.label)}
                        </label>
                        <select
                          type="text"
                          name={field.name}
                          value={categoryData[field.name]}
                          onChange={handleInputChange}
                          id={field.name}
                          autoComplete={field.name}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        >
                          {categoryList[1]?.data?.map((product, index) => (
                            <option value={product.name}>{product.name}</option>
                          ))}
                        </select>
                      </div>
                    );
                }
              })}
            </div>
          </div>
          <div
            className="flex gap-10 p-4 justify-center mt-10"
            style={{ borderTop: "1px solid #43445A" }}>
            <button
              className="lg:min-w-[400px] w-auto min-w-auto px-5 h-12 rounded-xl bg-[#38394E] shadow-lg hover:bg-purple"
              onClick={closeAddModal}>
              {t("Cancel")}
            </button>
            <button
              onClick={handleSubmit}
              className="lg:min-w-[400px] min-w-auto px-5 w-auto h-12 rounded-xl bg-[#C035A2] text-white shadow-md hover:bg-purple">
              {t(buttonTitle)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
