const express=require("express");
const mongoose=require("mongoose");
const Product = require('./schema/schemamodels');
const app = express();
app.use(express.json());





app.get("/home/:id",async(req,res)=>{
    try {
        
        const product=await Product.findById(req.params);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.put("/home",async(req,res)=>{
    try {
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){ 
            return res.status(404).json({message:`Cannot find any of the product Sorry :( ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/user",async(req,res)=>{
     try {
        const product = await Product.find({});
        res.status(200).json(product);

     } catch (error) {
        res.status(500).json({message:error.message})
     }
})

app.get("/",(req ,res)=>{
       res.send("Hello Globe");
});

app.get("/huzaif",(req,res)=>{
    res.send("Hello From Huzaif")
})

app.listen(4000,()=>{
    console.log("Greetings This is port 4000");
});

mongoose.connect('mongodb+srv://huzaifkhan537:Mongodb814313@huzaifapi.ln09pb8.mongodb.net/HuzaifAPI?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected successfully..." )
})
.catch((error)=>{
    console.log(error)
});





















