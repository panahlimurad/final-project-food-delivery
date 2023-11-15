import React, { useState } from "react";
import deleteBtn from "../../../../feature/adminFolders/assets/image/orders/delete.svg";
import eyes from "../../../../feature/adminFolders/assets/image/orders/eyes.svg";
import Image from "next/image";
import { ScrollBarContainer } from "../../Scroll/Scroll";
import { GetOrder } from "../../../adminShared/services/dataApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Modal from "./Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { shortText } from "../../../adminShared/helper/shortText";

const YourOrder = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery("orders", GetOrder, {
    onSuccess: (res) => {
      // console.log("query", res);
    },
  });

  

  const dataArray = data ? Object.values(data) : [];
  const OrderData = dataArray[1]?.data;
  // console.log("jd", OrderData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const openModal = (order) => {
    setIsModalOpen(true);
    setSelectedOrder(order);
    // console.log("productId", order)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const newFilterData = OrderData?.find((item) => item.id === selectedOrder);

  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;

  const { mutate: delUserOrder } = useMutation({
    mutationFn: async (orderId) =>
      await axios.delete("/api/order", {
        data: {
          order_id: orderId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      toast.success("Deleted Order Successfully!", {
        autoClose: 1500,
      });
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      // toast.error("Order Couldn't Delete!")
      console.log("err", error);
    },
  });
  const handleDelete = (id) => {
    console.log("id", id);
    delUserOrder(id);
  };
  return (
    <div className="sm:bg-[#F3F4F6] px-8 py-8 h-auto">
      <h1 className="color-[#4F4F4F] font-semibold text-3xl leading-6 font-sans mb-8 ml-3">
        Your Order
      </h1>
      <div className="w-full bg-[#FFFFFF]  ">
        <ScrollBarContainer bg="#C74FEB">
          <div>

            <table class="w-full text-black text-sm font-light">
              <thead class="border-b font-semibold leading-5 tracking-wide">
                <tr className="text-center">
                  <th>ID</th>
                  <th>Time</th>
                  <th>Delivery Adress</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Contact</th>
                </tr>
              </thead>

              <tbody>
                {OrderData?.map((order, index) => (
                  // console.log("orders", order),
                  <tr className="border-b text-center" key={order.id}>
                    <td className="whitespace-nowrap w-[10%] font-medium">
                   <span className="border-2 rounded-lg p-1">

                      {shortText(5, order.id)}
                   </span>
                    </td>
                    <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide">
                      {" "}
                      {new Date(order.created).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="whitespace-pre-line  h-auto w-[20%] font-normal leading-5 tracking-wide">
                      {order.delivery_address},
                    </td>
                    <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide">
                      {order.amount} $
                    </td>
                    <td className="whitespace-nowrap w-[20%] font-normal leading-5 tracking-wide">
                      {order.payment_method == 0
                        ? "cash"
                        : "by credit card"}
                    </td>
                    <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide">
                      {order.contact}
                    </td>
                    <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide  cursor-pointer">
                      <button onClick={() => openModal(order.id)}>
                        <Image src={eyes} alt=".." />
                      </button>
                    </td>
                    <td
                      className="whitespace-nowrap w-[10%] px-4 py-4 font-normal leading-5 tracking-wide  cursor-pointer"
                      onClick={() => handleDelete(order?.id)}>
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
<table class=" text-sm text-left rtl:text-right text-black  font-light ">
        <thead class="text-xs border-b font-semibold leading-5 tracking-wide uppercase">
            <tr>
                <th scope="col" class=" py-3 text-center lg:px-2 px-10 ">
                ID
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
                    Time
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
                Delivery Address
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
                Amount
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
                Payment Method
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
                Contact
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
              
                </th>
                <th scope="col" class=" py-3 lg:text-center lg:px-2 px-10">
               
                </th>
            </tr>
        </thead>
        <tbody>
        {OrderData?.map((order, index) => (
      
      <tr className="border-b text-center" key={order.id}>
      <td className="whitespace-nowrap w-[10%] font-medium px-4 py-4" >
     <span className="border-2 rounded-lg p-1">

        {shortText(5, order.id)}
     </span>
      </td>
      <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide px-4 py-4">
        {" "}
        {new Date(order.created).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </td>
      <td className="whitespace-pre-line  h-auto w-[20%] font-normal leading-5 tracking-wide lg:px-0 px-4  py-4">
        {order.delivery_address},
      </td>
      <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide lg:px-0 px-4  py-4">
        {order.amount} $
      </td>
      <td className="whitespace-nowrap w-[20%] font-normal leading-5 tracking-wide lg:px-0 px-4  py-4">
        {order.payment_method == 0
          ? "cash"
          : "by credit card"}
      </td>
      <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide  lg:px-0 px-4 py-4">
        {order.contact}
      </td>
      <td className="whitespace-nowrap w-[10%] font-normal leading-5 tracking-wide lg:px-0 px-4  py-4  cursor-pointer">
        <button onClick={() => openModal(order.id)}>
          <Image src={eyes} alt=".." />
        </button>
      </td>
      <td
        className="whitespace-nowrap w-[10%]  py-4 font-normal leading-5 lg:px-0 px-4 tracking-wide  cursor-pointer"
        onClick={() => handleDelete(order?.id)}>
        <Image src={deleteBtn} alt=".." />
      </td>
    </tr>
      
           
      
      ))}



        </tbody>
    </table>
</div>
        </ScrollBarContainer>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} className="w-full">

        <div className=" bg-[#FFFFFF]">
          <table class="text-left w-full text-black text-sm font-light">
            <thead class="border-b font-semibold leading-5 tracking-wide">
              <tr className="text-center">
                <th scope="col">
                  Image
                </th>
                <th scope="col">
                  Name
                </th>
                <th scope="col">
                  Price
                </th>
                <th scope="col">
                  Count
                </th>
                <th scope="col">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {newFilterData?.products.map((product) => (
                <tr className="border-b  text-center" key={product.id}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium flex justify-center">
                    {" "}
                    <Image
                      src={product.img_url}
                      alt="Product Image"
                      width={100}
                      height={100}
                    />{" "}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide">
                    {product.price}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide">
                    {product.count}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide">
                    {Number(product.price) * product.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default YourOrder;
