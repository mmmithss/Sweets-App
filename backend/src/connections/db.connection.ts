import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI || "";

const dbConnection = async()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected");
    }catch(err){
        console.log("Error connecting to the database",err);
    }
}

export default dbConnection;