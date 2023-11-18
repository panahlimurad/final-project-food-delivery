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
import { motion } from "framer-motion";
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
      <div className="  bg-slate-50  h-auto">
        <div className="w-full ">
          <ScrollBarContainer bg="#C74FEB">
            <motion.div
    className="container "
      initial={{ opacity: 0, y: -50, x: '-100%' }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
  >
              <table className="  text-left text-black sm:text-sm text-xs font-light rtl:text-right ">
                <thead className="border-b font-semibold ">
                  <tr className="text-center ">
                    <th scope="col" className=" text-center py-4  ">
                      ID
                    </th>
                    <th scope="col" className=" text-center py-4 ">
                      Customer ID
                    </th>
                    <th scope="col" className=" text-center py-4 ">
                      Time
                    </th>
                    <th scope="col" className=" text-center  py-4 ">
                      Delivery Adress
                    </th>
                    <th scope="col" className=" text-center py-4 ">
                      Amount
                    </th>
                    <th scope="col" className=" text-center py-4 ">
                      Payment Method
                    </th>
                    <th scope="col" className=" text-center py-4 ">
                      Contact
                    </th>
                    <th scope="col" className=" text-center py-4 "></th>
                    <th scope="col" className=" text-center py-4 "></th>
                  </tr>
                </thead>
                <tbody>
                  {OrderData?.map((data, index) => (
                    <motion.tr
                    key={data.id}
                    initial={{ opacity: 0, y: -10, x: 0 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border-b text-center dark:border-neutral-500"
                   >
                      <motion.td className=" font-medium py-4  ">
                        <span className="border-2 rounded-lg p-1">
                          {shortText(5, data.id)}
                        </span>
                      </motion.td>
                      <motion.td className=" font-medium py-4">
                        <span className="border-2 rounded-lg p-1">
                          {shortText(5, data.customer_id)}
                        </span>
                      </motion.td>
                      <motion.td className=" font-normal  py-4 ">
                        {new Date(data.created).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </motion.td>
                      <motion.td className="whitespace-pre-line  h-auto w-[10%] font-normal py-4    ">
                        {data.delivery_address},
                      </motion.td>
                      <motion.td className=" font-normal leading-5 py-4 tracking-wide   ">
                        {data.amount} $
                      </motion.td>
                      <motion.td className=" font-normal leading-5 py-4 tracking-wide   ">
                        {data.payment_method == 0 ? "cash" : "by credit card"}
                      </motion.td>
                      <motion.td className=" font-normal leading-5 py-4 tracking-wide   ">
                        {data.contact}
                      </motion.td>
                      <motion.td
                        onClick={() => openModal(data.id)}
                        className=" font-normal  py-4 cursor-pointer"
                      >
                        <Image src={eyes} alt=".." />
                      </motion.td>
                      <motion.td
                        onClick={() => handleDelete(data?.id)}
                        className="   font-normal leading-5   tracking-wide py-4 cursor-pointer"
                      >
                        <Image src={deleteBtn} alt=".." />
                      </motion.td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              </motion.div>
          </ScrollBarContainer>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="sm:overflow-x-hidden w-[100%] h-full overflow-x-auto bg-[#FFFFFF]">
          <table class="text-left w-full text-black text-sm font-light">
            <thead class="border-b font-semibold ">
              <tr className="text-center">
                <th scope="col" className="py-4">Image</th>
                <th scope="col" className="py-4">Name</th>
                <th scope="col" className="py-4">Price</th>
                <th scope="col " className="py-4">Count</th>
                <th scope="col" className="py-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {newFilterData?.products.map((product) => (
                <tr className="border-b  text-center" key={product.id}>
                  <td className="  py-4 font-medium flex justify-center">
                    {" "}
                    <Image
                      src={product.img_url}
                      alt="Product Image"
                      width={100}
                      height={100}
                    />{" "}
                  </td>
                  <td className="  py-4 font-normal ">
                    {product.name}
                  </td>
                  <td className="  py-4 font-normal ">
                    {product.price}
                  </td>
                  <td className="  py-4 font-normal ">
                    {product.count}
                  </td>
                  <td className="  py-4 font-normal ">
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
