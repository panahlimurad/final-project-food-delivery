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

export const PutRestaurants = async (id) => {
  try {
    const response = await instanceAxiosAdmin.put(`/api/restuarants/${id}`);
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
export const PostBasket = async (data) => {
  try {
    const response = await instanceAxiosAdmin.post("/api/basket/add", data);
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
// DONT WORK YET
export const GetBasket = async (endpoint) => {
  try {
    const response = await instanceAxiosAdmin.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}