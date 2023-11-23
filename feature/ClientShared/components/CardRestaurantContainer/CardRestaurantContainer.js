import { GetRestaurants } from "../../../adminShared/services/dataApi";
import CardRestaurant from "../CardRestaurant/CardRestaurant";
import { ROUTER } from "../../../../server/constant/router";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

export default function CardRestaurantContainer() {
  const { data, isLoading, isError, error } = useQuery(
    "restaurant",
    GetRestaurants
  );

  // console.log("datass", data);

  const dataArray = data ? Object.values(data) : [];

  const selectedReataurants = useSelector((state) => state.category);
  const filteredRestaurants = selectedReataurants
    ? dataArray[1]?.data?.filter(
        (restaurant) => restaurant.category_id === selectedReataurants
      )
    : dataArray[1]?.data;
  // console.log("filteredTestaurantss", filteredRestaurants);
  const { push } = useRouter();
  return (
    <div className="flex flex-wrap justify-center gap-7 mt-20 md:mt-4">
      {filteredRestaurants?.map((restaurant, index) => (
        <motion.div
          key={restaurant.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card"
        >
          <button onClick={() => push(ROUTER.RESTUARANTS_ID(restaurant.id))}  >
            <CardRestaurant key={restaurant.name} item_id={restaurant.id} />
          </button>
        </motion.div>
      ))}
    </div>
  );
}
