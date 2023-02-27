const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create a user using: POST "/api/auth/createUser". No login required

router.post('/createuser', [
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
] , async (req, res) => {
    // If there are errors, return bad requests and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user exists already
    let user = User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    
    // .then(user => res.json(user))
    //   .catch( err => {console.log(err)
    //   res.json({error: 'Please enter unique value for email'})})
});

module.exports = router