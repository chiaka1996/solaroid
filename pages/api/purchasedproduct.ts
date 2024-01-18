import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelPurchase from '../../Model/purchasedproduct';
import type { NextApiRequest, NextApiResponse } from 'next';
import {mailOptions, transporter} from "../../Config/nodemailer"

const AddPurchasedProduct = async  (req:NextApiRequest, res:NextApiResponse) => {
try{
    let errorMessage:String[] = []
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i;
    const phoneRegex = /^234[7-9]{1}[0-1]{1}[0-9]{8}$/i;
    const fullnameRegex = /^\D{2,}/i

    await ConnectMongo()
    const {firstname, lastname,  email, phone, city, state, purchase, totalPrice} = req.body;
    if(!firstname || !lastname || !email || !phone || !city || !state || purchase.length < 1){
        return res.status(400).json({
            message: ["please fill all fields"],
            status: false,
            code: 400
        })
    }

    if(!emailRegex.test(email) || !phoneRegex.test(phone) || !fullnameRegex.test(firstname)
        ||  !fullnameRegex.test(lastname)
    ){
        if(!emailRegex.test(email)){
         errorMessage.push("incorrect email")
        }
        if(!phoneRegex.test(phone)){
         errorMessage.push("invalid phone number")
        }
        if(!fullnameRegex.test(firstname)){
         errorMessage.push("incorrect firstname")
        }
        if(!fullnameRegex.test(lastname)){
            errorMessage.push("incorrect lastname")
           }
        return res.status(400).json({
            message: errorMessage,
            status: false,
            code: 400
        })
    }

    await transporter.sendMail({
        ...mailOptions,
        subject: "Customer Order",
        text: "this is a test string",
        // html: "<h1>Test Title</1><p>body text</p>"
    })

    const savePurchase = new modelPurchase({
        email,
        firstname,
        lastname,
        state,
        city,
        phone,
        purchase,
        totalPrice
    })

    const response = await savePurchase.save();

    if(response){
        return res.status(200).json({
            message: "purchase successfull",
            status: true,
            code: 200
        })
    }

}
catch(error:any){
    res.status(500).json({
        error: error.message,
        message: ['something went wrong, try again'],
        status: false,
        code: 500
    })
}
}

export default AddPurchasedProduct;