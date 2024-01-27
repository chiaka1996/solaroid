import cs from "./cart.module.css";
import {Navigation, SideBar, Cart } from "../../../components/index";

const CartPage = () => {
    return (
        <main>
        <Navigation page="products" />  
        <SideBar page="products" /> 

        <div className={cs.cartNav}>
        <div className={cs.cart}>
          <div className={cs.active}>Shopping cart</div>
        </div>
        <div className={cs.details}>
          <div className={cs.list}>Shipping details</div>
        </div>
        {/* <div className={cs.payment}>
          <div className={cs.list}>Payment details</div>
        </div> */}
      </div>
      <Cart />
        </main>
    )
}

export default CartPage;