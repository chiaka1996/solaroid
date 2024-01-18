import { useState } from "react";
import {Navigation, SideBar } from "../../../components/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from "next/image";
import cs from './shipping.module.css'
import { BarState } from '../../../context/context';
import { useRouter } from 'next/router'

interface customerDetails{
  email: string,
  firstname: string,
  lastname: string,
  state: string,
  city: string
}


const Shipping = () => {
  const router = useRouter();
  const {cartItems, deleteAllFromCart} = BarState();

  let totalPrice: number = 0;
    for (let t = 0; t < cartItems.length; t++) {
      totalPrice = totalPrice + parseInt(cartItems[t].productPrice);
    }

  const [phone, setPhone] = useState<string | null>(null);
  const [itenary, setItenary] = useState<customerDetails>({
    email: '',
   firstname: '',
   lastname: "",
    state: "",
    city: "",
  })

  const [emailError, setEmailError] = useState<string>('')
  const [firstnameError, setFirstnameError] = useState<string>('')
  const [lastnameError, setLastnameError] = useState<string>('')
  const [phoneError, setPhoneError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

 
  const onChangeItenary = (e:any) => {
    const value = e.target.value.trim().toLowerCase();
    const name = e.target.name;

    setItenary({
      ...itenary,
      [name] : value
    })

  }

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i;
  const phoneRegex = /^234[7-9]{1}[0-1]{1}[0-9]{8}$/i;
  const nameRegex = /^\D{2,}/i


  // when the confirm button is clicked
  const onClickConfirm = async () => {
    try{
    setLoading(true)
    setEmailError('')
    setFirstnameError('')
    setLastnameError('')
    setPhoneError('')
    const {email, firstname, lastname,  state, city} = itenary;
    if(!email || !firstname || !lastname || !state || !city || !phone){
      setLoading(false)
      return  toast.error("please, fill all fields", {
        position: "top-right",
        theme: "colored",
      });
    }
    if(!emailRegex.test(email) || !phoneRegex.test(phone) || !nameRegex.test(firstname) || !nameRegex.test(lastname)){
      if(!emailRegex.test(email)){
        setEmailError("invalid email")
      }
      if(!phoneRegex.test(phone)){
        setPhoneError('incorrect phone number')
      }
      if(!nameRegex.test(firstname)){
       setFirstnameError('invalid firstname')
      }
      if(!nameRegex.test(lastname)){
        setLastnameError('invalid lastname')
       }
      setLoading(false)
      return false
    }

    const data = {
      email,
      firstname,
      lastname,
      state,
      city,
      phone,
      purchase: cartItems,
      totalPrice: totalPrice + 5000
    }

    const httpRequest = await fetch('../../../api/purchasedproduct', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })

    const response = await httpRequest.json()  
    
    if(response.status){
      deleteAllFromCart()
      router.push(`/products/success?name=${firstname}`)
    }
  }
  catch(error:any){
    setLoading(false)
    return toast.error(<div>{error.message}</div>, {
      position: "top-right",
      theme: "colored",
    });
  }  
  }

  
    return(
        <main>
          <ToastContainer/>
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
              value={itenary.email}
              onChange={onChangeItenary}
            />
            <div className={cs.checkboxContainer}>
              <input type="checkbox" className={cs.checkbox} />
              <span>Get updates about new drops and exclusive offers</span>
            </div>
            <div className={cs.error}>{emailError}</div>
          </div>

          <div className={cs.postalContainer}>
            <div>
            <label>Firstname</label>
            <input
              type="text"
              placeholder="chiaka"
              value={itenary.firstname}
              name="firstname"
              onChange={onChangeItenary}
            />
            <div className={cs.error}>{firstnameError}</div>
            </div>
            <div>
            <label>Lastname</label>
            <input
              type="text"
              placeholder="newton"
              value={itenary.lastname}
              name="lastname"
              onChange={onChangeItenary}
            />
            <div className={cs.error}>{lastnameError}</div>
            </div>
          </div>

          <div className={cs.postalContainer}>
            <div>
              <label>State</label>
              <select
                name="state"
                onChange={onChangeItenary}
                value={itenary.state}
              >
                 <option value=""></option>
                <option value="lagos">Lagos</option>
              </select>
            </div>

            <div>
              <label>City</label>
              <select
                name="city"
                onChange={onChangeItenary}
                value={itenary.city}
              >
                 <option value=""></option>
                <option value="lagos">Lagos</option>
              </select>
            </div>
          </div>

          <div className={cs.inputContainer}>
            <label>Phone number</label>
            <PhoneInput
              country={'ng'}
              onlyCountries={['ng']}
              value={phone}              
              onChange={phone => setPhone(phone)}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false
              }}
              containerStyle={{
                outline: "none"
              }}
              buttonStyle={{
                borderRadius: "10px 0 0 10px",
                outline: "none"
               
              }}
              inputStyle={
                {
                  outline: 'none !important',
                  height: "50px",
                  width: "100%",
                  fontWeight: "400",
                  fontSize:"16px",
                  borderRadius: "10px",
                  border: "0.1px solid #dad8d8",
                  color: "#888888"
              }
              }
            />
            <div className={cs.error}>{phoneError}</div>
          </div>
          <div className={cs.buttonContainer}>
              <button 
              onClick={onClickConfirm}
              >
              {loading ?  <div className={cs.spinnerContainer}></div> : "Confirm"}
              </button>
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