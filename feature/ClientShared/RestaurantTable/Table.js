import React, { useState } from "react";
import ScrollableTable, { Td, Th } from "../ScrollableTable/ScrollableTable";
import Image from "next/image";
import styles from "../../../pages/restaurants/[id]/AboutRestaurants.module.css";
import add from "../../../public/svg/basket.svg";
import {
  DeleteBasket,
  GetBasket,
  PostBasket,
} from "../../adminShared/services/dataApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { setCheckOrderFalse } from "../../../redux/features/checkOrder/checkOrderSlice";
import axios from "axios";

export const Table = ({ setActiveModal, datas }) => {

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery("basket", GetBasket, {
    // onSuccess: (res) => {
    //   queryClient.invalidateQueries(["basket"]);
    // },
  });
  const dataArray = data ? Object.values(data.result) : [];

  const totalPrice = dataArray[0]?.total_amount;
  const total_item = dataArray[0]?.total_item;

  const [cartId, setCartId] = useState({
    product_id: "",
  });


  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;

  const { mutate: delProductToBasket } = useMutation({
    mutationFn: async (productId) =>
      await axios.delete("/api/basket/delete", {
        data: {
          product_id: productId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["basket"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });


  // const deleteMutation = useMutation((data) => DeleteBasket(data), {
  //   onSuccess: (res) => {
  //     console.log("delete", res);
  //   },
  //   onError: (err) => {
  //     console.log("del", err);
  //   },
  // });

  // const handleFalse=()=>{

  //   dispatch(setCheckOrderFalse())
  // }

  // console.log("state", isCheckOrder);

  const handleFalse=()=>{

    dispatch(setCheckOrderFalse())
  }
  
  // console.log("state", isCheckOrder);
  
  const mutation = useMutation((data) => PostBasket(data), {
    onSuccess: (responseData) => {
      dispatch(setCheckOrderFalse())
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
    onError: (error) => {
      // console.log("Error", error);
    },
  });

  const handleDeleteProduct = (delData) => {
    delProductToBasket(delData?.id);
  };

  const handleAddToCart = (data) => {
    const updatedCartId = { product_id: data?.id };
    // setCartId(updatedCartId);

    mutation.mutate(updatedCartId);
  };

  const openModal = () => {
    setActiveModal(true);
  };

  return (
    <div
      className={`w-[846px] h-[961px] ${styles["scrollbar-container"]} mr-12 `}>
      <ScrollableTable>
        <thead className="text-center w-full border-b-[1px] border-[#E0E0E0]  p-12">
          <tr>
            <Th colSpan="4">Products</Th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, index) => (
            <tr key={index}>
              <Td>
                <div className="w-[57px] h-[53px] max-[380px]:w-[46px] flex items-center max-[380px]:h-[42px]">
                  <Image
                    src={data.img_url}
                    width={100}
                    height={100}
                    alt="pizza"
                  />
                </div>
              </Td>
              <Td>
                <div>
                  <h3 className={`${styles.restaurantName}`}>{data.name}</h3>
                  <p className={`${styles["restaurant-paragraf"]}`}>
                    {data.description}
                  </p>
                </div>
              </Td>
              <Td>
                {" "}
                <span className={`${styles["span"]}`}>From</span>{" "}
                <span className={styles["product-price"]}>${data.price}</span>{" "}
              </Td>
              <Td>
                <button
                  onClick={() => handleDeleteProduct(data)}
                  className={`w-[28px] h-[28px] xl:w-[40px] xl:h-[40px] rounded-full border-2 border-[#BDBDBD] text-[#828282] text-lg hover:bg-[#eb5757]`}>
                  -
                </button>
              </Td>
              <Td>
                <button
                  onClick={() => handleAddToCart(data)}
                  className={`w-[40px] h-[40px] ${styles["table-btn"]}`}>
                  +
                </button>
              </Td>
            </tr>
          ))}
        </tbody>
      </ScrollableTable>
      <button
        onClick={openModal}
        className={`flex items-center justify-center mt-20 relative mb-6 ${styles["btn-content"]}`}>
        <div className="flex items-center gap-4">
          <Image src={add} alt="add" />
          <div className="flex gap-1 pt-2">
            <p>{total_item} items</p>
          </div>
        </div>
        <button className={`${styles["basket-totalAmount"]}`}>
          {totalPrice} $
        </button>
      </button>
    </div>
  );
};