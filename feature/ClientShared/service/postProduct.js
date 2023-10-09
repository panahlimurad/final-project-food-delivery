
import { instanceAxios } from "../helper/instanceAxios";

const data = {
  name: "Burger",
  description: "lorem,lorem",
  img_url: "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg",
  rest_id: "123",
  price: 15.5,
};

instanceAxios.post("../../../pages/api/products", data)
.then(response=>{
    console.log("new Product", response);
}).catch(error => {
    console.error('Error', error);
  });;
