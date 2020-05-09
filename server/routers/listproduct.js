const router = require('express').Router();
const Product=require('../model/Product');

router.get('/',async (req,res)=>{
  const type=req.query.filter;
  const sort=req.query.sort;
  let myproducts=[];
  if(type){
    switch(type){//?filter=....
      case 'fruit':
      myproducts = await Product.find({type:"fruit"});
      res.json(myproducts);
      return;
      case 'vegetable':
      myproducts = await Product.find({type:"vegetable"});
      res.json(myproducts);
      return;
    }
  }
  else if(sort){//?sort=...
    switch(sort){
      case 'a-z':
        await Product.find({},(err,products)=>{
          products.sort((x,y)=>x.name>y.name?1:-1);
          myproducts=products;
        });
        res.json(myproducts);
        return;
      case 'z-a':
        await Product.find({},(err,products)=>{
          products.sort((x,y)=>x.name<y.name?1:-1);
          myproducts=products;
        });
        res.json(myproducts);
        return;
      case 'high_low':
        await Product.find({},(err,products)=>{
          products.sort((x,y)=>x.price<y.price?1:-1);
          myproducts=products;
        });
        res.json(myproducts);
        return;
      case 'low_high':
        await Product.find({},(err,products)=>{
          products.sort((x,y)=>x.price>y.price?1:-1);
          myproducts=products;
        });
        res.json(myproducts);
        return;
    }
  }
  else
  {
   myproducts = await Product.find({})
   res.json(myproducts);  }
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