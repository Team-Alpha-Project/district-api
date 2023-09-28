const mongoose=require("mongoose");

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter a product name"]
        },
       quantity :{
        type:Number,
        required:true,
        default:0,
        featured:true,
       },
       price:{
        type:Number,
        required:true,
        featured:true,
       },
       image:{
        type:String,
        required:false,
       }
    },
    {
        timestamps:true
    }
)

const product=mongoose.model('product', productSchema);

module.exports=product;