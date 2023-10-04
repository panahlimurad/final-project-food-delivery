import React from "react";
import deleteBtn from "../../../../feature/adminFolders/assets/image/orders/delete.svg";
import eyes from "../../../../feature/adminFolders/assets/image/orders/eyes.svg";
import Image from "next/image";

const TableHistoryOrder = () => {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col bg-slate-50 ">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="max-h-[500px] overflow-y-scroll">
              <table className="min-w-full text-left text-black text-sm font-light">
                <thead className="border-b font-normal dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Customer ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Delivery Adress
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Payment Method
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      4
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      6
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      7
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      8
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      9
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={eyes} alt=".." />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                      <Image src={deleteBtn} alt=".." />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHistoryOrder;
