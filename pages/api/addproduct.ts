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


const Addproduct = async (req: NextApiRequest, res: NextApiResponse) => {
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
          let {productName, productDescription, productQualities, productCategory, productPrice, availableQuantity} = fields;
            productName = productName[0]
            availableQuantity = availableQuantity[0]
            productDescription = productDescription[0]
            productQualities = productQualities[0]
            productCategory = productCategory[0]
            productPrice = productPrice[0]
         

          if(!image || !productName || !productDescription || 
            !availableQuantity || !productCategory || !productPrice){
            return res.status(400).json({
                message: "please fill all required fields",
                code: 400,
                status: false
            })
          }

          const result =  await cloudinary.uploader.upload(image,{width: 2500, height: 3500, crop: "fill"})
          if(result){
           const newProduct = new product({
                     productImage: result.secure_url,
                     cloudinaryId: result.public_id,
                     productName,
                     productDescription,
                     productQualities,
                     productCategory,
                     productPrice,
                     availableQuantity
          })

          const saveProduct = await newProduct.save();
          if(saveProduct){
            return res.status(200).json({
                message: "product saved successfully",
                code: 200,
                status: true
            })
          }
        }
        })
    }
    catch(error:any){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default Addproduct;