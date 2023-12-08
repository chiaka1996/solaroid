import cs from './cart.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { BarState } from '../../context/context';
import { useRouter } from 'next/router'

const CartComponent = () => {
  const router = useRouter();
    const {cartItems, deleteFromCart, increaseItemQuantity, decreaseItemQuantity} = BarState();

    let totalPrice: number = 0;
    for (let t = 0; t < cartItems.length; t++) {
      totalPrice = totalPrice + parseInt(cartItems[t].productPrice);
    }

    return(
        <div>
             <section className={cs.cartItems}>
              {cartItems.map((item, i) => <div className={cs.item} key={i}>
                <div className={cs.cartImgContainer}>
                  <Image src={item.productImage} alt="cart list" layout="fill" />
                </div>
                <div className={cs.itemDetails}>
                  <div className={cs.itemHeader}>
                    <header>{item.productName}</header>
                    <div className={cs.cancelContainer}>
                      <Image
                        src="/icons/cancel.png"
                        alt="cancel item"
                        width={12}
                        height={12}
                        onClick={() => deleteFromCart(i)}
                      />
                    </div>
                  </div>

                  <div className={cs.itemCount}>
                    <div className={cs.quantity}>
                      <span
                      onClick={() => decreaseItemQuantity(i)}
                      >
                      - 
                      </span>{' '}
                        {item.productQuantity}
                      <span  
                      onClick={() => increaseItemQuantity(i)}> 
                      +
                      </span>
                    </div>
                    <div className={cs.price}>
                      <div className={cs.nairaImg}>
                    <Image 
                      // width={10} 
                      // height={10} 
                      layout='fill'
                      src="https://img.icons8.com/material-outlined/26/naira.png" 
                      alt="naira"
                      />
                      </div>
                      <div>{Math.round(parseInt(item.productPrice) * 10) / 10}</div>
                    </div>
                  </div>
                </div>
              </div> )}
              
            
          </section>
          {cartItems.length > 0 ? <section className={cs.checkout}>
            {/* this div only shows on desktop */}
          
              <div style={{ width: '35%' }} className={cs.proceedDesktop}>
                <Link
                  href={'/products/shipping_details'}
                  style={{ textDecoration: 'none' }}
                >
                  <button>Proceed to checkout</button>
                </Link>
                <div 
                className={cs.continue}
                onClick={() => router.back()}
                >
                <span>Continue Shopping</span>
                </div>
              </div>
           

            <div className={cs.checkoutDetailsContainer}>
              <div className={cs.checkoutDetails}>
                <div>Products in cart :</div>{' '}
                <span> {cartItems.length} item{cartItems.length > 1 ? "s" : ''}</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Shipping :</div> 
                <div className={cs.totalPrice}>
                <div className={cs.nairaImg}>
                    <Image 
                      layout='fill'
                      src="https://img.icons8.com/material-outlined/26/naira.png" 
                      alt="naira"
                      />
                      </div>
                      <span>5000</span>
                      </div>   
              </div>

              <div className={cs.checkoutDetails}>
                <div>Total :</div>
                <div className={cs.totalPrice}>
                <div className={cs.nairaImg}>
                    <Image 
                      layout='fill'
                      src="https://img.icons8.com/material-outlined/26/naira.png" 
                      alt="naira"
                      />
                      </div>
                <span>{totalPrice + 5000}</span>
                </div>
              </div>

            </div>
            {/* this div only shows on mobile */}
            {/* {page == 'cart' ? ( */}
              <div className={cs.proceedMobile}>
                <Link
                  href={'/products/shipping_details'}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={cs.btnHouse}>
                    <button className={cs.mobileBtn}>
                      Proceed to checkout
                    </button>
                  </div>
                </Link>
                  <div 
                  className={cs.continue}
                  onClick={() => router.back()}
                  >
                    <span>Continue Shopping</span>
                  </div>
                
              </div>
            {/* ) : (
              ''
            )} */}
          </section> : ''}
        </div>
    )
}

export default CartComponent;