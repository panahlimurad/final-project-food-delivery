// import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loaders from '../feature/ClientShared/components/Loader/Loaders'
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (

        <Provider store={store}>
      <QueryClientProvider client={queryClient}>

      {loading && <Loaders />}
        <Component {...pageProps} />
        <ToastContainer/>
      </QueryClientProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
