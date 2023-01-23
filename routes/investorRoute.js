const router = require('express').Router();
const Investor = require('../model/Invest.js');



router.get('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const form = await Investor.findById(id);
    res.status(200).json({form})
  } catch (e) {
    res.status(400).send(e.message);
  }
});


router.post('/', async(req, res)=> {
  try {
    const {
      name,
      email,
      phone,
      accredited,
      income,
      usa,
    } = req.body;
    //console.log(req.body);
    const form = await Investor.create({  
      name,
      email,
      phone,
      accredited,
      income,
      usa,
    });
    res.status(201).json(form);
  } catch (e) {
    let msg;
    if(e.code == 11000){
      msg = "already exists"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg)
  }
})



module.exports = router
