const mongoose = require('mongoose');
const {isEmail} = require('validator');

const InvestorFormSchema = new mongoose.Schema({
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
  accredited: {
    type:String

  },
  income: {
    type:String
  }

 
  
}, {minimize: false});
 
const Investor = mongoose.model('Investor', InvestorFormSchema);

module.exports = Investor
