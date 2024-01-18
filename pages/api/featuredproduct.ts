import type { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongo from '../../utilis/MongoDb/connectDb';
import product from '../../Model/product';

const featuredProducts = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        await ConnectMongo();
        const productCategory = req.query.category;
        const singleProductId = req.query._id
        const request = await product.find({productCategory})
        if(request) {
            let featuredProductArray:any = [];
            for(let i=0; i<5; i++){
                const getRandomProduct = request[Math.floor(Math.random() * request.length)];  
                // if statement to check that the product been displayed on the web page is not included in the featured products and
                // also check that a product does not appear twice on the featured products
               
                let booleanArray = featuredProductArray.some((item:any) => item._id == getRandomProduct._id)
                if(getRandomProduct._id != singleProductId && !booleanArray){
                    featuredProductArray.push(getRandomProduct)
                }
            }
            res.status(200).json({
                message: "successfully",
                code: 200,
                status: true,
                data: featuredProductArray
            })
        } 
        else{
            res.status(400).json({
                message: "something went wrong. please try again",
                code: 400,
                status: false
            })
        }
    }
    catch(error:any){
        return res.status(500).json({
            message: error.message,
            code: 500,
            status: false,
        })
    }
}

export default featuredProducts;