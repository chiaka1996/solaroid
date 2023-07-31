import { Banner, Navigation, SideBar } from "@/components/index";
import Image from "next/image";
import style from "../product.module.css"

const Panel = () => {
    return(
        <main>
        <Navigation page="products" />  
        <SideBar page="products" /> 
        <Banner /> 
        <section className={style.productContainer}>
            <div className={style.topLine}></div>
            <div className={style.productHeader}>Solar Panels</div>

            <div className={style.productGrid}>
            <div className={style.gridItem}>
                <div className={style.prodImage}>
                <Image 
                src="/home_imgs/solar_panel.jpg"
                alt="solar panel"
               fill
                />
                </div>

                <div className={style.productsName}>4&times;4 Panel</div>
                <div className={style.cost}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div className={style.price}>3000</div>
                </div>
                <button className={style.addToCartBtn}>Add to Cart</button>
            </div>

            <div className={style.gridItem}>
            <div className={style.prodImage}>
            <Image 
            src="/home_imgs/solar_panel.jpg"
            alt="solar panel"
            fill
                />
            </div>

                <div className={style.productsName}>4&times;4 Panel</div>
                <div className={style.cost}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div className={style.price}>3000</div>
                </div>
                <button className={style.addToCartBtn}>Add to Cart</button>
            </div>
            </div>
        </section>
        </main>
    )
}

export default Panel;