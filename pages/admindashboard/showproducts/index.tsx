import { useState, useEffect } from "react";
import { AdminNav } from "../../../components/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./showproduct.module.css";
import Image from 'next/image';

interface productTypes{
    _id: string,
    productImage: string,
    availableQuantity: string,
    productName: string,
    productDescription: string,
    productCategory: string,
    productPrice: string,
    productQualities: string,
    cloudinaryId: string,
    __v: string
}


const ShowProducts = () => {
    const [allProducts, setAllProducts] = useState<productTypes[]>([])

    const fetchAllProducts = async () => {
        const httpRequest = await fetch('../../api/getallproducts', {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let response = await httpRequest.json()   
       if(response.status){
            setAllProducts([...response.data])
       }
       else{
        toast.error(`${response.message}`, {
            position: "top-right",
            theme: "colored",
          });
       }
        
    }

    useEffect(() => {
        fetchAllProducts()
    },[])

    return(
        <main>
             <ToastContainer />
            <AdminNav page="showproduct" />
            <section className={style.showProductContainer}>
            <div className={style.topBar}>
            ALL PRODUCTS
            </div>

            <div className={style.productsHouse}>
            <div className={style.straightLine}></div>
            <div className={style.productHeader}>Batteries</div>
            <div className={style.subHouse}>
                {
                // map through all the products.
                // check if the product category is Battery and display it
                allProducts.map((prod, i) => prod.productCategory === "Battery" ?
                <div className={style.product} key={i}>
                <div className={style.imgContainer}>
                    <Image
                        src={prod.productImage}
                        alt="batteries"
                        layout="fill"
                    />
                </div>
                <div className={style.nameOfProduct}>{prod.productName}</div>
                <div className={style.priceOfProduct}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div>{prod.productPrice}</div>
                </div>
                <div  className={style.deletebin}>
                <Image
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-rounded/24/FA5252/filled-trash.png"  
                alt="filled-trash"
                />
                </div>
                </div> : '')
                }

                
            </div>
            
            <div className={style.straightLine}></div>
            <div className={style.productHeader}>Panels</div>
            <div className={style.subHouse}>
            {
                // map through all the products.
                // check if the product category is Panel and display it
                allProducts.map((prod, i) => prod.productCategory === "Panel" ?
                <div className={style.product} key={i}>
                <div className={style.imgContainer}>
                    <Image
                        src={prod.productImage}
                        alt="batteries"
                        layout="fill"
                    />
                </div>
                <div className={style.nameOfProduct}>{prod.productName}</div>
                <div className={style.priceOfProduct}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div>{prod.productPrice}</div>
                </div>
                <div  className={style.deletebin}>
                <Image
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-rounded/24/FA5252/filled-trash.png"  
                alt="filled-trash"
                />
                </div>
                </div> : '')
                }
               
                </div>

                <div className={style.straightLine}></div> 
                <div className={style.productHeader}>Inverters</div>
                <div className={style.subHouse}>
                {
                // map through all the products.
                // check if the product category is Inverter and display it
                allProducts.map((prod, i) => prod.productCategory === "Inverter" ?
                <div className={style.product} key={i}>
                <div className={style.imgContainer}>
                    <Image
                        src={prod.productImage}
                        alt="batteries"
                        layout="fill"
                    />
                </div>
                <div className={style.nameOfProduct}>{prod.productName}</div>
                <div className={style.priceOfProduct}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div>{prod.productPrice}</div>
                </div>
                <div  className={style.deletebin}>
                <Image
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-rounded/24/FA5252/filled-trash.png"  
                alt="filled-trash"
                />
                </div>
                </div> : '')
                }
                </div>
            </div>
            </section>
        </main>
    )
}

export default ShowProducts;