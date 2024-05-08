const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const registerUser = async(req,res)=>{
    const {username,email,password,role}=req.body;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(200).json({err});
            }else{
            const user = new UserModel({username,email,password:hash,role});
            await user.save();
            res.status(200).json({msg:"Anew user has been registered"});
            }
        })
          }catch(err){
        res.status(400).json({error:err.message})
    }
}

const loginUser= async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    const token = jwt.sign({userId:user._id},"masai")
                    res.status(200).json({msg:"Login",token})
                }else{
                    res.status(200).json({msg:"password not matched"})
              
                }
            })
        }else{
            res.status(200).json({msg:"Wrong credential"})
              
        }
    }catch(err){
         res.status(400).json({error:err.message})
   
    }
}


module.exports={
    registerUser,
    loginUser
}