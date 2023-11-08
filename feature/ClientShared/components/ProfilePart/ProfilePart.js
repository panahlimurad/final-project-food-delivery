import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GetUser, PutUser } from "../../../adminShared/services/dataApi";
import { useMutation, useQuery } from "react-query";
import UploadImageClient from "../uploadImageClient/uploadImageClient";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../../../../server/configs/firebase";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {dataUser} from '../../../../redux/app/features/userDetails/userSlice'



const ProfilePart = () => {

  const router = useRouter()

  const { data, isLoading, isError, error } = useQuery("user", GetUser, {
    onSuccess: (res) => {
      console.log("query", res);
      
    },
    onError:(err)=>{
      console.log(err);
    }
  });


  // const dispatch = useDispatch()
  const fileInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [addProductImage, setAddProductImage] = useState(null);
  const [lastProductImage, setlastProductImage] = useState(null);

  useEffect(() => {
    if (data && data.user) {
      setEmail(data?.user?.email);
    }
  }, [data]);

  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    fullname: "",
    username: "",
  });

  const newData = { ...profileData, email, img_url: lastProductImage };

  const handleInput = (event) => {
    setProfileData({ ...profileData, [event.target.name]: event.target.value });
  };

  const mutation = useMutation((data) => PutUser(data), {
    onSuccess: (responseData) => {
      // dispatch(dataUser(responseData))
      toast.success("You have successfully created a profile",{autoClose:2000})
      router.push("/")
      console.log(responseData);
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    mutation.mutate(newData);
  }

  const handleButtonClick = () => {
    
    fileInputRef.current.click();
  };

  const handleNewProductImage = (e) => {
    const selectedFile = e.target.files[0];
    setAddProductImage(URL.createObjectURL(selectedFile));
    const newUUID = nanoid();
    const imageRef = ref(fileStorage, `users/${selectedFile.name + newUUID}`);
    uploadBytes(imageRef, selectedFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((downloadUrl) => {
            setlastProductImage(downloadUrl);
            console.log("succes", downloadUrl);
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full">
        <div className=" sm:px-8 py-12 sm:bg-[#F3F4F6] bg-[#FFFFFF] w-full">
          <h1 className="text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 sm:ml-0 ml-8 ">
            Profile
          </h1>
          <div className="flex justify-center items-center">
            <UploadImageClient
              addProductImage={addProductImage}
              handleNewProductImage={handleNewProductImage}
              handleButtonClick={handleButtonClick}
              fileInputRef={fileInputRef}
            />
          </div>

          <div className="mt-4 flex justify-center items-center ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Contact
                </label>
                <input
                  name="phone"
                  type="tel"
                  onChange={handleInput}
                  id="inputField"
                  className="mt-1 sm:bg-[#FFFFFF] bg-[#F3F4F6] p-2 border text-[#828282] leading-6 font-normal rounded  text-lg sm:w-[370px] h-[53px] w-[260px]  "
                  placeholder="+994"
                />
              </div>

              <div className="lg:ml-3">
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={handleInput}
                  id="inputField"
                  className="mt-1 p-2 border   sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg w-[250px] h-[53px] sm:w-[370px] "
                  value={email}
                />
              </div>

              <div className="mr-8">
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  onChange={handleInput}
                  id="inputField"
                  className="mt-1 p-2 border sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg w-[250px] h-[53px] sm:w-[370px] "
                />
              </div>

              <div className="lg:ml-3">
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Address
                </label>
                <input
                  name="name"
                  type="text"
                  onChange={handleInput}
                  id="inputField"
                  className="mt-1 p-2 border sm:bg-[#FFFFFF]  bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg w-[250px] h-[53px] sm:w-[370px] "
                />
              </div>

              <div className="mr-8">
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Full Name
                </label>
                <input
                  name="fullname"
                  type="text"
                  onChange={handleInput}
                  id="inputField"
                  className="mt-1 p-2 border sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg  w-[250px] sm:w-[370px] h-[53px] "
                />
              </div>

              <div className="lg:ml-3">
                <button className="bg-[#6FCF97]  w-[250px]  sm:w-[370px] h-[53px] mt-7 rounded text-[#FFFFFF] text-[18px] font-semibold leading-6">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfilePart;
