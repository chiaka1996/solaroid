import {Navigation, SideBar } from "../../../components/index";
import Link from "next/link";
import Image from "next/image";
import cs from './shipping.module.css'
import { BarState } from '../../../context/context';


const Shipping = () => {
  const {cartItems} = BarState()

  let totalPrice: number = 0;
    for (let t = 0; t < cartItems.length; t++) {
      totalPrice = totalPrice + parseInt(cartItems[t].productPrice);
    }
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
      </div>

      <section className={cs.shippingContainer}>
        <div className={cs.gridItem1}>
          <div className={cs.inputContainer}>
            <label>Email</label>
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
            <label>Full name</label>
            <input
              type="text"
              placeholder="Big cj"
            //   value={customerDetails.fullName}
              name="fullName"
            //   onChange={onChangeCustomerDetails}
            />
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
            {cartItems.map((prod, i) => <section className={cs.cartItems} key={i}>
                <div className={cs.item}>
                  <div>
                    <Image
                      src={prod.productImage}
                      alt="cart list"
                      width={150}
                      height={160}
                    />
                  </div>
                  <div className={cs.itemDetails}>
                    <div className={cs.itemHeader}>
                      <header>{prod.productName}</header>
                    </div>
                    <div className={cs.itemCount}>
                      <div className={cs.quantity}>Qty: {prod.productQuantity}</div>
                      <div className={cs.price}>
                      <div className={cs.totalPrice}>
                    <div className={cs.nairaImg}>
                    <Image 
                      layout='fill'
                      src="https://img.icons8.com/material-outlined/26/naira.png" 
                      alt="naira"
                      />
                      </div>
                      <span>{prod.productPrice}</span>
                      </div>
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <section className={cs.checkout}>
              <div>
                <div className={cs.checkoutDetails}>
                  <div>Products in cart :</div>{' '}
                  <span>{cartItems.length} items</span>
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
                      <span>{Math.round((totalPrice + 5000) * 10) / 10}</span>
                      </div>
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