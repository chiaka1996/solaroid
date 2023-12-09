"use client"
import { Dropdown } from "antd";
import { useRouter } from 'next/router'
import Link from 'next/link';
import style from './sidebar.module.css';
import Image from 'next/image'
import { BarState } from '../../context/context';

interface prop {
  page: string;
}

const SideBar = ({page}:prop) => {
  const router = useRouter();
    const { bar, closeBar} = BarState();

    const onClickDropDownItem = (url:string) => {
      router.push(url)
      closeBar();
    }

    const items = [
      {
        label: (<div onClick={() => onClickDropDownItem("/products/battery")}>Batteries</div>),  
        key: "0",
      },
      {
          label: <div onClick={() => onClickDropDownItem("/products/panel")}>Panels</div>,
          key: "1",
        },
        {
          label: <div onClick={() => onClickDropDownItem("/products/inverter")}>Inverters</div>,
          key: "2",
        },
    ];

    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
         <div onClick={()=>closeBar()}>
        <Link href="/" style={{textDecoration: "none"}}>
        <span  className={page === 'home' ? style.activeList : style.list}>Home</span>
        </Link>
        </div>
        <div onClick={()=>closeBar()}>
        <Link href="/about_us" style={{textDecoration: "none"}}>
        <span  className={page === 'about' ? style.activeList : style.list}>About</span>
        </Link>
        </div> 
        <div onClick={()=>closeBar()}>
        <Link href="/service" style={{textDecoration: "none"}}>
        <span  className={page === 'services' ? style.activeList : style.list}>Services</span>
        </Link>
        </div>
        <div>
        <span  className={page === 'products' ? style.activeList : style.list}>
        <Dropdown menu={{ items }} trigger={["click"]}>
        <span>Products</span>
      </Dropdown> 
        </span>
        </div>
        <div onClick={()=>closeBar()}>
        <Link href="/contact_us" style={{textDecoration: "none"}}>
        <span  className={page === 'contact' ? style.activeList : style.list}>Contact Us</span>
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

        <button className={style.cartBtn} onClick={()=>closeBar()}>
        cart
        </button>
       </nav>
    )
}

export default SideBar;