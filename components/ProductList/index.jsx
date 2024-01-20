import style from './productList.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';


const ProductList = ({prod}) => {
    const { addToCart } = BarState();

    //this function will help reduce the name of the product to two lines if name is greater than 41
    const shortenProductName = (productname) => {
    if(prod.productName.length > 35){
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

    return (
        <div className={style.gridList}>
                 <Link href={`/products/item/${prod._id}`} style={{textDecoration: "none"}}>
                <div>
                <div className={style.prodImage}>
                <Image 
                src={prod.productImage}
                alt="battery"
                layout='fill'
                />
                </div>

                <div className={style.productsName}>{shortenProductName(prod.productName)}</div>
                <div className={style.cost}>
                <Image 
                width={18} 
                height={18} 
                src="https://img.icons8.com/material-outlined/18/naira.png" 
                alt="naira"
                />
                <div className={style.price}>{prod.productPrice}</div>
                </div>
                </div>
                </Link>
                <button 
                className={style.addToCartBtn}
                onClick={() => addToCart({
                    _id: prod._id,
                    productImage: prod.productImage,
                    availableQuantity: prod.availableQuantity,
                    productName: prod.productName,
                    productDescription: prod.productDescription,
                    productCategory: prod.productCategory,
                    productPrice: prod.productPrice,
                    productQualities: prod.productQualities,
                    productQuantity: '1',
                    cloudinaryId: prod.cloudinaryId
                })}
                >
                Add to Cart
                </button>
            </div>
    )
}

export default ProductList;