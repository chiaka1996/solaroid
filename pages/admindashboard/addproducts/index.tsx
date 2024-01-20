import { useState, useEffect, MouseEventHandler } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminNav } from "../../../components/index";
import style from "./addproduct.module.css";
import { useRouter } from 'next/router'
let FormData = require('form-data');
import Image from "next/image";

interface productTypes{
    availableQuantity: string,
    productName: string,
    productDescription: string,
    productCategory: string,
    productPrice: string,
    productQualities: string
}

const AddProducts = () => {
    const router = useRouter();
    const [productImage, setProductImage] = useState<File | null>()
    const [loading,setLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<productTypes>({
        availableQuantity: '',
        productName: '',
        productDescription: "",
        productCategory: "",
        productPrice: "",
        productQualities: ''
    })


    // check if the router has data.
    // if the router has data, then the page will be used to edit
    // if it contains data, populate the input fields with it.
    // if it does not, then prompt the user to add product 
    useEffect(() => {
    if(!router.isReady) return;
    if(router.query){
         setProduct({
            productName: router.query.productName && !Array.isArray(router.query.productName) ?  router.query.productName : '',
             availableQuantity: router.query.availableQuantity && !Array.isArray(router.query.availableQuantity) ?  router.query.availableQuantity : '',
             productDescription: router.query.productDescription && !Array.isArray(router.query.productDescription) ?  router.query.productDescription : '', 
             productCategory: router.query.productCategory && !Array.isArray(router.query.productCategory) ?  router.query.productCategory : '', 
             productPrice: router.query.productPrice && !Array.isArray(router.query.productPrice) ?  router.query.productPrice : '',
             productQualities: router.query.productQualities && !Array.isArray(router.query.productQualities) ?  router.query.productQualities : ''
         })
    }
    
    },[router.isReady])



    // change the value of the product state as the corresponding input value changes
    const onChangeInput = (event:any) => {  
        let value:string = event.target.value
        let name:string = event.target.name

        setProduct({
            ...product,
           [name]: value
        })
    }

    // this function is used to handle the state of the productImage
    const handleFile = (e:any) => {
        let file = e.target.files[0];
       
        if(file && file.type.substr(0,5) === "image"){        
            setProductImage(file)    
        }
    }

    // function for editing the function
    const submitEditBtn:MouseEventHandler<HTMLButtonElement> = async () => {
        try{
            setLoading(true)
            const {productName, availableQuantity, productDescription, productCategory, productPrice, productQualities} = product;
            if(!productName || !productDescription || !productCategory || !productPrice || !productQualities){
                setLoading(false)
                return  toast.error("please fill all required fields.", {
                position: "top-right",
                theme: "colored",
                });
                }

            let formdata = new FormData();
              formdata.append('productImage', productImage)
              formdata.append('availableQuantity', availableQuantity)
              formdata.append('productName', productName)
              formdata.append('productDescription', productDescription)
              formdata.append('productCategory', productCategory)
              formdata.append('productPrice', productPrice)
              formdata.append('productQualities', productQualities)
              formdata.append('cloudinaryId', router.query.cloudinaryId)

    
            //add product to the database
            const addProduct = await fetch('../../api/editproduct', {
                method: 'POST',
                body: formdata,

            })
    
                let response = await addProduct.json()   
                if(response.status){
                    setLoading(false)
                    setProduct({
                        availableQuantity: '',
                        productName: '',
                        productDescription: "",
                        productCategory: "",
                        productPrice: "",
                        productQualities: ''
                    })
                    toast.success(`${response.message}`, {
                        position: "top-right",
                        theme: "colored",
                      });

                    router.push("/admindashboard/addproducts")
                }  
                else{
                    setLoading(false)
                    toast.error(`${response.message}`, {
                        position: "top-right",
                        theme: "colored",
                      });
                }
         }
        catch(error:any){
            setLoading(false)
        toast.error(`${error.message}`, {
        position: "top-right",
        theme: "colored",
      });
        }
    }


    // function for adding product
    const submitBtn:MouseEventHandler<HTMLButtonElement> = async () => {
        try{
            setLoading(true)
            const {productName, availableQuantity, productDescription, productCategory, productPrice, productQualities} = product;
            if(!productName || !productDescription || !productCategory || !productPrice || !productQualities){
                setLoading(false)
                return  toast.error("please fill all required fields.", {
                position: "top-right",
                theme: "colored",
                });
                }

            let formdata = new FormData();
              formdata.append('productImage', productImage)
              formdata.append('availableQuantity', availableQuantity)
              formdata.append('productName', productName)
              formdata.append('productDescription', productDescription)
              formdata.append('productCategory', productCategory)
              formdata.append('productPrice', productPrice)
              formdata.append('productQualities', productQualities)

    
            //add product to the database
            const addProduct = await fetch('../../api/addproduct', {
                method: 'POST',
                body: formdata,

            })
    
                let response = await addProduct.json()   
                if(response.status){
                    setLoading(false)
                    setProduct({
                        availableQuantity: '',
                        productName: '',
                        productDescription: "",
                        productCategory: "",
                        productPrice: "",
                        productQualities: ''
                    })
                    toast.success(`${response.message}`, {
                        position: "top-right",
                        theme: "colored",
                      });

                    router.push("/admindashboard/addproducts")
                }  
                else{
                    setLoading(false)
                    toast.error(`${response.message}`, {
                        position: "top-right",
                        theme: "colored",
                      });
                }
         }
        catch(error:any){
            setLoading(false)
        toast.error(<div>something went wromg, try again</div>, {
        position: "top-right",
        theme: "colored",
      });
        }
    }

    return(
        <main>
             <ToastContainer />
            <AdminNav page="addproduct" />

            <section className={style.addProductContainer}>
                <div className={style.topBar}>
                    ADD PRODUCTS
                </div>

                <div className={style.formHouse}>
                 <div className={style.inputContainer}>
                <label className={style.label}>Product Image</label><br/>
                <input      
                type="file"
                name="productImage"
                onInput = {handleFile}
                accept='images/*'
                required
                />
                </div>
                 {/* in case of an edit, display the product image */}
                 {
                    router.query ? 
                    router.query.productImage && !Array.isArray(router.query.productImage) ? 
                    <Image src={router.query.productImage} 
                    width={100} 
                    height={100} 
                    alt="product" 
                    />: ""
                     : ""
                }
                
                <div className={style.formContainer}>
                <div className={style.form1}>
                <div className={style.inputContainer}>
                <label className={style.label}>Available Quantity</label>
                <input      
                type="text"
                name="availableQuantity"
                value={product.availableQuantity}
                onChange={onChangeInput}
                required
                />
                </div>

                <div className={style.inputContainer}>
                <label className={style.label}>Product Name</label>
                <input      
                type="text"
                name="productName"
                value={product.productName}
                onChange={onChangeInput}
                required
                />
                </div>

                <div className={style.inputContainer}>
                <label className={style.label}>Product description</label>
                <textarea 
                name="productDescription" 
                value={product.productDescription}
                onChange={onChangeInput}
                ></textarea>
                </div>
                </div>

                <div className={style.form2}>
                <div className={style.inputContainer}>
                <label className={style.label}>Product Category</label>
                <select 
                name="productCategory"
                value={product.productCategory}
                onChange={onChangeInput}
                >
                    <option></option>
                    <option>Battery</option>
                    <option>Panel</option>
                    <option>Inverter</option>
                </select>
                </div>

                <div className={style.inputContainer}>
                <label className={style.label}>Produt Price</label>
                <input      
                type="text"
                name="productPrice"
                value={product.productPrice}
                onChange={onChangeInput}
                required
                />
                </div>

                <div className={style.inputContainer}>
                <label className={style.label}>Product Qualitites <span>
                 (separate each quality with a comma.)    
                </span></label>
                <textarea 
                name="productQualities"
                value={product.productQualities}
                onChange={onChangeInput}
                >
                
                </textarea>
                </div>
                </div>
                </div>

                {router.query._id ? <button 
                className={style.addBtn} 
                onClick={submitEditBtn}
                >
                {loading ? "saving..." : "Edit Product"}
                </button> : <button 
                className={style.addBtn} 
                onClick={submitBtn}
                >
                {loading ? "saving..." : "Add Product"}
                </button> }


                </div>
            </section>
        </main>
    )
}

export default AddProducts;