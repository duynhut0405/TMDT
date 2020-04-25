const router = require('express').Router();
const User=require('../model/User');
const {registerValidation,loginValidation} =require('../validation.js');
var bcrypt = require('bcryptjs');

//Register
router.post('/SignUp',async (req,res)=>{
   //Validate
   const {error} = registerValidation(req.body);
   if(error) {return res.status(400).send(error.details); }

   //Checking if user already in database
   const emailExist=await User.findOne({email:req.body.email})
   if(emailExist){return res.status(400).send('Email exist!')}

   //Hash password
   const salt = await bcrypt.genSalt(10);
   const hashPassword= await bcrypt.hash(req.body.password,salt);
   //Create new user
   const user=new User({
      name:req.body.name,
      email:req.body.email,
      password:hashPassword
   })
   try {
      const saveUser=await user.save();
      res.send({user:user._id});
   } catch (error) {
      res.status(404).send(error);
   }
})

//Login
router.post('/login',async (req,res)=>{
   //Validate
   const {error} = loginValidation(req.body);
   if(error) {return res.status(400).send(error.details); }

   //Checking if user already in database
   const user=await User.findOne({email:req.body.email})
   if(!user){return res.status(400).send('Email or password is wrong!')}

   //Check password
   const validPassword=await bcrypt.compare(req.body.password,user.password);
   if(!validPassword){return res.status(400).send('Email or password is wrong!')}
   res.status(201).send('Success');
})

module.exports =router;
