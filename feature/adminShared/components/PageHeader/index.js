// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import { FirstLetter } from "utils/util";
// import Select from "../Select";
// import Search from "../Search";
// import AddModal from "../AddModal";
// import { FORM } from "utils/form";
// import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";


// export const getStaticProps = async ({locale})=>({
//   props:{
//       ...(await serverSideTranslations(locale, ["common"]))
//   }
// })

const PageHeader = () => {
  const { t } = useTranslation("common");

  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  // const location = useLocation();
  // let path = location.pathname.split("/");
  // let pathName = path[path.length - 1];
  // const firstletter = FirstLetter(pathName);
  // const openAddModal = () => {
  //   setIsAddModalOpen(true);
  // };

  // const closeAddModal = () => {
  //   setIsAddModalOpen(false);
  // };
  return (
    <div className="bg-[#27283C] sm:h-[73px] flex sm:items-center justify-between gap-2 sm:flex-row flex-col h-auto  py-4 sm:px-10 px-3  sm:rounded-xl rounded-[4px] mb-8">
      <div className="page-title capitalize text-[#C7C7C7] text-xl font-medium ">{t("common:Offers")}</div>

      <div className="flex gap-6 items-center">
        <button
          // onClick={openAddModal}
          className=" h-[35px] sm:w-auto w-full  sm:capitalize uppercase cursor-pointer text-center px-5 flex items-center justify-center font-bold text-sm text-white bg-[#C035A2] hover:bg-[#C74FEB]  transition-all duration-300 ease-in-out sm:rounded-[14px] rounded-md shadow">
          <AddIcon
            sx={{ fontSize: 25 }}
            style={{ marginRight: "5px" }}
            edge="start"
            aria-label="logo"
          />
          <span className="ml-1 md:block">{t("common:AddCategory")}</span>
        </button>
{/* 
        <AddModal
          form={FORM.RESTAURANT}
          isAddModalOpen={isAddModalOpen}
          openAddModal={openAddModal}
          closeAddModal={closeAddModal}
        /> */}

        {/* <AddModal
          form={FORM.CATEGORY}
          isAddModalOpen={isAddModalOpen}
          openAddModal={openAddModal}
          closeAddModal={closeAddModal}
        /> */}

        {/* <AddModal
          form={FORM.OFFER}
          isAddModalOpen={isAddModalOpen}
          openAddModal={openAddModal}
          closeAddModal={closeAddModal}
        /> */}


      </div>
    </div>
  );
};

export default PageHeader;
