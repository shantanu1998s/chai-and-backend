import express from "express"
import cookieParser from "cookie-parser";
import cors from 'cors'

 const app= express();

 //app.use(cors());

 app.use(({
    origin: process.env.CORS_ORIGIN,
       Credential:true,
 }))


 app.use(express.json({limit:"16km"}))
 app.use(express.urlencoded({extended:true, limit:"16kb"}))
 app.use(express.static("public"))
 app.use(cookieParser());


 export {app};



