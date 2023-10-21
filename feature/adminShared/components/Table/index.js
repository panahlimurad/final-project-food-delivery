import { MdModeEditOutline } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
// import { useEffect, useState } from "react";
import tableImage from "../../../adminFolders/assets/image/tableImage.svg";
import { ScrollBarContainer } from "../../../ClientShared/Scroll/Scroll";
import { shortText } from "../../helper/shortText";

function Table({ data, headers }) {


  return (
    <ScrollBarContainer bg="#C74FEB">
      <div
        className="w-100 mb-10"
        style={{ maxHeight: "600px", overflowY: "auto" }}>
        <table className="table-fixed w-full text-center bg-white text-[#00072B]">
          <thead className="max-[420px]:text-sm">
            <tr>
              {headers.map((text, index) => (
                <th key={index} className="sticky top-0 bg-white">
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-[420px]:text-xs">
            {data[1]?.data?.map((item,index)=>(
              <tr key={index} className="border-2">
              <td>
                <span className="border-2 rounded-md p-1">{shortText(5, item.id)}</span>
              </td>
              <td className="flex justify-center">

             <Image className="text-center" src={tableImage}/>
              </td>
                <td>{shortText(15, item.name)}</td>
                <td>{shortText(15, item.description)}</td>
              <td>
                {/* <td>{shortText(10, item.description)}</td> */}
                <div className="flex">
                  {" "}
                  <div className="w-[64px] h-[36px] hover:bg-slate-100 flex items-center justify-center rounded-md">
                    <MdModeEditOutline
                      size={24}
                      className="text-green-600 cursor-pointer"
                    />
                  </div>
                  <div className="w-[64px] h-[36px] hover:bg-slate-100 flex items-center justify-center rounded-md">
                    {" "}
                    <SlTrash
                      size={24}
                      className="text-red-600 cursor-pointer  p-1"
                    />
                  </div>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollBarContainer>
  );
}
export default Table;
