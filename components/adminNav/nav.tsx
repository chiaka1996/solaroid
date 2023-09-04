import Link from 'next/link';
import style from './nav.module.css';

interface prop {
    page: string;
  }

const nav = ({page}: prop) => {
    return(
        <div className={style.navContainer}>
            <div className={style.adminHeader}>Solaroid</div>
            <Link href="/admindashboard/showproducts" style={{textDecoration: "none"}}>
            <div className={page === "showproduct" ? style.activeList : style.list}>
            Show Products
            </div>
            </Link>
            <Link href="/admindashboard/addproducts" style={{textDecoration: "none"}}>
            <div className={page === "addproduct" ? style.activeList :style.list}>
            Add Products
            </div>
            </Link>
            <Link href="/admindashboard/messages" style={{textDecoration: "none"}}>
            <div className={page === "messages" ? style.activeList :style.list}>
            Messages
            </div>
            </Link>

        </div>
    )
}

export default nav;