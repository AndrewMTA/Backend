const mongoose = require('mongoose');
const {isEmail} = require('validator');

const FormSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Can't be blank"],
    index: true,
    validate: [isEmail, "invalid email"]
  },
  name: {
    type: String,
    required: [true, "Can't be blank"]
  },
  phone: {
    type: String
  },
  company: {
    type: String
  },
  pitch : {
    type : String
  },
  raise : {
    type : String
  },
  stage: {
    type: String
  },
  timeline: {
    type: String
  },
  prevRaised : {
    type : String
  },
  usa : {
    type : String, 
  },

 
  
}, {minimize: false});
 
const Form = mongoose.model('User', FormSchema);

module.exports = Form
