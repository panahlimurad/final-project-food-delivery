import axios from "axios";

export const instanceAxiosAdmin = axios.create({
  baseURL: "",
});

// instanceAxiosAdmin.interceptors.request.use(
//   async (config) => {
//     try {
//         const token = await localStorage.getItem("access_token");
//         config.headers.Authorization = `Bearer ${token}`;
//         console.log("token", token);
//     } catch (err) {}
//     return config;
//   },
//   (err) => {
//     return err;
//   }
// );

// instanceAxiosAdmin.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       // Oturum süresi doldu veya kimlik doğrulama hatası
//       const refreshToken = localStorage.getItem("refresh_token");

//       if (refreshToken) {
//         try {
//           const response = await axios.post("/api/auth/refresh", {
//             refresh_token: refreshToken,
//           });

//           const newAccessToken = response.data.access_token;

//           // Yeni erişim belirteci (token) ile isteği yeniden gönderin
//           if (newAccessToken) {
//             localStorage.setItem("access_token", newAccessToken);
//             const config = error.config;
//             config.headers.Authorization = `Bearer ${newAccessToken}`;
//             return axios(config);
//           }
//         } catch (refreshError) {
//           // Yenileme hatası
//           console.error("Yenileme hatası:", refreshError);
//           // İstek başarısız olur ve 401 hatası alınır
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// instanceAxiosAdmin.interceptors.request.use((configs)=>{
//     const userJSONData = localStorage.getItem("clientData")
//     const userData = JSON.parse(userJSONData)
//     token = userData?.user?.access_token
//     configs.headers.Authorization=`Bearer ${token}`
//     return configs;
// })
