const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    googleId:String,
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    image:String,
    role:{
        type:String,enum:["admin","user"],default:"user"
    }
    
})

const UserModel = mongoose.model('users',userSchema);

module.exports={
    UserModel,
    
}