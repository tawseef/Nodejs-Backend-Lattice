const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const Service = require("../service/service");
const ServiceInstance = new Service();

const postPatientData = catchAsync( async (req, res) => {
  const {body} = req;
  const posting = await ServiceInstance.postPatientData(body);
  if(posting){
    res.sendStatus(httpStatus.CREATED);
  }else{
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
})

const getPsychiatristsCount = catchAsync( async (req, res) => {
  const { hospitalId } = req.params;

  const result = await ServiceInstance.getPsychiatristsCount(hospitalId);
  
  if (result) {
    res.status(httpStatus.OK).send({data: result});
  } else {
    res.status(httpStatus.NOT_FOUND).send({ message: "Not found!", hospitalId });
  }
});



module.exports = {
  postPatientData,
  getPsychiatristsCount,
};