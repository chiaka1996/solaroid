"use client"
import style from './nav.module.css';
import Image from 'next/image'

interface prop {
  page: string;
  toggleBar: () => void;
}

const navigation = ({page, toggleBar}:prop) => {
    return(
        <nav className={style.navContainer}>
            <div className={style.brandName}>Solaroid</div>
           
                <div className={style.listContainer} >
                    <div>
                    <span  className={page === 'home' ? style.activeList : style.list}>Home</span>
                    </div>
                     <div>
                    <span className={page === 'about' ? style.activeList : style.list}>About</span>
                    </div>
                     <div>
                    <span className={page === 'services' ? style.activeList : style.list}>Services</span>
                    </div>
                     <div>
                    <span className={page === 'products' ? style.activeList : style.list}>Products</span>
                    </div>
                     <div>
                    <span className={page === 'contact' ? style.activeList : style.list}>Contact Us</span>
                    </div>

                </div>

                <button className={style.cartBtn}>
                    cart
                </button>
                
                <div className={style.hamburger}>
                <Image
                src="/icons/hamburger.png"
                alt="menu bar"
                width={19}
                height={14}
                onClick={() => toggleBar()}
                />
                </div>
        </nav>
    )
}

export default navigation;