const router = require('express').Router();
const Form = require('../model/Form');



router.get('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const form = await Form.findById(id);
    res.status(200).json({form})
  } catch (e) {
    res.status(400).send(e.message);
  }
});


router.post('/', async(req, res)=> {
  console.log("111111111111111111111111");
  try {
    const {
      name,
      email,
      phone,
      company,
      pitch,
      raise,
      stage,
      timeline,
      prevRaised,
      usa,
    } = req.body;
    //console.log(req.body);
    const form = await Form.create({  
      name,
      email,
      phone,
      company,
      pitch,
      raise,
      stage,
      timeline,
      prevRaised,
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
