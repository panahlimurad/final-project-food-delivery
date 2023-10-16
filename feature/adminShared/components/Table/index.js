import { MdModeEditOutline } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { TableCell, TableRow } from "@mui/material";
import Image from "next/image";
// import { useEffect, useState } from "react";
import tableImage from "../../../adminFolders/assets/image/tableImage.svg";
import {ScrollBarContainer} from "../../../ClientShared/Scroll/Scroll";

function Table({ rows, isLoading }) {
  // const [columns, setColumn] = useState([]);
  // useEffect(() => {
  //   rows.length &&
  //     setColumn(
  //       Object.keys(rows[0]).map((key) => {
  //         return {
  //           id: key,
  //           title: key,
  //         };
  //       })
  //     );
  // }, []);

  return (
    <ScrollBarContainer bg="#C74FEB">
      <div
        className="w-100 mb-10"
        style={{ maxHeight: "600px", overflowY: "auto" }}>
        <table className="table-fixed w-full text-center bg-white text-[#00072B]">
          <thead className="max-[420px]:text-sm">
            <tr>
              <th className="sticky top-0 bg-white">column.title</th>
            </tr>
          </thead>
          <tbody className="max-[420px]:text-xs">
            <tr className="border-2">
              <td>
                <span className="border-2 rounded-md p-1">9177</span>
              </td>
              <td className="flex justify-center items-center">
                <Image
                  className="w-[45px] h-[45px] object-cover my-3"
                  src={tableImage}
                />
              </td>
              <td>Pizza</td>
              <td>yummy pizza</td>
              <td>
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
            <tr className="border-2">
              <td>
                <span className="border-2 rounded-md p-1">9177</span>
              </td>
              <td className="flex justify-center items-center">
                <Image
                  className="w-[45px] h-[45px] object-cover my-3"
                  src={tableImage}
                />
              </td>
              <td>Pizza</td>
              <td>yummy pizza</td>
              <td>
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
            <tr className="border-2">
              <td>
                <span className="border-2 rounded-md p-1">9177</span>
              </td>
              <td className="flex justify-center items-center">
                <Image
                  className="w-[45px] h-[45px] object-cover my-3"
                  src={tableImage}
                />
              </td>
              <td>Pizza</td>
              <td>yummy pizza</td>
              <td>
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
          </tbody>
        </table>
      </div>
    </ScrollBarContainer>
  );
}
export default Table;
