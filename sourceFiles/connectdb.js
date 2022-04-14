import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

var URI = process.env.URI

async function connectDB()
{

    try
    {
        await mongoose.connect(URI)
        console.log("successfully connected to database");
    }
    catch(err)
    {
        console.log("There was a problem connecting to mongodb server");
        console.log(err);
    }
};

export default connectDB;