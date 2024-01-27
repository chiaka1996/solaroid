import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
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

const Category = () => {
    const router = useRouter();
    const [routerName, setRouterName] = useState<String>('')
    const [product, setProduct] = useState<productTypes[]>([]);

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

     // delete product from the database
     const deleteSingleProduct = async (_id:String) => {
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
            fetchAllCategory(routerName);
            toast.success(`${response.message}`, {
                position: "top-right",
                theme: "colored",
              });

       }
       else{
        toast.error(`${response.message}`, {
            position: "top-right",
            theme: "colored",
          });
       }
    }



    // fetch all category from the database
    const fetchAllCategory = async (category:String) => {
        try{
        const httpRequest = await fetch(`../../api/getproductbycategory?category=${category}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let response = await httpRequest.json()   
       if(response.status){
            setProduct([...response.data])
            console.log(response.data)
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
        if( router.query.category && !Array.isArray(router.query.category)){
            let categoryName = router.query.category;
            categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
            setRouterName(categoryName)
            fetchAllCategory(categoryName)
        }
    }, [router.query])

    return(
        <main>
        <ToastContainer />
        <AdminNav page='showproduct' />
        <section className={style.showProductContainer}>
            <div className={style.topBar}>
            {routerName}
            </div>
            <div className={style.categoryHouse}>
            <div className={style.subHouse}>
            {
                // map through all the products.
                product.map((prod, i) => <div className={style.product} key={i}>
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
                </div>)
                }
                </div>
                </div>
        </section>
        </main>
    )
}

export default Category;