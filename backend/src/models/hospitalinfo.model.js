import mongoose from "mongoose";

const HospitalinfoSchema = new mongoose.Schema({
  hospitalName: String,
  address: String,
  hospitalAddress: String,
  registrationNumber: {
    type: String,
    unique: true,
  },
  hospitalType: {
    type: String,
  },
  hospitalEmail: {
    type: String,
    unique: true,
  },
  hospitalPhone1: {
    type: String,
    unique: true,
    require: true,
  },
  hospitalPhone2: {
    type: String,
    require: false,
  },
  credInfo: {
    type: mongoose.Schema.ObjectId,
    ref: 'Creds'
  }
}, 
{timestamps: true}
);


export const Hospitaldetails = mongoose.model('Hospitaldetails', HospitalinfoSchema)