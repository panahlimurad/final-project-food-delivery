import React from "react";
import { shortText } from "../../helper/shortText";
import { useQuery } from "react-query";
import axios from "axios";
import deleteBtn from "../../../../feature/adminFolders/assets/image/orders/delete.svg";
import eyes from "../../../../feature/adminFolders/assets/image/orders/eyes.svg";
import Image from "next/image";
const HistoryOrder = () => {
    const { data } = useQuery({
        queryKey: ["order-history"],
        queryFn: async () => {
          const response = await axios.get("/api/order/history");
          return response.data;
        },
      });
    return (
        <div className="overflow-x-auto md:overflow-x-hidden w-full flex flex-col bg-slate-50">
            <div>
                <table className="w-full text-left text-black text-sm font-light">
                    <thead className="border-b font-normal dark:border-neutral-500">
                        <tr className="text-center">
                            <td scope="col">ID</td>
                            <td scope="col">Customer ID</td>
                            <td scope="col">Time</td>
                            <td scope="col">Delivery Adress</td>
                            <td scope="col">Amount</td>
                            <td scope="col">Payment Metdod</td>
                            <td scope="col">Contact</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.result?.data.map((data, index) => (
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
                                <td>
                                    {new Date(data.created).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </td>
                                <td className=" whitespace-pre-line">
                                    {data.delivery_address},
                                </td>
                                <td>{data.amount} $</td>
                                <td>
                                    {data.payment_method == 0 ? "cash" : "by credit card"}
                                </td>
                                <td>{data.contact}</td>
                               
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
    )
}
export default HistoryOrder