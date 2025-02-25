const product = require('../models/product')

exports.read = async(req,res)=>{
    try {
        const id = req.params.id
        const readProduct = await product.findOne({_id:id}).exec()
        res.send(readProduct)
    } catch (error) {
        console.log(error);
        
    }
}

exports.list = async(req,res)=>{
    try {
        const listProduct = await product.find({}).exec()
        res.send(listProduct)
    } catch (error) {
        console.log(error);
        
    }
}

exports.create = async(req,res)=>{
    try {
        const createProduct = await product(req.body).save()
        res.send(createProduct)
    } catch (error) {
        console.log(error);
        
    }
}

exports.update = async(req,res)=>{
    try {
        const id = req.params.id
        const updateProduct = await product.findOneAndUpdate({_id:id},req.body,{new:true}).exec()
        res.send(updateProduct)
    } catch (error) {
        console.log(error);
        
    }
}

exports.remove = async(req,res)=>{
    try {
        const id = req.params.id
        const deleteProduct = await product.findOneAndDelete({_id:id}).exec()
        res.send(deleteProduct)
    } catch (error) {
        console.log(error);
        
    }
}