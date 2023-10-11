import { instanceAxiosAdmin } from "../helper/instanceAxiosAdmin";

let token = null;

if (typeof window !== "undefined") {
const userJSONData = localStorage.getItem("userData")
const userData = JSON.parse(userJSONData)
token = userData?.user?.access_token

}



export const Register = async (endpoint, data)=>{
    try {
        const response = await instanceAxiosAdmin.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const Login = async (endpoint, data)=>{
    try {
        const response = await instanceAxiosAdmin.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const PostCategory = async (data)=>{
    try {
        const response = await instanceAxiosAdmin.post("/api/category", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const PostProduct = async (data)=>{
    try {
        const response = await instanceAxiosAdmin.post("/api/products", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const PostOffer = async (data)=>{
    try {
        const response = await instanceAxiosAdmin.post("/api/offer", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const PostRestaurants = async (data)=>{
    try {
        const response = await instanceAxiosAdmin.post("/api/restuarants", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const PostBasket = async (data)=>{
    try {
        const response = await instanceAxiosAdmin.post("/api/basket/add", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const GetRestaurants = async ()=>{
    try {
        const response = await instanceAxiosAdmin.get("/api/restuarants");
        return response.data;
    }catch(error){
        throw error
    }
}

export const GetProducts = async ()=>{
    try {
        const response = await instanceAxiosAdmin.get("/api/products");
        return response.data;
    }catch(error){
        throw error
    }
}

// DONT WORK YET
export const GetBasket = async (endpoint)=>{
    try {
        const response = await instanceAxiosAdmin.get(endpoint, {
            headers:{
                "Authorization":`Bearer +${token}`
            }
        });
        return response.data;
    }catch(error){
        throw error
    }
}