import type { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongo from '../../utilis/MongoDb/connectDb';
import product from '../../Model/product';

const getSingleProduct = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        await ConnectMongo();
        const _id = req.query._id;
        console.log(_id)
        const request = await product.findOne({_id})
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
        return res.status(500).json({
            message: error.message,
            code: 500,
            status: false,
        })
    }
}

export default getSingleProduct;