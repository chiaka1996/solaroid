import ConnectMongo from '../../utilis/MongoDb/connectDb';
import product from '../../Model/product';
import type { NextApiRequest, NextApiResponse } from 'next';
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARYY_API_SECRET
})

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };


const editProduct = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        await ConnectMongo();
        const form = new formidable.IncomingForm({ keepExtensions: true });

        form.parse(req, async function (err:any, fields:any, files:any) {
            if(err){
                return res.status(400).json({
                    message: err.message,
                    status: false,
                    code: 400
                })
            }

            const image = files.productImage[0].filepath;
            console.log(fields)
            let {_id, cloudinaryId, productName, productDescription, productQualities, productCategory, productPrice, availableQuantity} = fields;
            productName = productName[0]
            availableQuantity = availableQuantity[0]
            productDescription = productDescription[0]
            productQualities = productQualities[0]
            productCategory = productCategory[0]
            productPrice = productPrice[0]
            cloudinaryId = cloudinaryId[0]
            _id = _id

        // if the payload comes with an image, we will delete the former image
        // and upload the new image to cloudinary then save the url to the database
        if(image && cloudinaryId){
            //delete the previous image from cloudinary
            const destroy = await cloudinary.uploader.destroy(cloudinaryId)
               if(!destroy){
                return res.status(500).json({
                    message: 'internal server error',
                    code: 500,
                    status: false
                })
               }

            //upload an new image to cloudinary
            const result =  await cloudinary.uploader.upload(image,{width: 2500, height: 3500, crop: "fill"})
            if(!result){
                return res.status(500).json({
                    message: 'internal server error',
                    code: 500,
                    status: false
                })
               }

               const updateProduct = {
                productImage: result.secure_url,
                cloudinaryId: result.public_id,
                productName, 
                productDescription,
                productQualities, 
                productCategory, 
                productPrice, 
                availableQuantity
               }

               const updateImage = await product.updateOne({_id}, updateProduct)
               if(updateImage){
                 res.status(200).json({
                    message: "product updated successfully",
                    code: 200,
                    status: true
                })
            }
            else{
                res.status(400).json({
                    message: "something went wrong. Try again",
                    code: 200,
                    status: true
                })
            }
        }

        else{
            // if user is not changin image
            const updateProduct = {
                productName, 
                productDescription,
                productQualities, 
                productCategory, 
                productPrice, 
                availableQuantity
               }

               const updateImage = await product.updateOne({_id}, updateProduct)
               if(updateImage){
                 res.status(200).json({
                    message: "product updated successfully",
                    code: 200,
                    status: true
                })
            }
            else{
                res.status(400).json({
                    message: "something went wrong. Try again",
                    code: 200,
                    status: true
                })
            }
        }
                         
        })    
    }
    catch(error:any){
        return false;
    }
}

export default editProduct;