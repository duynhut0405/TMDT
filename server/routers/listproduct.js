const router = require('express').Router();
const Product=require('../model/Product');

router.get('/',async (req,res)=>{
   const products=await Product.find({},(err,products)=>{
    var productMap = {};

    products.forEach(function(product) {
      productMap[product._id] = product;
    });
    res.send(productMap);  
   })
 })

 router.get('/:id',async (req,res)=>{
  const id= req.params.id;
  try{
    const product=await Product.findById(id);
    res.status(201).send(product);
  }
  catch(err){res.status(404).send(err)}
})
 module.exports =router;