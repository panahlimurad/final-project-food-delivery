import Image from "next/image";
import deleteItem from "../../../../public/svg/delete.svg";
import styles from "./BasketModal.module.css";
import { ScrollBarContainer } from "../../ScrollableTable/ScrollableTable";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetBasket, PostBasket } from "../../../adminShared/services/dataApi";
import Link from "next/link";
import axios from "axios";

function BasketModal({ setActiveModal, activeModal, datas }) {
  const handleClose = () => {
    setActiveModal(false);
  };
  const modalClasses = activeModal
    ? `${styles.basketModal} ${styles.showModal} `
    : `${styles.basketModal} ${styles.hideModal}`;

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery("basket", GetBasket, {
    // onSuccess: (res) => {
    //   queryClient.invalidateQueries(["basket"]);
    // },
  });
  const dataArray = data ? Object.values(data.result) : [];

  const totalPrice = dataArray[0]?.total_amount;
  const total_item = dataArray[0]?.total_item;

  
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

  const mutation = useMutation((data) => PostBasket(data), {
    onSuccess: (responseData) => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const handleDeleteProduct = (delData) => {
    delProductToBasket(delData?.id);
  };

  const handleAddToCart = (data) => {
    const updatedCartId = { product_id: data?.id };
    // setCartId(updatedCartId);

    mutation.mutate(updatedCartId);
    // setActiveModal(true);
  };

  return (
    <div className={`${activeModal && styles.overlay} z-50`}>
      <div className={modalClasses}>
        <div className=" flex  justify-end mb-6 pr-2 ">
          <button onClick={handleClose} className={`${styles.closeModal}`}>
            x
          </button>
        </div>
        <ScrollBarContainer>
          <table className="w-full h-full z-50">
            <tbody>
              {dataArray[0]?.items?.map((data, index) => (
                <tr
                  className={`${styles.tableRow} relative  border-b-[1px] border-[#E0E0E0]`}>
                  <td className="w-[68px] pr-8 max-[981px]:pr-4 max-[380px]:pr-2 max-[380px]:w-[40px]">
                    <div className="w-[68px] h-[68px] max-[683px]:w-[48px] max-[683px]:h-[48px] max-[380px]:w-[38px] max-[380px]:h-[38px] ">
                      <Image
                        src={data.img_url}
                        alt="pizza"
                        width={45}
                        height={45}
                      />
                    </div>
                  </td>
                  <td className="w-3/5  max-[981px]:w-8/12  max-[922px]:w-3/5 max-[380px]:w-7/12 max-[328px]:w-3/5">
                    <div>
                      <h3 className={`${styles.restaurantName}`}>
                        {data.name}
                      </h3>{" "}
                      <p className={`${styles["restaurant-paragraf"]}`}>
                        ${data.price}
                      </p>
                    </div>
                  </td>
                  <td className="w-[80px] p-2">
                    {" "}
                    <div className={styles["basket-btn"]}>
                      <button onClick={() => handleAddToCart(data)}>
                        <span>+</span>
                      </button>
                      <span>{data.count}</span>
                      <button onClick={() => handleDeleteProduct(data)}>
                        <span>-</span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span className="w-[25px] h-[25px] absolute right-2 top-6">
                      <Image src={deleteItem} alt="delete" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollBarContainer>
        <Link href={"/user?page=checkout"}>
          <div className="flex items-center justify-center mt-8 relative mb-6">
            <button className={`${styles["basket-btn1"]}`}>Checkout</button>
            <button className={`${styles["basket-totalAmount"]}`}>
              {totalPrice} $
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BasketModal;
