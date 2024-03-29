import { instanceAxiosAdmin } from "../helper/instanceAxiosAdmin";
export const Register = async (endpoint, data) => {
  try {
    const response = await instanceAxiosAdmin.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const Login = async (endpoint, data) => {
  try {
    const response = await instanceAxiosAdmin.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PostCategory = async (data) => {
  try {
    const response = await instanceAxiosAdmin.post("/api/category", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PostProduct = async (data) => {
  try {
    const response = await instanceAxiosAdmin.post("/api/products", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PutUser = async (data) => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  try {
    const response = await instanceAxiosAdmin.put("/api/auth/user", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const PostOffer = async (data) => {
  try {
    const response = await instanceAxiosAdmin.post("/api/offer", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PostImg = async (data) => {
  try {
    const response = await instanceAxiosAdmin.post("/api/uploads", data, {
      headers: {
        "Content-Type": "multi-part",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PostRestaurants = async (data) => {
  try {
    const response = await instanceAxiosAdmin.post("/api/restuarants", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PutRestaurants = async (id,  updatedData) => {
  try {
    const response = await instanceAxiosAdmin.put(`/api/restuarants/${id}`,  updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PutProducts = async (productId, updatedData) => {
  try {
    const response = await instanceAxiosAdmin.put(`/api/products/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PutCategory = async (id, updatedData) => {
  try {
    const response = await instanceAxiosAdmin.put(`/api/category/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PutOffer = async (id, updatedData) => {
  try {
    const response = await instanceAxiosAdmin.put(`/api/offer/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const DeleteRestaurants = async (id) => {
  try {
    const response = await instanceAxiosAdmin.delete(`/api/restuarants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteProduct = async (id) => {
  try {
    const response = await instanceAxiosAdmin.delete(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteCategory = async (id) => {
  try {
    const response = await instanceAxiosAdmin.delete(`/api/category/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteOffer = async (id) => {
  try {
    const response = await instanceAxiosAdmin.delete(`/api/offer/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PostBasket = async (data) => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  try {
    const response = await instanceAxiosAdmin.post("/api/basket/add", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PostOrder = async (data) => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  try {
    const response = await instanceAxiosAdmin.post("/api/order/add", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const DeleteBasket = async (data) => {
//   const userJSONData = localStorage.getItem("clientData");
//   const userData = JSON.parse(userJSONData);
//   const token = userData?.user?.access_token;
  
//   try {
//     const response = await instanceAxiosAdmin.delete("/api/basket/delete", data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const DeleteAllBasket = async (data) => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  
  try {
    const response = await instanceAxiosAdmin.delete("/api/basket/clear", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const GetRestaurants = async () => {
  try {
    const response = await instanceAxiosAdmin.get("/api/restuarants");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetRestaurantsById = async (id) => {
  try {
    const response = await instanceAxiosAdmin.get(`/api/restuarants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetProducts = async () => {
  try {
    const response = await instanceAxiosAdmin.get("/api/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const GetCategory = async () => {
  try {
    const response = await instanceAxiosAdmin.get("/api/category");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetCategoryID = async (id) => {
  try {
    const response = await instanceAxiosAdmin.get(`/api/category/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetUser = async () => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  try {
    const response = await instanceAxiosAdmin.get("/api/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const GetOffer = async () => {
  try {
    const response = await instanceAxiosAdmin.get("/api/offer");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetOrder = async () => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  try {
    const response = await instanceAxiosAdmin.get("/api/order",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const GetOrderId = async (id) => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;
  try {
    const response = await instanceAxiosAdmin.get(`/api/order/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetBasket = async () => {
  const userJSONData = localStorage.getItem("clientData");
  const userData = JSON.parse(userJSONData);
  const token = userData?.user?.access_token;

  try {
    const response = await instanceAxiosAdmin.get("/api/basket", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}