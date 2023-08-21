import cs from './cart.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CartComponent = () => {
    return(
        <div>
             <section className={cs.cartItems}>
              <div className={cs.item}>
                <div className={cs.cartImgContainer}>
                  <Image src='/home_imgs/battery.png' alt="cart list" layout="fill" />
                </div>
                <div className={cs.itemDetails}>
                  <div className={cs.itemHeader}>
                    <header>Battery</header>
                    <div className={cs.cancelContainer}>
                      <Image
                        src="/cartCancel.png"
                        alt="cancel item"
                        width={12}
                        height={12}
                        // onClick={() => deleteFromCart(i)}
                      />
                    </div>
                  </div>

                  <div className={cs.itemCount}>
                    <div className={cs.quantity}>
                      <span >- </span>{' '}
                        3
                      <span> +</span>
                    </div>
                    <div className={cs.price}>
                      {/* ${Math.round(item.price * 10) / 10} */}
                      N3000
                    </div>
                  </div>
                </div>
              </div>
            
          </section>
          <section className={cs.checkout}>
            {/* this div only shows on desktop */}
          
              <div style={{ width: '35%' }} className={cs.proceedDesktop}>
                <Link
                  href={`/cart/shipping`}
                  style={{ textDecoration: 'none' }}
                >
                  <button>Proceed to checkout</button>
                </Link>
                <div className={cs.continue}>
                  <Link
                    href={`/market/products`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
           

            <div className={cs.checkoutDetailsContainer}>
              <div className={cs.checkoutDetails}>
                <div>Products in cart :</div>{' '}
                <span> items</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Shipping :</div>
                <span>$500</span>
              </div>
              <div className={cs.checkoutDetails}>
                <div>Total :</div>
                <span>$500,000</span>
              </div>
            </div>
            {/* this div only shows on mobile */}
            {/* {page == 'cart' ? ( */}
              <div className={cs.proceedMobile}>
                <Link
                  href={`/cart/shipping`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={cs.btnHouse}>
                    <button className={cs.mobileBtn}>
                      Proceed to checkout
                    </button>
                  </div>
                </Link>
                <Link
                  href={`/market/products`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={cs.continue}>
                    <span>Continue Shopping</span>
                  </div>
                </Link>
              </div>
            {/* ) : (
              ''
            )} */}
          </section>
        </div>
    )
}

export default CartComponent;