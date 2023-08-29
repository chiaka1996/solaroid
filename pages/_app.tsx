// import 'bootstrap/dist/css/bootstrap.css'
// import styles from '../Styles/Home.module.css'
import { Satoshi } from "../utilis/fonts";
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "../components/index";
// import '../styles/loading.css'
// import 'animate.css';
import {State} from "../context/context"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <State>
    <div>
  <Component {...pageProps} />
  {/* <Footer /> */}
  </div>
  </State>
  )
}

export default MyApp;
