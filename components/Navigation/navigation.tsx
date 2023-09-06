import {useState} from 'react'
import Link from 'next/link';
import style from './nav.module.css';
import Image from 'next/image'
import { BarState } from '../../context/context';

interface prop {
  page: string;
}

const Navigation = ({page}:prop) => {
    const { bar, openBar, closeBar } = BarState();
    const [displayProduct, setDisplayProduct] = useState<boolean>(false)

    const togglePorduct = () => {
        setDisplayProduct((prev) => !prev);
    }

    return(
        <div className={style.navContainer}>
            <div className={style.brandName}>Solaroid</div>
           
                <div className={style.listContainer} >
                    <div>
                    <Link href="/" style={{textDecoration: "none"}}>
                    <span  className={page === 'home' ? style.activeList : style.list}>Home</span>
                    </Link>
                    </div>
                     <div>
                     <Link href="/about_us" style={{textDecoration: "none"}}>
                    <span className={page === 'about' ? style.activeList : style.list}>About</span>
                    </Link>
                    </div>
                     <div>
                    <Link href="/service" style={{textDecoration: "none"}}>
                    <span className={page === 'services' ? style.activeList : style.list}>Services</span>
                    </Link>
                    </div>
                     <div className={style.productList}>
                    <span 
                    className={page === 'products' ? style.activeList : style.listName}
                    onClick={togglePorduct}
                    >
                    Products
                    </span>
                    <div className={displayProduct ? style.dropdownContent : style.hideContent}>
                    <Link href="/products/battery" style={{textDecoration: "none"}}>
                    <div>Batteries</div>
                    </Link>

                    <Link href="/products/panel" style={{textDecoration: "none"}}>
                    <div>Panels</div>
                    </Link>

                    <Link href="/products/inverter" style={{textDecoration: "none"}}>
                    <div>Inverters</div>
                    </Link>
                    </div>
                    </div>
                     <div>
                     <Link href="/contact_us" style={{textDecoration: "none"}}>
                    <span className={page === 'contact' ? style.activeList : style.list}>Contact Us</span>
                    </Link>
                    </div>

                </div>

               <div className={style.cartDiv}>
                <div  className={style.cartImage}>
                <Link href="/products/cart" style={{textDecoration: "none"}}>
               <Image
                width={50}
                height={50}
                src="https://img.icons8.com/ios/50/shopping-cart--v1.png" 
                alt="shopping-cart--v1"
                />
                </Link>
                </div>

                <div className={style.navPhone}>
                <Image 
                width={24}
                height={24} 
                src="https://img.icons8.com/ios/24/ff4500/phone--v1.png" 
                alt="phone--v1"
                />    
               <span> +2348084052359</span>
                </div>
               </div>

               
                
                
                {
                    !bar ? <div className={style.hamburger}>
                    <Image
                    src="/icons/hamburger.png"
                    alt="menu bar"
                    width={19}
                    height={14}
                    onClick={openBar}
                    />
                    </div> : 
                    <div className={style.hamburger}>
                    <Image
                   src="https://img.icons8.com/material-outlined/24/delete-sign.png"
                    alt="menu bar"
                    width={24}
                    height={24}
                    onClick={closeBar}
                    />
                </div>
                }
                
        </div>
    )
}

export default Navigation;