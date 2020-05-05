const router = require('express').Router();
const Product=require('../model/Product');

router.get('/',async (req,res)=>{//http://localhost:3030/products?page=1
  const page=parseInt(req.query.page);
  const limit=9;
  const startIndex= (page-1)*limit;
  const endIndex=page*limit;
  // const docLength = await Product.countDocuments();
   await Product.find({},(err,products)=>{
    var productMap = {};
    
  //   if(endIndex < docLength)
  //   {
  //     productMap.next={
  //     page:page+1
  //   }
  // }
  //   if(startIndex > 0)
  //   {
  //     productMap.previous={
  //     page:page-1
  //     }
  //   }
    productMap.result=products.slice(startIndex,endIndex)
    
    res.json(productMap);  
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