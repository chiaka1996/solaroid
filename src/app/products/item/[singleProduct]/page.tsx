"use client"
import { Navigation, SideBar } from "@/components/index";
import { useState } from "react";
import Image from "next/image";
import style from "../item.module.css"
import Link from "next/link";

const SingleProduct = () => {
    const [status, setStatus] = useState<boolean>(false);
    const [listing, setListing] = useState<boolean>(false);

    return(
        <main>
        <Navigation page="products" />
        <SideBar page="products" />
        <section className={style.itemContainer}>
            <div className={style.imgContainer}>
                <div className={style.imgDiv}>
                <Image
                src="/home_imgs/battery.png"
                fill
                alt="product img"
                />
                </div>
            </div>

            <div className={style.prodDescriptionContainer}>
                <div className={style.prodHeader}>Solar Panel 300watts Battery</div>
                <div className={style.stars}>
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                </div>

                <div className={style.cost}>
                <Image 
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-outlined/24/naira.png" 
                alt="naira"
                />
                <div className={style.price}>3000</div>
                </div>

                <div className={style.brand}>
                    Brand: <span>Biggy battery</span>
                </div>
                <div className={style.availability}>
                Availability: <span>5 in stock</span>
                </div>

                <div className={style.briefDescription}>
                100% cotton double printed dress. 
                Black and white striped top and orange high waisted skater skirt bottom. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, 
                earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                </div>

                <div className={style.quantity}>
                Quantity: 
                <div className={style.quantityCount}>
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                </div>

                <div className={style.addToCartContainer}>
                <button className={style.addToCartBtn}>ADD TO CART</button>
                <button className={style.buyNowBtn}>BUY NOW</button>
                </div>
            </div>
        </section>

        <section className={style.descriptionContainer}>
        <div className={style.descriptionHeader}>Description</div>
        <div className={style.mainDescription}>
        100% cotton double printed dress. 
        Black and white striped top and orange high waisted skater skirt bottom. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, 
        earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
        </div>

        <div className={style.productDetails}></div>
        </section>

        <section className={style.descriptionContainer}>
        <div className={style.descriptionHeader}>Featured Products</div>

        <div className={style.productGrid}>
            <div className={style.gridItem}>
                <div className={style.prodImage}>
                <Image 
                src="/home_imgs/battery.png"
                alt="battery"
               fill
                />
                </div>

                <div className={style.productsName}>solte battery</div>
                <div className={style.featuredCost}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div className={style.featuredPrice}>3000</div>
                </div>
                <button className={style.CartBtn}>Add to Cart</button>
            </div>

            <div className={style.gridItem}>
            <div className={style.prodImage}>
            <Image 
            src="/home_imgs/battery.png"
            alt="solar panel"
            fill
                />
            </div>

                <div className={style.productsName}>solte battery</div>
                <div className={style.featuredCost}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div className={style.featuredPrice}>3000</div>
                </div>
                <button className={style.CartBtn}>Add to Cart</button>
            </div>
            </div>
        </section>

      
        </main>
    )
}

export default SingleProduct;