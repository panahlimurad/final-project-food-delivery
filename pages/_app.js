// import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loaders from "../feature/ClientShared/components/Loader/Loaders";
import axios from "axios";


const queryClient = new QueryClient();


axios.interceptors.request.use(
  function (config) {
    const userJSONData = localStorage.getItem("clientData");
    const userData = JSON.parse(userJSONData);
    const token = userData?.user?.access_token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      const userJSONData = localStorage.getItem("clientData");
      const userData = JSON.parse(userJSONData);
      const refresh_token = userData?.user?.refresh_token;

      if (refresh_token) {
        return axios
          .post("/api/auth/refresh", { refresh_token: refresh_token })
          .then((response) => {
            console.log(response);
            localStorage.setItem(response?.data.access_token);
            localStorage.setItem(response?.data.refresh_token);
            error.config.headers["Authorization"] =
              "Bearer " + response?.data.access_token;
            return axios.request(error.config);
          })
          .catch((err) => {
            console.log(err);
            window.location.href = "/login";
            localStorage.removeItem("clientData");
            return Promise.reject();
          });
      }
    }
  }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {loading && <Loaders />}
        <Component {...pageProps} />
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
