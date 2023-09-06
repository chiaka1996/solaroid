import type { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongo from '../../utilis/MongoDb/connectDb';
import product from '../../Model/product';

const getAllProducts = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        await ConnectMongo();
        const productCategory = req.query.category;
        console.log(productCategory)
        const request = await product.find({productCategory})
        if(request) {
            res.status(200).json({
                message: "products retrieved successfully",
                code: 200,
                status: true,
                data: request
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
        console.log(error.message)
        return res.status(500).json({
            message: error.message,
            code: 500,
            status: false,
        })
    }
}

export default getAllProducts;