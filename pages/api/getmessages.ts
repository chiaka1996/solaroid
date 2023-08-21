import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelMessage from '../../Model/message';
import type { NextApiRequest, NextApiResponse } from 'next';

const GetAllMessages = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        await ConnectMongo();
        const request = await modelMessage.find()
        if(request) {
            res.status(200).json({
                message: "message retrieved successfully",
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
            status: false
        })
    }
}

export default GetAllMessages;