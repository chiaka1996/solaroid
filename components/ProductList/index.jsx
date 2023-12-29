import style from './productList.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';


const ProductList = ({prod}) => {
    const { addToCart } = BarState();
    return (
        <div className={style.gridList}>
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
                width={18} 
                height={18} 
                src="https://img.icons8.com/material-outlined/18/naira.png" 
                alt="naira"
                />
                <div className={style.price}>{prod.productPrice}</div>
                </div>
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