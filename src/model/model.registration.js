const mongoose = require("mongoose");
const validator = require("validator");

const patientSchema = new mongoose.Schema(
  
  {
    name: {type: String, required: true, trim: true},
    address: { type: String, minlength:10,required: true },
    email: {type: String, required: true, validate : (value)=> validator.isEmail(value)},
    phone: { type: String, minlength:10, maxlength:12, required: true},
    password: {type: String, required: true, },
    photo: {type: String, validate : (value)=> validator.isURL(value)},
  }
  
);



const PatientSchema = mongoose.model("PatientSchema", patientSchema);

module.exports.PatientSchema = PatientSchema;