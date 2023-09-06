import {useState, useEffect} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Banner, Navigation, SideBar, Footer } from "../../../components/index";
import Image from "next/image";
import style from "../product.module.css";

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

const Panel = () => {
    const [panelProduct, setPanelProduct] = useState<productTypes[]>([]);

    // fetch all panel products from the database
    const fetchAllPanelProducts = async () => {
        try{
        const httpRequest = await fetch('../../api/getproductbycategory?category=Battery', {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let response = await httpRequest.json()   
       if(response.status){
            setPanelProduct([...response.data])
       }
       else{
        toast.error(`${response.message}`, {
            position: "top-right",
            theme: "colored",
          });
       }
    }
    catch(error:any){
        toast.error(`${error.message}`, {
            position: "top-right",
            theme: "colored",
          });
       }
    }

    useEffect(() => {
        fetchAllPanelProducts()
    },[])

    return(
        <main>
            <ToastContainer />
        <Navigation page="products" />  
        <SideBar page="products" /> 
        <Banner /> 
        <section className={style.productContainer}>
            <div className={style.topLine}></div>
            <div className={style.productHeader}>Solar Panels</div>

            <div className={style.productGrid}>
            {panelProduct.map((prod, i) => <div className={style.gridItem} key={i}>
                <div className={style.prodImage}>
                <Image 
                src={prod.productImage}
                alt="battery"
                layout='fill'
                />
                </div>

                <div className={style.productsName}>{prod.productName}</div>
                <div className={style.cost}>
                <Image 
                width={16} 
                height={16} 
                src="https://img.icons8.com/material-outlined/16/naira.png" 
                alt="naira"
                />
                <div className={style.price}>{prod.productPrice}</div>
                </div>
                <button className={style.addToCartBtn}>Add to Cart</button>
            </div>
             )}
           </div>
        </section>
        <Footer />
        </main>
    )
}

export default Panel;