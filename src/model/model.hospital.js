const mongoose = require("mongoose");

const PsychiatristDetails = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true},
    patientsCount: { type: Number, default: 0 },
  },
);

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {type: Number, required: true, unique: true},
    totalPsychiatristCount: { type: Number, required: true},
    totalPatientsCount: { type: Number, required: true},
    PsychiatristDetails: { type: [PsychiatristDetails], default:[]},
  },
  { timestamps: true }
);


const HospitalSchema = mongoose.model("HospitalSchema", hospitalSchema);

module.exports.HospitalSchema = HospitalSchema;


