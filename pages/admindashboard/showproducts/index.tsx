import { useState, useEffect } from "react";
import { AdminNav } from "../../../components/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./showproduct.module.css";
import Image from 'next/image';
import Link from "next/link";

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


const ShowProducts =  () => {
    const [allProducts, setAllProducts] = useState<productTypes[]>([])

     //this function will help reduce the name of the product to two lines if name is greater than 41
     const shortenProductName = (productname:string) => {
        if(productname.length > 40){
            const splitName = productname.split("");
            const slicedName  = splitName.slice(0,35);
                slicedName.push('...')
            const joinedName =  slicedName.join("");
            return joinedName
        }
        else{
            return productname
        }
        }

    // fetch all products from the database
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

    // delete product from the database
    const deleteSingleProduct = async (_id:string) => {
        console.log("working")
        const httpRequest = await fetch('../../api/deleteproduct', {
            method: 'POST',
            body: JSON.stringify(_id),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        let response = await httpRequest.json() 
        if(response.status){
            toast.success(`${response.message}`, {
                position: "top-right",
                theme: "colored",
              });

            fetchAllProducts();
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
                 <Link
                    href={{
                        pathname: "/admindashboard/addproducts",
                        query: {
                            _id: prod._id,
                            productImage: prod.productImage,
                            availableQuantity: prod.availableQuantity,
                            productName: prod.productName,
                            productDescription: prod.productDescription,
                            productCategory: prod.productCategory,
                            productPrice: prod.productPrice, 
                            productQualities: prod.productQualities,
                            cloudinaryId: prod.cloudinaryId
                        }
                    }}
                > 
                <div>
                <div className={style.imgContainer}>
                    <Image
                        src={prod.productImage}
                        alt="batteries"
                        layout="fill"
                    />
                </div>
                <div className={style.nameOfProduct}>{shortenProductName(prod.productName)}</div>
                <div className={style.priceOfProduct}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div>{prod.productPrice}</div>
                </div>
                </div>
                </Link>
                <div  className={style.deletebin}>
                <Image
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-rounded/24/FA5252/filled-trash.png"  
                alt="filled-trash"
                onClick = {() => deleteSingleProduct(prod._id)}
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
                    <Link
                    href={{
                        pathname: '/admindashboard/addproducts',
                        query: {
                            _id: prod._id,
                            productImage: prod.productImage,
                            availableQuantity: prod.availableQuantity,
                            productName: prod.productName,
                            productDescription: prod.productDescription,
                            productCategory: prod.productCategory,
                            productPrice: prod.productPrice,
                            productQualities: prod.productQualities
                         }
                    }}
                >
                    <div>
                <div className={style.imgContainer}>
                    <Image
                        src={prod.productImage}
                        alt="batteries"
                        layout="fill"
                    />
                </div>
                
                <div className={style.nameOfProduct}>{shortenProductName(prod.productName)}</div>
                
                <div className={style.priceOfProduct}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div>{prod.productPrice}</div>
                </div>
                </div>
                </Link>
                <div  className={style.deletebin}>
                <Image
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-rounded/24/FA5252/filled-trash.png"  
                alt="filled-trash"
                onClick = {() => deleteSingleProduct(prod._id)}
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
                    <Link
                    href={{
                        pathname: '/admindashboard/addproducts',
                        query: {
                            _id: prod._id,
                            productImage: prod.productImage,
                            availableQuantity: prod.availableQuantity,
                            productName: prod.productName,
                            productDescription: prod.productDescription,
                            productCategory: prod.productCategory,
                            productPrice: prod.productPrice,
                            productQualities: prod.productQualities
                         }
                    }}
                > 
                <div>
                <div className={style.imgContainer}>
                    <Image
                        src={prod.productImage}
                        alt="batteries"
                        layout="fill"
                    />
                </div>
                <div className={style.nameOfProduct}>{shortenProductName(prod.productName)}</div>
                <div className={style.priceOfProduct}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div>{prod.productPrice}</div>
                </div>
                </div>
                </Link>
                <div  className={style.deletebin}>
                <Image
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-rounded/24/FA5252/filled-trash.png"  
                alt="filled-trash"
                onClick = {() => deleteSingleProduct(prod._id)}
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