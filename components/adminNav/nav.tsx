import style from './nav.module.css';

interface prop {
    page: string;
  }

const nav = ({page}: prop) => {
    return(
        <div className={style.navContainer}>
            <div className={style.adminHeader}>Solaroid</div>

            <div className={page === "showproduct" ? style.activeList : style.list}>Show Products</div>
            <div className={page === "addproduct" ? style.activeList :style.list}>Add Products</div>
            <div className={page === "messages" ? style.activeList :style.list}>Messages</div>

        </div>
    )
}

export default nav;