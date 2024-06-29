 //require('dotenv').config({path:'./env'})
//  import dotenv from 'dotenv'

//  import mongoose from "mongoose";
//  import { DB_NAME } from "./constant";
//  import connectDB from "./db";

//  dotenv.config({path:'/env'})

//   connectDB();




import dotenv from 'dotenv';
import connectDB from './src/db/db.js';

dotenv.config({ path: '/.env' }); // Ensure the path is correct

connectDB();







// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constant";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables from a .env file

// const app = express();

// app.listen(process.env.PORT, () => {
//   console.log(`App is listening on port ${process.env.PORT}`);
// });

// app.on("error", (error) => {
//   console.log("ERRR: ", error);
// });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("ERROR: ", error);
//     process.exit(1); // Exit the process with a failure code
//   }
// })();
