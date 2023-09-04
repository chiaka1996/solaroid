import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelMessage from '../../Model/message';
import type { NextApiRequest, NextApiResponse } from 'next';

const DeleteMessage = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        await ConnectMongo();
        const {id} = req.body;

        const deleteRequest = await modelMessage.deleteOne({id});

        if(deleteRequest){
            return res.status(200).json({
                message: "message deleted successfully",
                status: true,
                code: 200
            })
        }
        else{
            return res.status(400).json({
                message: "something went wrong, please try again",
                status: false,
                code: 400
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

export default DeleteMessage;