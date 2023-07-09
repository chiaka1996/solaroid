"use client"
import style from './sidebar.module.css';
import Image from 'next/image'

interface prop {
  page: string;
  toggleBar: () => void;
  bar: Boolean;
}

const SideBar = ({page, toggleBar, bar}:prop) => {
    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
        <div className={style.headerFlex}>
            <div className={style.brandName}>Solaroid</div>
            <div className={style.closeMenu}>
                <Image
                src="/icons/cancel.png"
                alt="cancel menu"
                width={20}
                height={18}
                onClick={() => toggleBar()}
                />
            </div>
        </div>

        <div>
        <span  className={page === 'home' ? style.activeList : style.list}>Home</span>
        </div>
        <div>
        <span  className={page === 'about' ? style.activeList : style.list}>About</span>
        </div>
        <div className={style.List}>
        <span  className={page === 'services' ? style.activeList : style.list}>Services</span>
        </div>
        <div>
        <span  className={page === 'products' ? style.activeList : style.list}>Products</span>
        </div>
        <div>
        <span  className={page === 'contact' ? style.activeList : style.list}>Contact Us</span>
        </div>

        <button className={style.cartBtn}>
        cart
        </button>
       </nav>
    )
}

export default SideBar;