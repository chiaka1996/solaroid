import style from './product.module.css';
import Image from 'next/image';

const Products = () => {
    return(
        <section className={style.productContainer}>
            <div className={style.topLine}></div>
            <div className={style.productHeader}>Products</div>

            <div className={style.productGrid}>
            <div className={style.gridItem}>
                <Image 
                src="/home_imgs/solar_panel.jpg"
                alt="solar panel"
                width={200}
                height={200}
                />

                <div className={style.productsName}>Solar Panels</div>
            </div>

            <div className={style.gridItem}>
                <Image 
                src="/home_imgs/battery.png"
                alt="solar panel"
                width={200}
                height={200}
                />

                <div className={style.productsName}>Batteries</div>
            </div>

            <div className={style.gridItem}>
                <Image 
                src="/home_imgs/inverters_img.png"
                alt="solar panel"
                width={200}
                height={200}
                />

                <div className={style.productsName}>Inverters</div>
            </div>
           
           
            </div>
        </section>
    )
}

export default Products;