"use client"
import Link from 'next/link';
import style from './sidebar.module.css';
import Image from 'next/image'
import { BarState } from '../../context/context';

interface prop {
  page: string;
//   toggleBar: () => void;
//   bar: Boolean;
}

const SideBar = ({page}:prop) => {
    const { bar} = BarState();
    console.log(bar)
    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
        <div>
        <Link href="/" style={{textDecoration: "none"}}>
        <span  className={page === 'home' ? style.activeList : style.list}>Home</span>
        </Link>
        </div>
        <div>
        <Link href="/about_us" style={{textDecoration: "none"}}>
        <span  className={page === 'about' ? style.activeList : style.list}>About</span>
        </Link>
        </div>
        <div className={style.List}>
        <Link href="/service" style={{textDecoration: "none"}}>
        <span  className={page === 'services' ? style.activeList : style.list}>Services</span>
        </Link>
        </div>
        <div>
        <Link href="/products" style={{textDecoration: "none"}}>
        <span  className={page === 'products' ? style.activeList : style.list}>Products</span>
        </Link>
        </div>
        <div>
        <Link href="/contact_us" style={{textDecoration: "none"}}>
        <span  className={page === 'contact' ? style.activeList : style.list}>Contact Us</span>
        </Link>
        </div>

        <button className={style.cartBtn}>
        cart
        </button>
       </nav>
    )
}

export default SideBar;