import style from './sidebar.module.css';
import Image from 'next/image'

interface prop {
  page: string;
}

const SideBar = ({page}:prop) => {
    return(
       <nav>
        <div className={style.headerFlex}>
            <div className={style.brandName}>Solaroid</div>
            <div className={style.closeMenu}>
                <Image
                src="/icons/cancel.png"
                alt="cancel menu"
                width="14"
                height="10"
                />
            </div>
        </div>

        <div className={style.activeList}>Home</div>
        <div className={style.List}>About</div>
        <div className={style.List}>Service</div>
        <div className={style.List}>Products</div>
        <div className={style.List}>Contact us</div>
       </nav>
    )
}

export default SideBar;