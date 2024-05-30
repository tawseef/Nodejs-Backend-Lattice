const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { PatientSchema } = require("../model/model.registration");
const { HospitalSchema } = require("../model/model.hospital");

class Service{

  postPatientData = async (data) =>{
    try{
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(data.password, salt);
      const result = await PatientSchema.create({...data, password: hashedPassword});

      return result;

    }catch(error){
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
  };
  
  getPsychiatristsCount =  async (id) =>{
    try{
      const result = await HospitalSchema.findById(id);
      
      if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Hospital id not found");
      }
  
      return result;
    }catch(e){
      throw new ApiError(httpStatus.BAD_REQUEST);
    }
  };
}



module.exports = Service;