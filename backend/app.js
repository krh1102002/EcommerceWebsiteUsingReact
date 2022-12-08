const express=require('express');
const errorMiddleware=require("./middleware/error");
const app=express();
app.use(express.json());
const dotenv =require('dotenv');
dotenv.config();

// Route Imports
const product =require("./routes/productRoute");
app.use("/api/v1",product);

// Middle-ware for Errors
app.use(errorMiddleware);
module.exports=app;