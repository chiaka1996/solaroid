import {useState} from 'react'
import { useRouter } from 'next/router'
import { Dropdown } from "antd";
import Link from 'next/link';
import style from './nav.module.css';
import Image from 'next/image'
import { BarState } from '../../context/context';

interface prop {
  page: string;
}

const Navigation = ({page}:prop) => {
    const { bar, openBar, closeBar, cartItems } = BarState();
    const router = useRouter();

    const items = [
        {
          label: (<div onClick={() => router.push("/products/battery")}>Batteries</div>),  
          key: "0",
        },
        {
            label: <div onClick={() => router.push("/products/panel")}>Panels</div>,
            key: "1",
          },
          {
            label: <div onClick={() => router.push("/products/inverter")}>Inverters</div>,
            key: "2",
          },
      ];


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
                    // onClick={togglePorduct}
                    >
                    <Dropdown menu={{ items }} trigger={["click"]}>
                     <span>Products</span>
                    </Dropdown> 
                    </span>
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
                <div>
               <Image
                width={50}
                height={50}
                src="https://img.icons8.com/ios/50/shopping-cart--v1.png" 
                alt="shopping-cart--v1"
                />
                {cartItems.length > 0 ?  <div className={style.cartNotification}>{cartItems.length}</div>:''}
                </div>
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

                {
                    !bar ? <div className={style.hamburger}>
                    <Image
                    src="/icons/hamburger.png"
                    alt="menu bar"
                    width={20}
                    height={20}
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
                
        </div>
    )
}

export default Navigation;