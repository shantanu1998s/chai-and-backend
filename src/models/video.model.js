import mongoose, { mongo, Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
import mongoose from "mongoose-aggregate-paginate-v2"

const videoSchema= new Schema({

       videoFile:{
        type:String,  //cloudinary id
        reuuried:true,
       },
       thumbnail:{
        type:string,  //cloudinary id
        required:true,
       },
       title:{
        type:string,
        required:true,
       },
       description:{
        type:string,
        required:true,
       },
       duration:{
        type:Number,
        required:true,
       },
       duration:{
        type:Number,
        default:0,
       },

       isPublic:{
        type:boolean,
        default:true,
       },
       owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
       }

},{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)