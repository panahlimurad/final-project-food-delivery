
import Image from "next/image";
import { GetRestaurants } from "../../../adminShared/services/dataApi";
import CardRestaurant from "../CardRestaurant/CardRestaurant";
import { ROUTER } from "../../../../server/constant/router";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { setCategory } from "../../../../redux/features/productDetails/productSlice";

export default function CardRestaurantContainer({restaurantData}) {
  const restaurants=restaurantData?.result.data
  console.log("restaurants" , restaurants);

 
  // const dataArray = restaurants ? Object.values(restaurants) : [];
// console.log(dataArray);
  // const selectedCategory = useSelector(setCategory);
  const selectedCategory = useSelector((state) => state.category);

  console.log("selectedCategory", selectedCategory);


  const filteredRestaurants = selectedCategory
    ? restaurants?.filter(
        (restaurant) => {console.log("nnnnnnnnnnnnnnn",restaurant.name)}
      )
    : restaurants;

console.log("filter datas", filteredRestaurants);


  const { push } = useRouter();
  return (

      <div className="flex flex-wrap justify-center gap-7 mt-4"> 
        {restaurants?.map((restaurant,index) => (
          <button   onClick={() => push(ROUTER.RESTUARANTS_ID(restaurant.id))}>
             <CardRestaurant
          
          key={restaurant.name}
          name={restaurant.name}
          delivery_price={restaurant.delivery_price}
          category_id={restaurant.category_id }
          delivery_min={restaurant.delivery_min}
          img={restaurant.img_url}
          item_id={restaurant.id}
          cuisine={restaurant.cuisine}
          category={restaurant.category_id}
        />
          </button>
        
        ))} 
      </div> 
    
    
  );
}







