"use client"
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import "./styles/global.css"
import style from './styles/home.module.css'
import { Services, Products, About, Benefits} from '@/components/index'

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
    <div className={style.achievementCount}>
      <div>
      <div className={style.years}>5</div>
      <div className={style.year_details}>Years Of Experience</div>
      </div>

      <div>
      <div className={style.years}>53</div>
      <div className={style.year_details}>Projects Completed</div>
      </div>

      <div>
      <div className={style.years}>120</div>
      <div className={style.year_details}>Technical Supports</div>
      </div>

      <div>
      <div className={style.years}>173</div>
      <div className={style.year_details}>Satisfied Customers</div>
      </div>

    </div>
    <Benefits />
    </div>

  )
}

export default Home;
