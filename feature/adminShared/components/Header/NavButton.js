import React from "react";
import AddIcon from '@mui/icons-material/Add';

import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next";


export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})



const NavButton = ({openAddModal}) => {
  const { t, i18n } = useTranslation();
  
  return (
  <>
      <button  onClick={openAddModal}  className='rounded-full  mr-2 text-center h-10 px-5 flex cursor-pointer items-center justify-between font-bold text-sm text-white bg-[#C035A2] hover:bg-[#C74FEB] transition-all duration-300 ease-in-out' style={{  boxShadow: '0px 4px 4px #27ae6033'  }}>
      <AddIcon
        sx={{ fontSize: 25 }}
        style={{ marginRight: "5px"}}
        edge="start"
        aria-label="logo"
      />
      <span className='ml-1 hidden md:block'>{t("common:ADDPRODUCT")}</span>
      </button>
    </>
  );
};

export default NavButton;
