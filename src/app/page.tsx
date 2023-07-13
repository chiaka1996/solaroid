"use client"
import { useState, useEffect } from 'react'
import { ClashDisplay } from '@/fonts'
import Head from 'next/head'
import Image from 'next/image'
import "./styles/global.css"
import style from './styles/home.module.css'
import { Footer, Services, Products, About} from '@/components/index'

const Home = () => {
  const [bannerImgCount, setBannerImgCount] = useState<number>(0);
  const bannerImg = ['/home_imgs/banner2.webp', "/home_imgs/bannerImg.jpg"]

  const increaseBannerCount = () => {
    bannerImgCount === 1 ? setBannerImgCount(0) : setBannerImgCount(bannerImgCount + 1)
  }

  setTimeout(() => increaseBannerCount(), 7000);

  return (
    <div className={style.homeContainer}> 
    <div className={style.bannerContainer}>
    <div className={style.bannerImg}>
      <Image
      src= {bannerImg[bannerImgCount]}
      fill
      alt="banner image"
      />
    </div>
  <div className={bannerImgCount === 0 ? style.titleContainer : style.titleContainerDisappear}>
  <div className={style.mainTitle}>SOLAR ENERGY SOLUTION</div>
  <div className={style.titleDetails}>
    POWERING HOMES WITH SOLAR ENERGY
  </div>   
  <button className={style.qouteBtn}>
    Get a Qoute
  </button>
  </div> 

  <div className={bannerImgCount > 0 ? style.titleContainer : style.titleContainerDisappear2}>
        <div className={style.mainTitle}>SOLAR ENERGY SOLUTION</div>
  
        <div className={style.titleDetails}>
          ENERGIZE SOCIETY WITH RELIABLE ENERGY
        </div> 
        <button className={style.qouteBtn}>
          Get a Qoute
        </button>
        </div>
    </div>

    <About />
    <Services />
    <Products />
    </div>
  )
}

export default Home;
