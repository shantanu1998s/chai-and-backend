import mongoose from "mongoose";
import { DB_NAME } from "../constant";


const connectDB= async ()=>{
      try {
       const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongoDB connect !! DB HOST : ${connectionInstance.connection.host}`)
      } catch (error) {
          console.log("mongo db connection error", error)
          process.exit(1)
      }
}

export default connectDB