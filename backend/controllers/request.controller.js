const { RequestModel } = require("../models/request.model");


// create a now request to community 
const newRequest = async (req, res) => {
  const payload = req.body;
  try {
    const request = new RequestModel(payload)
    await request.save();
    res.status(200).json({ msg: "New request has been created successfully" })


  } catch (error) {
    res.status(200).json({ msg: error })
  }
}

const getAllrequest = async (req, res) => {
  try {
    const request = await RequestModel.find()
    res.status(200).json({ msg: "All requested", request })
  } catch (error) {
    res.status(200).json({ msg: error })
  }
}

const deleteRequest = async (req, res) => {
  const {id} = req.params
  try {
    const request = await RequestModel.findByIdAndDelete({_id:id})
    res.status(200).json({ msg: "Delete request  has been successfully done" })
  } catch (error) {
    res.status(200).json({ msg: error })
  }
}

module.exports = {
  newRequest,
  getAllrequest,
  deleteRequest
}
