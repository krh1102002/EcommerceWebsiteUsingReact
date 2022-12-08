const Product=require("../models/productmodels");
const ErrorHander=require("../utils/errorhander");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");
//creating product  --- for admin dashboard only
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
});

// for getting all the data  --- for admin dashboard only
exports.getAllProducts=catchAsyncErrors(async(req,res)=>{
    const products=await Product.find()
res.status(200).json({
    success:true,
    products})
});

//for updating the product --- admin dashboard only
exports.updateProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product Not Found",404));
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
});
/// deleting product

exports.deleteProduct=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product Not Found",404));
    }
    await product.remove() // by using this product will delete automatically

    res.status(200).json({
        success:true,
        message:"Product deleted Successfully"
    })
});
// get product details
exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product Not Found",404));
    }
    res.status(200).json({
        success:true,
        product
    })
});