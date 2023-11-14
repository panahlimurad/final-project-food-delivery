import styles from "../../../feature/ClientShared/components/BasketModal/BasketModal.module.css";
import Image from "next/image";
import add from "../../../public/svg/basket1.svg";
import deleteItem from "../../../public/svg/delete.svg";
import empty from "../../../public/svg/empty.svg";
import { ScrollBarContainer } from "../../../feature/ClientShared/ScrollableTable/ScrollableTable";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  GetBasket,
  PostBasket,
} from "../../../feature/adminShared/services/dataApi";
import Link from "next/link";

const Basket = () => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ['basket'] })

  const { data, isLoading, isError, error } = useQuery("basket", GetBasket, {
    // queryKey: ['basket'],
    // onSuccess: (res) => {
    //   queryClient.invalidateQueries(["basket"]);
    // },
  });
  const dataArray = data ? Object.values(data.result) : [];

  const totalPrice = dataArray[0]?.total_amount;
  const total_item = dataArray[0]?.total_item;

  const mutation = useMutation((data) => PostBasket(data), {
    // onSuccess: (responseData) => {
    //   console.log("postBasket", responseData);
    // },
    // onError: (error) => {
    //   console.log("Error", error);
    // },
  });

  const handleAddToCart = (data) => {
    const updatedCartId = { product_id: data?.id };
    // setCartId(updatedCartId);

    mutation.mutate(updatedCartId);
    // setActiveModal(true);
  };

  return (
    <div
      className={`min-w-full h-full ${styles["basket-container"]} bg-[#F3F4F6]`}>
      <ScrollBarContainer>
        <table className="min-w-full h-full">
          <thead>
            <tr>
              <th
                colSpan={3}
                className={`${styles.tableRow} relative  border-b-[1px] border-[#E0E0E0]`}>
                {" "}
                <h5 className="pt-4 text-3xl max-[420px]:text-lg">
                  Your Basket
                </h5>{" "}
                <div className=" flex  items-center ml-4 max-[420px]:hidden">
                  <Image src={add} />
                  <span className="flex gap-4 ml-4">{total_item} items</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataArray[0]?.items?.map((data, index) => (
              <tr
                className={`${styles.tableRow} relative  border-b-[1px] border-[#E0E0E0]`}>
                <td className="w-[68px] pr-8  pl-8 max-[981px]:pr-4 max-[380px]:pr-2 max-[380px]:w-[40px] max-[380px]:pl-2 ">
                  <div className="w-[68px] h-[68px] max-[683px]:w-[48px] max-[683px]:h-[48px] max-[380px]:w-[38px] max-[380px]:h-[38px] ">
                    <Image
                      src={data.img_url}
                      width={100}
                      height={100}
                      alt="pizza"
                    />
                  </div>
                </td>
                <td className="w-9/12  max-[981px]:w-8/12  max-[922px]:w-3/5 max-[380px]:w-7/12 max-[328px]:w-3/5">
                  <div>
                    <h3 className={`${styles.restaurantName}`}>{data.name}</h3>{" "}
                    <p className={`${styles["restaurant-paragraf"]}`}>
                      {data.price} $
                    </p>
                  </div>
                </td>
                <td className="w-[40px] p-2">
                  {" "}
                  <button
                    onClick={() => handleAddToCart(data)}
                    className={`${styles["basket-btn"]} `}>
                    <span>+</span>
                    {data.count}
                    <span>-</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollBarContainer>
      <Link href={"/user?page=checkout"}>
        <div className="flex items-center justify-center mt-8 relative bottom-1 mb-2">
          <button className={`${styles["basket-btn1"]}`}>Checkout</button>
          <button className={`${styles["basket-totalAmount"]}`}>
            {totalPrice} $
          </button>
        </div>
      </Link>
    </div>
  );
};
export default Basket;
