// import 'bootstrap/dist/css/bootstrap.css'
// import styles from '../Styles/Home.module.css'
// import { Satoshi } from "../utilis/fonts";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
// import '../styles/loading.css'
// import 'animate.css';
import {State} from "../context/context"
import type { AppProps } from 'next/app'

function LoadingNewPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url:any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url:any) =>  setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    loading && (
      <div className={loading ? "pageLoader" : "pageLoaderInactive"}></div>
    )
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <State>
    <div>
    <LoadingNewPage />
    <Component {...pageProps} />
  </div>
  </State>
  )
}

export default MyApp;
