// "use client"
import { Navigation, SideBar, Spinner, Footer } from "../../../../components/index";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarState } from '../../../../context/context';
import Image from "next/image";
import style from "../item.module.css"
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

const SingleProduct = () => {
    const router = useRouter()
    const {addToCart, buyNow} = BarState();
   
    const [loading, setLoading] = useState<boolean>(true)
    const [quantity, setQuantity] = useState<number>(1)
    const [featuredProducts, setFeaturedProducts] = useState<productTypes[]>([])
    const [product, setProduct] = useState<productTypes>({
        _id: "",
        productImage: "",
        availableQuantity: "",
        productName: "",
        productDescription: "",
        productCategory: "",
        productPrice: "",
        productQualities: "",
        cloudinaryId: "",
        __v: ""
    })
    const [prodQualityArr, setProductQualityArr] = useState<string[]>([])

    const increaseQuantity = () => {
        quantity < parseInt(product.availableQuantity) ? setQuantity(x => x+1) : '';
    }

    const decreaseQuantity = () => {
        quantity > 1 ? setQuantity(x => x-1) : '';
    }

    //this function will help reduce the name of the product to two lines if name is greater than 41
    const shortenProductName = (productname:String) => {
        if(productname.length > 35){
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

    const fetchFeaturedProducts = async (productCategory:string, _id:string) => {
        try{
        const httpRequest = await fetch(`../../../api/featuredproduct?category=${productCategory}&_id=${_id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let response = await httpRequest.json()   
       if(response.status){
            setFeaturedProducts([...response.data])
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

    const fetchSingleProduct = async (_id:any) => {
        try{
        const httpRequest = await fetch(`../../api/getsingleproduct?_id=${_id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let response = await httpRequest.json()   
       if(response.status){
        setLoading(false)
        const {_id, productImage, availableQuantity, productName, productDescription, productCategory,
                productPrice, productQualities, cloudinaryId, __v} = response.data;

           setProduct({
            _id,
            productImage,
            availableQuantity,
            productName,
            productDescription,
            productCategory,
            productPrice,
            productQualities,
            cloudinaryId,
            __v
           })
           const splitArr = productQualities.split(',')
           setProductQualityArr([...splitArr]);
           fetchFeaturedProducts(productCategory, _id)
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

    useEffect(() =>{
        // console.log(router.query.singleProduct)
        router.query.singleProduct ?  fetchSingleProduct(router.query.singleProduct):''
       
    },[router.query])

    return(
        <main>
        <ToastContainer />
        <Navigation page="products" />
        <SideBar page="products" />
        {loading ? <Spinner /> : <div>
        <section className={style.itemContainer}>
            <div className={style.imgContainer}>
                <div className={style.imgDiv}>
                <Image
                src={product.productImage}
                layout='fill'
                alt="product img"
                />
                </div>
            </div>

            <div className={style.prodDescriptionContainer}>
                <div className={style.prodHeader}>{product.productName}</div>
                <div className={style.stars}>
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                <Image 
                    width={18}
                    height={18} 
                    src="https://img.icons8.com/fluency/18/star.png" 
                    alt="star"
                />
                </div>

                <div className={style.cost}>
                <Image 
                width={24} 
                height={24} 
                src="https://img.icons8.com/material-outlined/24/naira.png" 
                alt="naira"
                />
                <div className={style.price}>{product.productPrice}</div>
                </div>

                <div className={style.availability}>
                Availability: <span>{product.availableQuantity} in stock</span>
                </div>

                <div className={style.briefDescription}>
                {product.productDescription}
                </div>

                <div className={style.quantity}>
                Quantity: 
                <div className={style.quantityCount}>
                    <span onClick={() => decreaseQuantity()}>-</span>
                    <span>{quantity}</span> 
                    <span onClick={() => increaseQuantity()}>+</span>
                </div>
                </div>

                <div className={style.addToCartContainer}>
                <button className={style.addToCartBtn}   onClick={() => addToCart({
                    _id: product._id,
                    productImage: product.productImage,
                    availableQuantity: product.availableQuantity,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productCategory: product.productCategory,
                    productPrice: product.productPrice,
                    productQualities: product.productQualities,
                    productQuantity: quantity.toString(),
                    cloudinaryId: product.cloudinaryId
                })}>ADD TO CART</button>
                 <Link
                  href={'/products/shipping_details'}
                  style={{ textDecoration: 'none' }}
                >
                <button className={style.buyNowBtn} onClick={() => buyNow({
                    _id: product._id,
                    productImage: product.productImage,
                    availableQuantity: product.availableQuantity,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productCategory: product.productCategory,
                    productPrice: product.productPrice,
                    productQualities: product.productQualities,
                    productQuantity: quantity.toString(),
                    cloudinaryId: product.cloudinaryId
                })}>BUY NOW</button>
                </Link>
                </div>
            </div>
        </section>

        <section className={style.descriptionContainer}>
        <div className={style.descriptionHeader}>Product Qualities</div>
        <div className={style.mainDescription}>
            <ul>
             {prodQualityArr.map((quality, i) => <li key={i}>{quality}</li>)}
             </ul>
        </div>

        <div className={style.productDetails}></div>
        </section>

        <section className={style.descriptionContainer}>
        <div className={style.descriptionHeader}>Featured Products</div>

        <div className={style.productGrid}>
        {/* featured products */}
        {featuredProducts.map((item, i) =>  <div className={style.gridItem} key={i}>
                <Link href={`/products/item/${item._id}`} style={{textDecoration: "none"}}>
                <div>
                <div className={style.prodImage}>
                <Image 
                src={item.productImage}
                alt="battery"
                layout='fill'
                />
                </div>

                <div className={style.productsName}>{shortenProductName(item.productName)}</div>
                <div className={style.featuredCost}>
                <Image 
                width={18} 
                height={18} 
                src="https://img.icons8.com/material-outlined/18/naira.png" 
                alt="naira"
                />
                <div className={style.featuredPrice}>{item.productPrice}</div>
                </div>
                </div>
                </Link>
                <button className={style.cartBtn} 
                    onClick={() => addToCart({
                        _id: item._id,
                        productImage: item.productImage,
                        availableQuantity: item.availableQuantity,
                        productName: item.productName,
                        productDescription: item.productDescription,
                        productCategory: item.productCategory,
                        productPrice: item.productPrice,
                        productQualities: item.productQualities,
                        productQuantity: '1',
                        cloudinaryId: item.cloudinaryId
                    })}
                >Add to Cart</button>
            </div>
            )}
            </div>
        </section>

        <Footer />
        </div>
}  


        </main>
    )
}

export default SingleProduct;