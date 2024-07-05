import mongoose,{Schema} from "mongoose"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const userSchema= new Schema({
    usename: {
        type: "string",
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email: {
        type: "string",
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname: {
        type: "string",
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    avatar: {
        type: "string", //cloudinary url
        required:true,

    },
    cover: {
        type: "string", //cloudinary url
    },
    watchhostory: [
        {
            type:Schema.Types.ObjectId,
            ref:"Video",
        }
    ],
    password: {
        type:String,
        required:[true,"Password is requried"],
    },
    refreshToken:{
        type:string
    }
},
{
    timestamps:true
}

)


userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();;
    this.password=bcrypt.hash(this.password,8)
    next();
})

  userSchema.method.isPasswordCorrect=async function(password){
     return await bcrypt.compare(password,this.password)
  }

  userSchema.method.generateAccessToken=async function(password){
     return jwt.sign(
        {
            _id:this._id,
            emai:this.email,
            username:this.usename,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
      )
 }

 userSchema.method.generateRefreshToken=async function(password){
    
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
      )

 }

export const User= mongoose.model('User', userSchema)