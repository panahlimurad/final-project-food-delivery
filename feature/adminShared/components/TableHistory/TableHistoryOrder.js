import React, { useState } from "react";
import deleteBtn from "../../../../feature/adminFolders/assets/image/orders/delete.svg";
import eyes from "../../../../feature/adminFolders/assets/image/orders/eyes.svg";
import Image from "next/image";
import { ScrollBarContainer } from "../../../ClientShared/Scroll/Scroll";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetOrder } from "../../services/dataApi";
import { shortText } from "../../helper/shortText";
import Modal from "../../../ClientShared/components/yourorder/Modal";
import axios from "axios";
import { toast } from "react-toastify";

const TableHistoryOrder = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery("orders", GetOrder, {
    onSuccess: (res) => {
      // console.log("query", res);
    },
  });

  const dataArray = data ? Object.values(data) : [];
  const OrderData = dataArray[1]?.data;
  console.log("datadata", OrderData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setIsModalOpen(true);
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const newFilterData = OrderData?.find((item) => item.id === selectedOrder);

  const token = null;

  if (typeof window !== "undefined") {
    const userJSONData = localStorage.getItem("clientData");
    const userData = JSON.parse(userJSONData);
    const token = userData?.user?.access_token;
  }

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
      toast.error("Order Couldn't Delete!", {
        autoClose: 1500,
      });
      console.log("err", error);
    },
  });
  const handleDelete = (id) => {
    delUserOrder(id);
  };

  return (
    <>
      <ScrollBarContainer bg="#C74FEB">
        <div className="overflow-x-auto md:overflow-x-hidden w-full flex flex-col bg-slate-50">
          <div>
            <table className="w-full text-left text-black text-sm font-light">
              <thead className="border-b font-normal dark:border-neutral-500">
                <tr className="text-center">
                  <th scope="col">ID</th>
                  <th scope="col">Customer ID</th>
                  <th scope="col">Time</th>
                  <th scope="col">Delivery Adress</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                {OrderData?.map((data, index) => (
                  <tr className="border-b text-center dark:border-neutral-500">
                    <td className="font-medium">
                      <span className="border-2 rounded-lg p-1">
                        {shortText(5, data.id)}
                      </span>
                    </td>
                    <td>
                      <span className="border-2 rounded-lg p-1">
                        {shortText(5, data.customer_id)}
                      </span>
                    </td>
                    <TextDecoderStrea>
                      {new Date(data.created).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </TextDecoderStrea>
                    <td className="whitespace-pre-line">{data.delivery_address},</td>
                    <td>{data.amount} $</td>
                    <td >
                      {data.payment_method == 0 ? "cash" : "by credit card"}
                    </td>
                    <td>{data.contact}</td>
                    <td
                      onClick={() => openModal(data.id)}
                      className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td
                      onClick={() => handleDelete(data?.id)}
                      className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollBarContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="sm:overflow-x-hidden w-[100%] h-full overflow-x-auto bg-[#FFFFFF]">
          <table class="text-left w-full text-black text-sm font-light">
            <thead class="border-b font-semibold leading-5 tracking-wide">
              <tr className="text-center">
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                <th scope="col">Amount</th>
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
    </>
  );
};

export default TableHistoryOrder;
