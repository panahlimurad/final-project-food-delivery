import React from "react";
import ScrollableTable, { Td, Th } from "../ScrollableTable/ScrollableTable";
import Image from "next/image";
import styles from "../../../pages/restaurants/[id]/AboutRestaurants.module.css";
import add from "../../../public/svg/basket1.svg";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetBasket, PostBasket } from "../../adminShared/services/dataApi";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
export const Basket = ({ datas }) => {
  const queryClient = useQueryClient();

  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;

  const { mutate: delProductToBasket } = useMutation({
    mutationFn: async (productId) =>
      await axios.delete("/api/basket/clear", {
        data: {
          basket_id: productId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      toast.success("Your Basket is empty", { autoClose: 2000 });
      queryClient.invalidateQueries(["basket"]);
    },
    onError: (error) => {
      toast.error("Your surgery was unsuccessful");
      console.log(error);
    },
  });
  const { mutate: delProductToBaskets } = useMutation({
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

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["basket"],
    queryFn: async () => {
      const { data } = await GetBasket();
      return data;
    },
    // onSuccess: (res) => {
    //   // dispatch(setBasket(res));
    //   // queryClient.invalidateQueries(["basket"]);
    // },
  });
  const dataArray = data ? Object.values(data.result) : [];

  const handleDeleteAllProduct = (delData) => {
    delProductToBasket(delData?.result?.data?.id);
  };

  const totalPrice = dataArray[0]?.total_amount;
  const total_item = dataArray[0]?.total_item;
  const mutation = useMutation((data) => PostBasket(data), {
    onSuccess: (responseData) => {
      console.log("postBasket", responseData);
      queryClient.invalidateQueries(["basket"]);
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const handleAddToCart = (data) => {
    const updatedCartId = { product_id: data?.id };

    mutation.mutate(updatedCartId);
  };

  const handleDeleteProduct = (delData) => {
    delProductToBaskets(delData?.id);
  };

  return (
    <div
      className={`w-[467px] h-full ${styles["basket-container"]} bg-[#F3F4F6]`}
    >
      <ScrollableTable>
        <thead className="text-center w-full border-b-[1px] border-[#E0E0E0]">
          <tr>
            <Th colSpan="3">
              <div className="flex justify-between text-[#D63626]">
                <div
                  className="w-[40%] h-[45px] flex gap-4 items-center"
                  style={{ color: "#D63626" }}
                >
                  <Image src={add} alt="basket" />
                  <p>{total_item} item</p>
                </div>
                <button
                  onClick={() => handleDeleteAllProduct(data)}
                  className="border-2 p-1 text-base rounded-md bg-white"
                >
                  Clear All
                </button>
              </div>
            </Th>
          </tr>
        </thead>
        <tbody>
          {dataArray[0]?.items?.map((data, index) => (
            <tr key={index} className=" relative ">
              <Td size="sm" className="flex gap-6 justify-between h-[140px]">
                <div className="flex items-center justify-center ">
                  <div className="w-[65px] h-[45px] mr-5 ">
                    <Image
                      src={data.img_url}
                      alt="pizza"
                      width={65}
                      height={45}
                      className="rounded-lg "
                    />
                  </div>
                  <div>
                    <h3 className={styles.basketTitle}>{data.name}</h3>

                    <p className={styles["restaurant-paragraf"]}>
                      ${data.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  items-center w-[45px]">
                  <div
                    className={`${styles["basket-btn"]} py-3 flex flex-col justify-center items-center w-[30px] h-[95px]`}
                  >
                    <button onClick={() => handleAddToCart(data)}>
                      <span>+</span>
                    </button>
                    <span className=" text-lg">{data.count}</span>
                    <button onClick={() => handleDeleteProduct(data)}>
                      <span>-</span>
                    </button>
                  </div>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </ScrollableTable>
      <div className="flex items-center justify-center mt-20 relative mb-6">
        <Link
          className={`${styles["basket-btn1"]} flex items-center `}
          href="/user?page=checkout"
        >
          <button>Checkout</button>
          <button className={`${styles["basket-totalAmount"]}`}>
            ${totalPrice}
          </button>
        </Link>
      </div>
    </div>
  );
};
