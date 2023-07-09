"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import "./styles/global.css"
import style from './styles/home.module.css'
import { Footer, Banner, Services, Products, About} from '@/components/index'

const Home = () => {
  const [bannerImgCount, setBannerImgCount] = useState<number>(0);

  const increaseBannerCount = () => {
    bannerImgCount === 1 ? setBannerImgCount(0) : setBannerImgCount(bannerImgCount + 1)
  }

  setTimeout(() => increaseBannerCount(), 7000);
  return (
    <div> 
      {/* <Navigation page="home" /> */}
       <div className={bannerImgCount === 0 ? style.banner : style.banner2}>
      
      {/* first banner title */}
       <div className={bannerImgCount === 0 ? style.titleContainer : style.titleContainerDisappear}>
        <div className={style.mainTitle}>SOLAR ENERGY SOLUTION</div>
  
        <div className={style.titleDetails}>
          POWERING HOMES <br/>
          WITH SOLAR ENERGY
        </div> 
        {/* <div className={bannerImgCount === 1 ? style.titleDetails : style.titleDisappear}>
          ENERGIZE SOCIETY WITH <br/>
          RELIABLE ENERGY
        </div> */}
  
        <button className={style.qouteBtn}>
          Get a Qoute
        </button>
        </div>

        {/* second banner title */}
        <div className={bannerImgCount > 0 ? style.titleContainer : style.titleContainerDisappear2}>
        <div className={style.mainTitle}>SOLAR ENERGY SOLUTION</div>
  
        <div className={style.titleDetails}>
          ENERGIZE SOCIETY WITH <br/> 
          RELIABLE ENERGY
        </div> 
        <button className={style.qouteBtn}>
          Get a Qoute
        </button>
        </div>
        </div> 
    </div>
  )
}

export default Home;
