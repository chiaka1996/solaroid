import mongoose from 'mongoose';

const connectMongoose = async () => {
 mongoose.connect(process.env.ATLAS_URI!);
 console.log("CONNECTED")
//  const connection = mongoose.connection;
// connection.once('open',(res) => {
//     console.log("MongoDB connected");
// });
}

export default connectMongoose;