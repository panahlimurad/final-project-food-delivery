import React from "react";
import { shortText } from "../../helper/shortText";
import { useQuery } from "react-query";
import axios from "axios";
import deleteBtn from "../../../../feature/adminFolders/assets/image/orders/delete.svg";
import eyes from "../../../../feature/adminFolders/assets/image/orders/eyes.svg";
import { ScrollBarContainer } from "../../../ClientShared/Scroll/Scroll";
import Image from "next/image";
import { motion } from "framer-motion";
const HistoryOrder = () => {
    const { data } = useQuery({
        queryKey: ["order-history"],
        queryFn: async () => {
          const response = await axios.get("/api/order/history");
          return response.data;
        },
      });
    return (
        <div className="w-100  bg-slate-50">
            <div>

                <ScrollBarContainer bg={'#C74FEB'}>
            <motion.div
    className="container"
      initial={{ opacity: 0, y: -50, x: '-100%' }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
  >


                <table className="w-full text-left sm:text-sm text-xs  rtl:text-right text-black  font-light">

                    <thead className="border-b font-semibold  leading-5 tracking-wide uppercase  ">
                        <tr >
                            <th scope="col" className="  text-center py-4  ">ID</th>
                            <th scope="col" className="  text-center py-4  ">Customer ID</th>
                            <th scope="col" className="  text-center py-4  ">Time</th>
                            <th scope="col" className="  text-center py-4  ">Delivery Adress</th>
                            <th scope="col" className="  text-center py-4  ">Amount</th>
                            <th scope="col" className="  text-center py-4  ">Payment Method</th>
                            <th scope="col" className="  text-center py-4  ">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.result?.data.map((data, index) => (
                            <motion.tr
                            key={data.id}
                            initial={{ opacity: 0, y: -10, x: 0 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="border-b text-center dark:border-neutral-500"
                          >


                            {/* <tr className="border-b text-center dark:border-neutral-500"> */}
                                <motion.td className="whitespace-nowrap  font-medium py-4">
                                    <span className="border-2 rounded-lg p-1">
                                        {shortText(5, data.id)}
                                    </span>
                                </motion.td>
                                <motion.td className="whitespace-nowrap  font-medium  py-4">
                                    <span className="border-2 rounded-lg p-1">
                                        {shortText(5, data.customer_id)}
                                    </span>
                                </motion.td>
                                <motion.td className="whitespace-nowrap  font-normal leading-5 tracking-wide  py-4">
                                    {new Date(data.created).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </motion.td>
                                <motion.td className=" whitespace-pre-line h-auto sm:w-[10%] font-normal leading-5 tracking-wide  py-4">
                                    {data.delivery_address},
                                </motion.td>
                                <motion.td className="whitespace-nowrap  font-normal leading-5 tracking-wide  py-4">{data.amount} $</motion.td>
                                <motion.td className="whitespace-nowrap  font-normal leading-5 tracking-wide  py-4">
                                    {data.payment_method == 0 ? "cash" : "by credit card"}
                                </motion.td>
                                <motion.td className="whitespace-nowrap  font-normal leading-5 tracking-wide  py-4">{data.contact}</motion.td>
                               
                                {/* <motion.td
                                    onClick={() => handleDelete(data?.id)}
                                    className="whitespace-nowrap px-6 py-4 cursor-pointer">
                                    <Image src={deleteBtn} alt=".." />
                                </motion.td> */}
                            {/* </tr> */}
                          </motion.tr>
                        ))}
                    </tbody>
                </table>
  </motion.div>
                                </ScrollBarContainer>
            </div>
        </div>
    )
}
export default HistoryOrder