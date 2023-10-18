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
import { useRouter } from "next/router";
import { useState } from "react";
import Select from "../Select/index";
import AddModal from '../AddModal/AddModal'
import { FORM } from "../../../adminFolders/utils/form";
// export const getStaticProps = async ({locale})=>({
//   props:{
//       ...(await serverSideTranslations(locale, ["common"]))
//   }
// })

const PageHeader = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathName = router.pathname;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const contentMap = {
    "/admin/products": t("common:Products"),
    "/admin/restaurants": t("common:Restaurants"),
    "/admin/category": t("common:Category"),
    "/admin/offers": t("common:Offers"),
    "/admin/orders": t("common:Orders"),
    "/admin/order-history": t("common:History"),
  };

  const headerText = contentMap[pathName]

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  return (
    <div className="bg-[#27283C] sm:h-[73px] flex sm:items-center justify-between gap-2 sm:flex-row flex-col h-auto  py-4 sm:px-10 px-3  sm:rounded-xl rounded-[4px] mb-8">
      <div className="page-title capitalize text-[#C7C7C7] text-xl font-medium ">
        {headerText}
      </div>

      <div className="flex gap-6 items-center">
        {pathName === "/admin/products" || pathName === "/admin/restaurants" ? (
          <Select />
        ) : null}
        {pathName === "/admin/restaurants" ||
          pathName === "/admin/category" ||
          pathName === "/admin/offers" ? (
            <button
              onClick={openAddModal}
              className=" h-[35px] sm:w-auto w-full  sm:capitalize uppercase cursor-pointer text-center px-5 flex items-center justify-center font-bold text-sm text-white bg-[#C035A2] hover:bg-[#C74FEB]  transition-all duration-300 ease-in-out sm:rounded-[14px] rounded-md shadow">
              <AddIcon
                sx={{ fontSize: 25 }}
                style={{ marginRight: "5px" }}
                edge="start"
                aria-label="logo"
              />
              <span className="ml-1 md:block">{`Add ${headerText}`}</span>
            </button>
          ):null}
         {pathName === "/admin/restaurants" ? (
          <AddModal
            form={FORM.RESTAURANT}
            isAddModalOpen={isAddModalOpen}
            openAddModal={openAddModal}
            closeAddModal={closeAddModal}
          />
        ) : pathName === "/admin/category" ? (
          <AddModal
            form={FORM.CATEGORY}
            isAddModalOpen={isAddModalOpen}
            openAddModal={openAddModal}
            closeAddModal={closeAddModal}
          />
        ) :pathName==="/admin/offers"?(
          <AddModal
            form={FORM.OFFER}
            isAddModalOpen={isAddModalOpen}
            openAddModal={openAddModal}
            closeAddModal={closeAddModal}
          />
        ):null}
      </div>
    </div>
  );
};

export default PageHeader;
