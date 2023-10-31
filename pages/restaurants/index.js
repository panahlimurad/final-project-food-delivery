import { useRouter } from "next/router";
import CardRestaurantContainer from "../../feature/ClientShared/components/CardRestaurantContainer/CardRestaurantContainer";
import NavbarRestaurant from "../../feature/ClientShared/components/RestaurantNavbar/NavbarRestaurant";
import { GetRestaurants } from "../../feature/adminShared/services/dataApi";
import LayoutClient from '../../layoutClient/LayoutClient'

import {serverSideTranslations} from "next-i18next/serverSideTranslations"



// export const getStaticProps = async ({locale})=>({
//   props:{
//       ...(await serverSideTranslations(locale, ["common"]))
//   }
// })
import React from "react";
import { ROUTER } from "../../server/constant/router";




const Restaurants = ({restData}) => {
  console.log("res", restData);
  const { push } = useRouter();
  return (
    <>
    <LayoutClient>
    <div
      className="flex gap-8">
      <NavbarRestaurant />
      <CardRestaurantContainer
       restaurantData={restData} />
    </div>
    </LayoutClient>
    </>
    
  );
};

export default Restaurants;





export async function getServerSideProps() {
  try {
    const data = await GetRestaurants();
    return {
      props: {
        restData:data,
      },
    };
  } catch (err) {
    return {
      props: {
        hasError: true,
      },
    };
  }
}

