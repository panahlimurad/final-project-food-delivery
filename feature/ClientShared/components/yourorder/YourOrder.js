import React, { useState } from 'react'
import deleteBtn from "../../../../feature/adminFolders/assets/image/orders/delete.svg";
import eyes from "../../../../feature/adminFolders/assets/image/orders/eyes.svg";
import Image from "next/image";
import { ScrollBarContainer } from '../../Scroll/Scroll'
import {  GetOrder } from '../../../adminShared/services/dataApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Modal from './Modal';
import axios from 'axios';


const YourOrder = () => {
  const queryClient = useQueryClient()
  const { data } = useQuery(
    "orders",
    GetOrder,
    {
      onSuccess: (res) => {
        // console.log("query", res);
      },
    }
  );
 

  // console.log("datass", data);

  const dataArray = data ? Object.values(data) : [];
  const OrderData = dataArray[1]?.data
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



  const newFilterData = OrderData?.find(item => item.id === selectedOrder)


  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  const { mutate: delUserOrder } = useMutation({
    mutationFn: async (orderId) => await axios.delete('/api/order', {
      data: {
        order_id: orderId
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
    onSuccess: () => {
      // toast.success('Deleted Order Successfully!')
      queryClient.invalidateQueries(["order"]);
    },
    onError: (error) => {
      // toast.error("Order Couldn't Delete!")
      console.log("err",error)
    }
  });
  const handleDelete = (id) => {
    console.log("id",id)
    delUserOrder(id)
  };
  return (
    <div className='sm:bg-[#F3F4F6] px-8  py-8 h-auto '>
      <h1 className='color-[#4F4F4F] font-semibold text-3xl leading-6  font-sans mb-8 ml-3'>Your Order</h1>
      <div className="  w-full bg-[#FFFFFF]  ">
        <ScrollBarContainer bg='#C74FEB'>
          <div class="relative overflow-x-auto ">
            <table class="w-full text-left text-black text-sm font-light">
              <thead class="border-b font-semibold leading-5 tracking-wide font-['Open_Sans']  ">
                <tr className="text-center">
                  <th scope="col" className="px-4 py-3">
                    ID
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delivery Adress
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Payment Method
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Contact
                  </th>
                </tr>
              </thead>

              <tbody>
                {OrderData?.map((order, index) => (
                  // console.log("orders", order),
                  <tr className="border-b  text-center" key={order.id}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium  ">
                      {order.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-normal leading-5 tracking-wide  font-['Open_Sans'] ">Otto</td>
                    <td className="whitespace-nowrap  px-4 py-4 font-normal leading-5 tracking-wide font-['Open_Sans'] ">{order.delivery_address}</td>
                    <td className="whitespace-nowrap  px-4 py-4 font-normal leading-5 tracking-wide font-['Open_Sans'] ">{order.amount}</td>
                    <td className="whitespace-nowrap  px-4 py-4 font-normal leading-5 tracking-wide font-['Open_Sans'] ">{order.payment_method == 0 ? "pay at the door" : "pay at the door by credit card"}</td>
                    <td className="whitespace-nowrap  px-4 py-4 font-normal leading-5 tracking-wide font-['Open_Sans']  ">{order.contact}</td>
                    <td className="whitespace-nowrap  px-4 py-4 font-normal leading-5 tracking-wide  cursor-pointer w-[180px]">
                      <button onClick={() => openModal(order.id)}>
                        <Image src={eyes} alt=".." />
                      </button>
                    </td>
                    <td className="whitespace-nowrap  px-4 py-4 font-normal leading-5 tracking-wide  cursor-pointer w-[180px]" onClick={() => handleDelete(order?.id)}>
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
        <div className=" sm:overflow-x-hidden  overflow-x-auto  bg-[#FFFFFF]  ">
          <table class="text-left text-black text-sm font-light">
            <thead class="border-b font-semibold leading-5 tracking-wide font-['Open_Sans']  ">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price $
                </th>
                <th scope="col" className="px-6 py-3">
                  Count
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>

              </tr>
            </thead>
            <tbody>
              {newFilterData?.products.map((product) => (
                <tr className="border-b  text-center" key={product.id}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium  "> <Image src={product.img_url}
                    alt="Product Image" width={100} height={100} /> </td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide  font-['Open_Sans'] ">{product.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide font-['Open_Sans'] ">{product.price}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide font-['Open_Sans'] ">{product.count}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal leading-5 tracking-wide font-['Open_Sans'] ">{Number(product.price) * product.count}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </Modal>
    </div>
  )
}

export default YourOrder







