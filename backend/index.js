const express = require("express")

const app = express();
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("This is home page")
})


const PORT = process.env.PORT || 1234

app.listen(PORT, ()=>{
    console.log(`Server is runing at port ${PORT}` );
})