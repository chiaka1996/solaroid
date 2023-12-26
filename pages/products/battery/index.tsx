import {useState, useEffect} from 'react'
import { Banner, Navigation, SideBar, Footer, ProductItem } from "../../../components/index";
import Image from "next/image";
import style from "../product.module.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarState } from '../../../context/context';

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

const Battery = () => {
    const { addToCart } = BarState();
    const [batteryProduct, setBatteryProduct] = useState<productTypes[]>([]);

    // fetch all battery products from the database
    const fetchAllBatteryProducts = async () => {
        try{
        const httpRequest = await fetch('../../api/getproductbycategory?category=Battery', {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let response = await httpRequest.json()   
       if(response.status){
            setBatteryProduct([...response.data])
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
        fetchAllBatteryProducts()
    },[])


    return(
        <main>
        <ToastContainer />
        <Navigation page="products" />  
        <SideBar page="products" /> 
        <Banner /> 
        <section className={style.productContainer}>
            <div className={style.topLine}></div>
            <div className={style.productHeader}>Batteries</div>

            <div className={style.productGrid}>
            {batteryProduct.map((prod, i) => <div className={style.gridItem} key={i}>
                <ProductItem prod={prod} addToCart={addToCart} />
            </div>
             )}
            </div>
        </section>
        <Footer />
        </main>
    )
}

export default Battery;