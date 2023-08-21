import {Navigation, SideBar, Cart } from "../../../components/index";
import Link from "next/link";
import Image from "next/image";
import cs from './shipping.module.css'

const Shipping = () => {
    return(
        <main>
        <Navigation page="products" />  
        <SideBar page="products" /> 

        <div className={cs.cartNav}>
        <div className={cs.cart}>
          <div className={cs.list}>Shopping cart</div>
        </div>
        <div className={cs.details}>
          <div className={cs.active}>Shipping details</div>
        </div>
        <div className={cs.payment}>
          <div className={cs.list}>Payment details</div>
        </div>
      </div>

      <section className={cs.shippingContainer}>
        <div className={cs.gridItem1}>
          <div className={cs.inputContainer}>
            <label>Your email</label>
            <input
              type="email"
              name="email"
            //   value={customerDetails.email}
            //   onChange={onChangeCustomerDetails}
            />
            <div className={cs.checkboxContainer}>
              <input type="checkbox" className={cs.checkbox} />
              <span>Get updates about new drops and exclusive offers</span>
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Your full name</label>
            <input
              type="text"
              placeholder="Big cj"
            //   value={customerDetails.fullName}
              name="fullName"
            //   onChange={onChangeCustomerDetails}
            />
          </div>

          <div className={cs.inputContainer}>
            <label>Country</label>
            <select
              name="country"
            >
              <option value="nigeria">Nigeria</option>
            </select>
          </div>

          <div className={cs.postalContainer}>
            <div>
              <label>City</label>
              <select
                name="city"
                // onChange={onChangeCustomerDetails}
                // value={customerDetails.city}
              >
                <option value="lagos">Lagos</option>
              </select>
            </div>

            <div>
              <label>Postal code</label>
              <input
                type="text"
                placeholder="0011011"
                name="postalCode"
                // onChange={onChangeCustomerDetails}
                // value={customerDetails.city}
              />
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Phone number</label>
            <input type="text" placeholder="08012345698" />
          </div>
          <div className={cs.buttonContainer}>
            <Link href={`/cart/success`} style={{ textDecoration: 'none' }}>
              <button>Confirm</button>
            </Link>
          </div>

          {/* this div is to be viewed only on mobile */}
          <div className={cs.goBackToCart}>Go back to cart</div>
        </div>

        <div className={cs.gridItem2}>
          <>
            {/* {cartItems.map((prod, i) => ( */}
              <section className={cs.cartItems}>
                <div className={cs.item}>
                  <div>
                    <Image
                      src='/home_imgs/battery.png'
                      alt="cart list"
                      width={150}
                      height={160}
                    />
                  </div>
                  <div className={cs.itemDetails}>
                    <div className={cs.itemHeader}>
                      <header>Battery</header>
                      {/* <div className={cs.cancelContainer}>
                        <Image
                          src="/cartCancel.png"
                          alt="cancel item"
                          width={10}
                          height={10}
                        />
                      </div> */}
                    </div>
                    <div className={cs.itemCount}>
                      <div className={cs.quantity}>Qty: 2</div>
                      <div className={cs.price}>N3000</div>
                    </div>
                  </div>
                </div>
              </section>

            <section className={cs.checkout}>
              <div>
                <div className={cs.checkoutDetails}>
                  <div>Products in cart :</div>{' '}
                  <span>2 items</span>
                </div>
                <div className={cs.checkoutDetails}>
                  <div>Shipping :</div>
                  <span>N3000</span>
                </div>
                <div className={cs.checkoutDetails}>
                  <div>Total :</div>
                  <span>
                    {/* ${Math.round((totalPrice + shippingFee) * 10) / 10} */}
                    N3000
                  </span>
                </div>
              </div>
            </section>
          </>
        </div>
      </section>
        </main>
    )
}

export default Shipping;