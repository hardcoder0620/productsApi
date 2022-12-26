const productModel = require('../models/products')

const getAllProducts = async (req,res)=>{
    const {name} = req.query
    console.log("req.query.name",name)
    const qeryObj = {}
    if(name){
        qeryObj.name = {$regex:name,$options:"i"}
    }

    const allProducts = await productModel.find(qeryObj)

    res.status(200).json({data:allProducts})
}

const getAllShirts = (req,res)=>{
    res.status(200).json({data:"get all shirts"})
}

module.exports = {getAllProducts,getAllShirts}