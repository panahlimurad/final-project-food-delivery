import React from "react";
import ScrollableTable, { Td, Th } from "../ScrollableTable/ScrollableTable";
import Image from "next/image";
import styles from "../../../pages/restaurants/[id]/AboutRestaurants.module.css";
import add from "../../../public/svg/basket1.svg";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { DeleteAllBasket, GetBasket } from "../../adminShared/services/dataApi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export const Basket = ({ datas }) => {
  const queryClient = useQueryClient();

  
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['basket'],
    queryFn: async () => {
      const { data } = await GetBasket()
      return data
    },
    // onSuccess: (res) => {
    //   // dispatch(setBasket(res));
    //   // queryClient.invalidateQueries(["basket"]);
    // },
  });
  const dataArray = data ? Object.values(data.result) : [];


  // const selBasket = useSelector((state) => state.basket.data);
  // const basketItem = selBasket?.result?.data?.items?.length;
  // const totalAmmount = selBasket?.result?.data?.total_amount;

  const deleteMutationAllBasket = useMutation((data)=> DeleteAllBasket(data),{

    // onSuccess: (responseData) => {
    //   console.log("deleteAll", responseData);
    // },
    // onError: (error) => {
    //   console.log("Error", error);
    // },

  })

  const deleteAllBasket = (data)=>{
    // console.log("delAll", data.result.data.id);
    deleteMutationAllBasket.mutate({basket_id : data?.result?.data?.id})
  }

  const totalPrice = dataArray[0]?.total_amount
  const total_item = dataArray[0]?.total_item
  // console.log("dataArray", dataArray[0]?.items);

  return (
    <div
      className={`w-[467px] h-full ${styles["basket-container"]} bg-[#F3F4F6]`}>
      <ScrollableTable>
        <thead className="text-center w-full border-b-[1px] border-[#E0E0E0]">
          <tr>
            <Th colSpan="3">
              <div className="flex justify-between text-[#D63626]">
                <div
                  className="w-[40%] h-[45px] flex gap-4 items-center"
                  style={{ color: "#D63626" }}>
                  <Image src={add} alt="basket" />
                  <p>{total_item} item</p>
                </div>
                <button onClick={()=>deleteAllBasket(data)} className="border-2 p-1 text-base rounded-md bg-white">
                  Clear All
                </button>
              </div>
            </Th>
          </tr>
        </thead>
        <tbody>
          {dataArray[0]?.items?.map((data, index) => (
            <tr key={index} className=" relative">
              <Td size="sm" className="flex gap-4">
                <div className="w-[45px] h-[45px]">
                  <Image
                    src={data.img_url}
                    alt="pizza"
                    width={45}
                    height={45}
                  />
                </div>
                <div>
                  <h3 className={styles.basketTitle}>{data.name}</h3>

                  <p className={styles["restaurant-paragraf"]}>${data.price}</p>
                </div>
              </Td>
              {/* <Td size="sm" width={250}>
              </Td> */}
              <Td size="sm">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-lg text-black">{data.count}</span>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </ScrollableTable>
      <div className="flex items-center justify-center mt-20 relative mb-6">
        <Link
          className={`${styles["basket-btn1"]} flex items-center `}
          href="/user?page=checkout">
          <button>Checkout</button>
          <button className={`${styles["basket-totalAmount"]}`}>
            ${totalPrice}
          </button>
        </Link>
      </div>
    </div>
  );
};
