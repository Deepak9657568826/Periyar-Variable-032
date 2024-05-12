require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = 8080;

const { userRouter } = require("./routes/user.route");
const { connectToDb } = require("./db/conn");
const { requestRouter } = require("./routes/request.routes");
const { offerServicesRoute } = require("./routes/offerServices.routes");

app.use(cors());

app.use(express.json());
app.use('/users', userRouter);

app.use("/request", requestRouter)

app.use("/", offerServicesRoute)

app.listen(PORT, () => {
    try {
        connectToDb("mongodb://127.0.0.1:27017/demo");
        console.log("we are connected to database");
        console.log(`Server is running at ${PORT}`);
    } catch (err) {
        console.log(err.message);
    }
})