const express = require("express")
const { createOfferService, getAllOfferServices, updateOfferService, deleteOfferService, getOneOfferServices } = require("../controllers/offerService.controller")

const offerServicesRoute = express.Router()

// create new service
offerServicesRoute.post("/newServices", createOfferService)

// get all offer service
offerServicesRoute.get("/newServices", getAllOfferServices)

offerServicesRoute.get("/oneServices/:id", getOneOfferServices)
// to update the services
offerServicesRoute.patch("/newServices/:id", updateOfferService)

// to delets the services
offerServicesRoute.delete("/newServices/:id", deleteOfferService)

module.exports = {
    offerServicesRoute
}