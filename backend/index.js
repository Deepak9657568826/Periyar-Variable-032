require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = 6003;

const { userRouter } = require("./routes/user.route");
const { connectToDb } = require("./db/conn");

app.use(cors());

app.use(express.json());
app.use('/users',userRouter);


app.listen(PORT,()=>{
    try{
connectToDb("mongodb://127.0.0.1:27017/demo");
console.log("we are connected to database");
console.log(`Server is running at ${PORT}`);
    }catch(err){
        console.log(err.message);
    }
    
})