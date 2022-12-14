const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter product Name"]
    },
    description:{
        type:String,
        required:[true,"please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"please Enter Product Price"],
        maxLength:[8,"price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            uri:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter product category"]

    },
    Stock:{
        type:Number,
        required:[true,"please Enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:[
        {
            name:{
                type:String,
                required:true,
            },
           rating:{
            type:Number,
            required:true
           },
           comment:{
            type:String,
            required:true
           }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("product",productSchema)