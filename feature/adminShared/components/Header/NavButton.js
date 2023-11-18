import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "next-i18next";



const NavButton = ({openAddModal}) => {
  const { t, i18n } = useTranslation("common");
  
  return (
  <>
      <button  onClick={openAddModal}  className='rounded-full  mr-2 text-center h-8  flex cursor-pointer items-center justify-between font-bold text-sm text-white bg-[#C035A2] hover:bg-[#C74FEB] transition-all duration-300 ease-in-out' style={{  boxShadow: '0px 4px 4px #27ae6033'  }}>
      <AddIcon
        sx={{ fontSize: 23 }}
        style={{ marginRight: "5px"}}
        edge="start"
        aria-label="logo"
      /> 
      <span className=' mr-2 text-[10px] tracking-wide font-bold cursor-pointer  leading-5 hidden md:block'>{t("common:ADDPRODUCT")}</span>
      </button>
    </>
  );
};

export default NavButton;
