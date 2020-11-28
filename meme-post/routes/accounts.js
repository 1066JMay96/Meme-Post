var express = require('express');
const {body, validationResults } = require('express-validator');
const router = express.Router();
const Account = require("../models/AccountSchema")
const bcrypt = require('bcryptjs');

router.get('/', function (req,res) {
  res.send('It works');
})

router.get('/about', function (req, res) {
  res.send()
})

router.post('/', [
  body('email').isEmail(),

  body('password').isLength({ min: 5 })
  ], async(req, res)=> {
  const newAccount = new Account({
    email: req.body.email,
    password: req.body.password
  })
  newAccount.save().then((record)=> {
    res.json(record)
  }) 
})
// remov
router.post('/register', async (req, res) => {
  console.log('route hit')
  try {
    const { email, password, check, displayName } = req.body;
  


  if (!email || !password || !check)
    return res.status(400).json({ msg: "Not all fields have been entered" });
  if (password.length < 6)
  return res
    .status(400)
    .json({msg: "The password needs to be at least 5 characters long." });
  if (password !== check) 
   return res
   .status(400)
   .json({msg: "Enter the same password twice for verification."});
  

       const existingUser = await Account.find({email: email});
    if (existingUser.length > 0)
      return res
     .status(400)
      .json({ msg: "An account with this email already exists. "});
    
      //if (!displayName) displayName = email;

    //   const salt = await bcrypt.genSalt(25)
    //  const passwordHash = await bcrypt.hash(password, salt);
    //   console.log(passwordHash);

    const newAccount = new Account({
      email: email,
      password: password
    })
    newAccount.save().then((record)=> {
      res.json(record)
      return res.status(200).json({
        "text": "works"
      })
    }) 
  
} catch (err) {
  res.status(500).json(err);
} 
newAccount.save().then((record)=> {
  res.json(record)
})
});
  /*body('email').isEmail(),

  body('password').isLength({ min: 5 })
  ], async(req, res)=> {
    if (req.body.password === req.body.confirmPassword){
      const newAccount = new Account({
        email: req.body.email,
        password: req.body.password
      })
      const salt = await bcrypt.genSalt(10);
        newAccount.password = await bcrypt.hash(req.body.password, salt)
      
      */
  
//}})
module.exports = router;