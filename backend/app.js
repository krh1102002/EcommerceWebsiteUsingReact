const express=require('express');
const app=express();
app.use(express.json());
const dotenv =require('dotenv');
dotenv.config();
const product =require("./routes/productRoute");
app.use("/api/v1",product);
module.exports=app;