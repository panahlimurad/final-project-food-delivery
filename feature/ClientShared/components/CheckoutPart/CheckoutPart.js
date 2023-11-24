import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {setCheckOrderTrue} from '../../../../redux/features/checkOrder/checkOrderSlice'
import {
  GetBasket,
  GetUser,
  PostOrder,
} from "../../../adminShared/services/dataApi";
import { toast } from "react-toastify";

const CheckoutPart = () => {
  const { data, isLoading, isError, error } = useQuery("user", GetUser, {
    // onSuccess: (res) => {
    //   console.log("user", res);
    // },
    // onError: (err) => {
    //   console.log(err);
    // },
  });

  const {
    data: basketData,
    isLoading: isBasketLoading,
    isError: isBasketError,
    error: basketError,
  } = useQuery("basket", GetBasket, {
    // onSuccess: (res) => {
    //   console.log("basket", res);
    // },
    // onError: (err) => {
    //   console.log(err);
    // },
  });

  // console.log(basketData.result.data.id);
  
  const dispatch = useDispatch();
  const basketId = basketData?.result?.data?.id;

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // const handleAddressChange = (event) => {

  //   setAddress(event.target.value);
  // };

  // const handlePhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };

  useEffect(() => {
    if (data && data.user) {
      setAddress(data?.user?.name);
      setPhone(data?.user?.phone);
    }
  }, [data]);

  const [userData, setUserData] = useState({
    contact: "",
    delivery_address: "",
    payment_method: null,
  });

  const newData = { ...userData, basket_id:basketId };

  const mutation = useMutation((data) => PostOrder(data), {
    onSuccess: (responseData) => {
      toast.success("You have successfully created a order",{autoClose:2000})
      dispatch(setCheckOrderTrue())
      // router.push("/")
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

  // const handleInput = (event) => {
  //   setProfileData({ ...userData, [event.target.name]: event.target.value });
  // };

  return (
    <form
      className="sm:ml-5 sm:mr-2 sm:px-12 sm:py-12 w-full md:bg-[#F3F4F6] bg-[#FFFFFF]"
      onSubmit={handleSubmit}>
      <h1 className="text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 md:ml-0 ml-8 hidden md:block">
        Checkout
      </h1>

      <div className="flex justify-center flex-wrap items-center">
        <div className="mt-4 flex justify-center items-center  ">
          <div className="grid grid-cols-1  gap-3 h-full">
            <div>
              <label
                htmlFor="inputField"
                className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                Delivery Address
              </label>
              <input
                name="delivery_address"
                type="text"
                id="inputField"
                className="mt-1 p-2 border text-[#828282] leading-6 font-normal rounded text-xl  w-[260px] h-[53px] sm:w-[320px] xl:w-[360px] md:bg-[#FFFFFF] bg-[#F3F4F6] "
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                  setUserData({
                    ...userData,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </div>

            <div>
              <label
                htmlFor="inputField"
                className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                Contact Number
              </label>
              <input
                name="contact"
                type="tel"
                id="inputField"
                className="mt-1 p-2 border text-[#828282] leading-6 font-normal rounded text-xl  sm:w-[320px] xl:w-[360px]  h-[53px] w-[260px]  md:bg-[#FFFFFF] bg-[#F3F4F6] "
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  setUserData({
                    ...userData,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </div>

            <div>
              <label
                htmlFor="inputField"
                className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                Payment Method
              </label>

              <div className="flex justify-between  mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2   gap-3">
                  <div className="flex items-center  ">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5  text-green-500"
                      name="payment_method"
                      value={0}
                      onChange={(event) => {
                        setUserData({
                          ...userData,
                          [event.target.name]: parseInt(event.target.value),
                        });
                      }}
                    />
                    <label className="text-[#6FCF97] text-sm ml-2 font-normal leading-6">
                      pay at the door by credit card
                    </label>
                  </div>

                  <div className="flex items-center ">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5  text-green-500"
                      name="payment_method"
                      value={1}
                      onChange={(event) => {
                        setUserData({
                          ...userData,
                          [event.target.name]: parseInt(event.target.value),
                        });
                      }}
                    />
                    <label className="text-[#6FCF97] text-sm ml-2 font-normal leading-6">
                      pay at the door by credit card
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-[#6FCF97]  w-[260px]  sm:w-[320px] xl:w-[360px]  h-[53px] mt-7 rounded text-[#FFFFFF] text-[18px] font-semibold leading-6 hover:bg-[#1b6339]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutPart;
