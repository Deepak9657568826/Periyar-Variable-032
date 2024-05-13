const express  = require("express");
const { newRequest, getAllrequest, deleteRequest } = require("../controllers/request.controller");

const requestRouter = express.Router();

// routes for create new request
requestRouter.post("/newRequest", newRequest)

// routes for get all request
requestRouter.get("/allRequest", getAllrequest)


requestRouter.delete("/deleteRequest/:id", deleteRequest)


module.exports ={
    requestRouter
}