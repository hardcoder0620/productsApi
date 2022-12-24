const productModel = require('../models/products')

const getAllProducts = async (req,res)=>{
    const allProducts = await productModel.find({_id:"63a733288eb0be17e40c5e84"})
    res.status(200).json({data:allProducts})
}

const getAllShirts = (req,res)=>{
    res.status(200).json({data:"get all shirts"})
}

module.exports = {getAllProducts,getAllShirts}