import style from './product.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
    return(
        <section className={style.productContainer}>
            <div className={style.topLine}></div>
            <div className={style.productHeader}>Products</div>

            <div className={style.productGrid}>
            <Link href="/products/panel" style={{textDecoration: "none"}}>
            <div className={style.gridItem}>
                <Image 
                src="/home_imgs/solar_panel.jpg"
                alt="solar panel"
                width={200}
                height={200}
                />

                <div className={style.productsName}>Solar Panels</div>
            </div>
            </Link>

            <Link href="/products/battery" style={{textDecoration: "none"}}>
            <div className={style.gridItem}>
                <Image 
                src="/home_imgs/battery.png"
                alt="solar panel"
                width={200}
                height={200}
                />

                <div className={style.productsName}>Batteries</div>
            </div>
            </Link>

            <Link href="/products/inverter" style={{textDecoration: "none"}}>
            <div className={style.gridItem}>
                <Image 
                src="/home_imgs/inverters_img.png"
                alt="solar panel"
                width={200}
                height={200}
                />
                <div className={style.productsName}>Inverters</div>
            </div>
           </Link>
           
            </div>
        </section>
    )
}

export default Products;