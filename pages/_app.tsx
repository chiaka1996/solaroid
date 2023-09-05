// import 'bootstrap/dist/css/bootstrap.css'
// import styles from '../Styles/Home.module.css'
// import { Satoshi } from "../utilis/fonts";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
// import '../styles/loading.css'
// import 'animate.css';
import {State} from "../context/context"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <State>
    <div>
  <Component {...pageProps} />
  </div>
  </State>
  )
}

export default MyApp;
