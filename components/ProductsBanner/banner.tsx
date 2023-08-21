import Image from "next/image";
import style from "./banner.module.css";

const Banner = () => {
    return(
        <section className={style.bannerContainer}>
        <div className={style.bannerImg}>
        <Image
        src="/service_img/charge_controller.jpg"
        layout="fill"
        alt="banner image"
        />
        </div>
        <div className={style.bannerTextContainer}>
        <div className={style.bannerTextHeader}>Products</div>
        <div className={style.bannerSubText}>
        We sell Quality solar Products
        with 6months guarantee
        </div>
        </div>
        </section>
    )
}

export default Banner;