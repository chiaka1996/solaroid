"use client"
import Link from 'next/link';
import style from './nav.module.css';
import Image from 'next/image'
import { BarState } from '../../context/context';

interface prop {
  page: string;
}

const navigation = ({page}:prop) => {
    const { bar, openBar, closeBar } = BarState();

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
                     <div>
                    <Link href="/Products" style={{textDecoration: "none"}}>
                    <span className={page === 'products' ? style.activeList : style.list}>Products</span>
                    </Link>
                    </div>
                     <div>
                     <Link href="/contact_us" style={{textDecoration: "none"}}>
                    <span className={page === 'contact' ? style.activeList : style.list}>Contact Us</span>
                    </Link>
                    </div>

                </div>

                <button className={style.cartBtn}>
                    cart
                </button>
                
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

export default navigation;